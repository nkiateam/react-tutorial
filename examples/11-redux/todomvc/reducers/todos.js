/*
    3. 실질적으로 변화를 일으키는 함수인 리듀서 정의
    리듀서는 액션의 type에 따라 변화를 일으키는 함수입니다. 
    그리고 이 리듀서 파일에는 최초 변화를 일으키기 전 지니고 있어야 할 초기상태가 정의되어야 합니다.
*/

import { ADD_TODO, DELETE_TODO, EDIT_TODO, COMPLETE_TODO, COMPLETE_ALL, CLEAR_COMPLETED } from '../constants/ActionTypes';

// 초기 상태 정의
const initialState = [
  {
    text: 'Use Redux',
    completed: false,
    id: 0
  }
];

/*
    리듀서 함수 작성
    : 리듀서 함수는 state와 action을 파라미터로 가지는 함수이며, 
      state가 undefined 일때 (스토어가 생성될 때) state의 기본값을 initialState 로 사용합니다.
      내부에서 switch문을 통하여 action.type에 따라 상태에 다른 변화를 일으키면 됩니다.

    여기서 주의하실 점은, state를 직접 수정하면 안되고, 기존 state 값에 원하는 값을 덮어쓴 새 상태객체를 만들어서 반환해야합니다.
*/

export default function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        {
          id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
          completed: false,
          text: action.text
        }, 
        ...state
      ];

    case DELETE_TODO:
      return state.filter(todo => todo.id !== action.id);
      // 배열에는 filter라는 내장함수가 있는데 이 함수는 특정 조건에 부합되는 원소들만 봅아내서 새 배열을 만들어줍니다.

    case EDIT_TODO:
      return state.map(todo => todo.id === action.id ?
                        Object.assign({}, todo, { text: action.text }) : todo
      );

    case COMPLETE_TODO:
      return state.map(todo => todo.id === action.id ?
                        Object.assign({}, todo, { completed: !todo.completed }) : todo
      );
      // 새로운 값이 추가되거나 업데이트 된 객체를 복사하기 위해 object.assign() 사용

    case COMPLETE_ALL:
      const areAllMarked = state.every(todo => todo.completed);
      return state.map(todo => Object.assign({}, todo, { completed: !areAllMarked })
      );

    case CLEAR_COMPLETED:
      return state.filter(todo => todo.completed === false);

    default:
      return state;
  }
}
