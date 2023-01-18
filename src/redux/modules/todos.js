import { v4 as uuidv4 } from 'uuid';

// 1. action item 만들기.
// 2. action creators 만들기.
// 3. reducer를 구성할 때 사용할 initialState 만들기.
// 4. reducer 만들기.
// 5. export

const ADD_TODO = 'ADD_TODO';
const REMOVE_TODO = 'REMOVE_TODO';
const SWITCH_TODO = 'SWITCH_TODO';

export const addTodo = () => {
  return {
    type: ADD_TODO,
    payload: payload,
  };
};
export const removeTodo = () => {
  return {
    type: REMOVE_TODO,
    payload,
  };
};
export const switchTodo = () => {
  return {
    type: SWITCH_TODO,
    payload: payload,
  };
};

const initialState = [
  {
    id: uuidv4(),
    title: '제목1',
    contents: '내용1',
    isDone: false,
  },
  {
    id: uuidv4(),
    title: '제목2',
    contents: '내용2',
    isDone: true,
  },
];

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case REMOVE_TODO:
      return state.filter((item) => item.id !== action.payload);
    case SWITCH_TODO:
      return state.map((item) => {
        if (item.id === action.payload) {
          return { ...item, isDone: !item.isDone };
        } else {
          return item;
        }
      });
    default:
      return state;
  }
};
