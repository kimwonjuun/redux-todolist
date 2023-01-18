import { v4 as uuidv4 } from 'uuid';

// 1. action items 를 만들 것이다.
const ADD_TODO = 'ADD_TODO';
const REMOVE_TODO = 'REMOVE_TODO';
const SWITCH_TODO = 'SWITCH_TODO';

// 2. action creators 를 만들 것이다.
// action creator(1)
export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload: payload,
  };
};

// action creator(2)
export const removeTodo = (payload) => {
  return {
    type: REMOVE_TODO,
    payload,
  };
};

// action creator(3)
export const switchTodo = (payload) => {
  return {
    type: SWITCH_TODO,
    payload,
  };
};

// 3. reducer 를 구성할 때 사용할 initialState 를 만들 것이다.
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

// 4. reducer 를 만들 것이다.
const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case REMOVE_TODO:
      return state.filter((item) => item.id !== action.payload);
    case SWITCH_TODO:
      return state.map((item) => {
        // console.log('test', action.payload);
        // console.log('item.id', item.id);
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

// 5. reducer 를 export 할 것이다.
export default todos;
