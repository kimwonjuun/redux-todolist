import React from 'react';

const Todo = ({ setTodos, item, isActive }) => {
  const deleteBtn = () => {
    setTodos((prev) => {
      return prev.filter((t) => {
        return t.id !== item.id;
      });
    });
  };

  const switchBtn = () => {
    setTodos((prev) => {
      return prev.map((t) => {
        if (t.id === item.id) {
          return { ...t, isDone: !t.isDone };
        } else {
          return t;
        }
      });
    });
  };
  return (
    <div key={item.id}>
      <p>{item.title}</p>
      <p>{item.contents}</p>
      <button onClick={switchBtn}>{isActive ? '완료' : '취소'}</button>
      <button onClick={deleteBtn}>삭제</button>
    </div>
  );
};

export default Todo;
