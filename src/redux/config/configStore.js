import { combineReducers, createStore } from 'redux';

// 1. reducer 들을 만들기 위해 rootReducer 를 만든다.
// 2. reducer: modules 밑에 있는 여러 파일들이 반환하는 값.
// 3. 현재 프로젝트에서는 투두리스트를 만들기 위해 todos라는 모듈이 있는데 counter, users 등 더 많은 reducer 들도 들어갈 수 있음.

const rootReducer = combineReducers({
  todos,
});

const store = createStore(rootReducer);

export default store;
