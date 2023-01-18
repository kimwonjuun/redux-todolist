import { combineReducers, createStore } from 'redux';
import todos from '../modules/todos';

// 1. reducer 들을 만들기 위해 rootReducer 를 만든다.
// 2. reducer: modules 밑에 있는 여러 파일들이 반환하는 값.

const rootReducer = combineReducers({
  todos,
});

const store = createStore(rootReducer);

export default store;
