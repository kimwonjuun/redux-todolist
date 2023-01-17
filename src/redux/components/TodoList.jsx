import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, isActive, setTodos }) => {
  return (
    <div>
      <h2>{isActive ? '할일' : '완료'}</h2>
      {todos
        .filter((item) => {
          return item.isDone === !isActive;
        })
        .map((item) => {
          return (
            <Todo
              setTodos={setTodos}
              item={item}
              isActive={isActive}
              key={item.id}
            />
          );
        })}
    </div>
  );
};

export default TodoList;
