/*
    1. 액션 타입 생성(action은 객체이며, tyhpe 속성을 반드시 가지고 있어야합니다.)
    Action 의 종류들을 대문자로 선언합니다.
    앞에 export를 붙임으로서, 나중에 이것들을 불러올 때,
    import * as types from '../constants/ActionTypes' 를 할 수 있습니다.
*/

export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const EDIT_TODO = 'EDIT_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const COMPLETE_ALL = 'COMPLETE_ALL';
export const CLEAR_COMPLETED = 'CLEAR_COMPLETED';
