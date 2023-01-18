import { combineReducers, createStore } from 'redux';
import todos from '../modules/todos';

// 1. reducer 들을 합치기 위해 rootReducer를 만든다.
// reducer : modules 밑에 있는 여러 파일들이 반환하는 값.
// 현재 프로젝트에서는 투두리스트를 만들기 위해 todos 가 있는데 counter, users 등 더 많은 reducer 들도 들어갈 수 있다.
const rootReducer = combineReducers({
  todos,
  // counter,
  // users,
});

// 2. rootReducer 를 이용해서 store를 만들 것이다(main)
const store = createStore(rootReducer);

// 3. export 해서 다른 파일에서 import 할 수 있도록 할 것이다.
export default store;
