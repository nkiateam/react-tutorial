/*
  2. 액션 생성 함수 정의 (액션 생성 함수를 통하여 action 객체를 빠르게 만들 수 있도록 도와줌)
  액션을 만들 때마다 객체를 그때그때 만들기 힘들어서 액션을 만드는 함수를 만들었습니다.
  이를 액션 생성자 라고 부르겠습니다.

  addTodo, deleteTodo, editTodo, completeTodo의 경우 파라미터를 받고 이 값을 객체 안에 넣어줍니다.
*/
import * as types from '../constants/ActionTypes'

export const addTodo = (text) => {
  return { type: types.ADD_TODO, text }
}

export const deleteTodo = (id) => {
  return { type: types.DELETE_TODO, id }
}

export const editTodo = (id, text) => {
  return { type: types.EDIT_TODO, id, text }
}

export const completeTodo =(id) => {
  return { type: types.COMPLETE_TODO, id }
}

export const completeAll = () => {
  return { type: types.COMPLETE_ALL }
}

export const clearCompleted = () => {
  return { type: types.CLEAR_COMPLETED }
}