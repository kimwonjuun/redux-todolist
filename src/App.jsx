import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoList from './redux/components/TodoList';
import Input from './redux/components/Input';
import Header from './redux/components/Header';
import Footer from './redux/components/Footer';

// 투두앱
// 1. 인풋, 인풋이 출력될 투두리스트 부분
// 2. 인풋을 입력하고 버튼을 누르면 투두리스트로 출력
// 3. 출력된 투두리스트는 진행 완료 간 스위치 가능, 삭제 가능

const App = () => {
  const [todos, setTodos] = useState([
    {
      title: '제목1',
      contents: '내용1',
      isDone: false,
      id: uuidv4(),
    },
    {
      title: '제목2',
      contents: '내용2',
      isDone: true,
      id: uuidv4(),
    },
  ]);

  return (
    <div>
      <Header />
      <Input setTodos={setTodos} />
      <TodoList isActive={true} todos={todos} setTodos={setTodos} />
      <TodoList isActive={false} todos={todos} setTodos={setTodos} />
      <Footer />
    </div>
  );
};

export default App;
