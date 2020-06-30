/*
    reducer 가 여러개라면 reducer 를 하나로 묶어주는 작업이 필요합니다.
    리덕스의 스토어를 생성할 때 reducer 를 인수로 주고 생성해야 하는데, 인자로는 하나의 값만 들어올 수 있기 때문입니다.
*/
import { combineReducers } from 'redux';
import todos from './todos';

const rootReducer = combineReducers({ // 여러개의 reducer를 하나로 묶는 redux 메소드(combineReducers) 
  todos
}) // 인자로는 객체가 들어오며 객체 안에 묶을 대상들이 들어갑니다.

export default rootReducer;
