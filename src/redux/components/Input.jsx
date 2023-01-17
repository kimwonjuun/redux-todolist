import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Input = ({ setTodos }) => {
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');

  const titleChange = (event) => {
    setTitle(event.target.value);
  };
  const contentsChange = (event) => {
    setContents(event.target.value);
  };

  const inputSubmit = (event) => {
    event.preventDefault();

    const newTodo = {
      title,
      contents,
      isDone: false,
      id: uuidv4(),
    };

    setTodos((prev) => {
      return [...prev, newTodo];
    });
  };

  return (
    <form onSubmit={inputSubmit}>
      제목 : <input type="text" value={title} onChange={titleChange} />
      내용 : <input type="text" value={contents} onChange={contentsChange} />
      <button>확인</button>
    </form>
  );
};

export default Input;
