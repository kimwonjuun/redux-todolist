import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { addTodo } from '../modules/todos';
import { v4 as uuidv4 } from 'uuid';

const Input = () => {
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');

  const dispatch = useDispatch();

  const titleInputChange = (event) => {
    setTitle(event.target.value);
  };
  const contentsInputChange = (event) => {
    setContents(event.target.value);
  };

  const submitBtnClick = (event) => {
    event.preventDefault();

    const newTodo = {
      id: uuidv4(),
      title,
      contents,
      isDone: false,
    };
    // todos.js 에 양식이 있음.

    dispatch(addTodo(newTodo));
    // todos.js 에 4번 reducer 생성 부분임 addTodo 이니 그 중 첫 번째 case.
  };

  // 1. submitBtnClick 생성 -> TodoList로 넘어가 store 에 있는 todos 가져오기.
  //
  //
  //
  // title, contents useState 생성 ->
  // ttitleInputChange, contentsInputChange 생성 ->
  // *** useDispatch 생성 ***
  // submitBtnClick 에 newTodo 생성 후 dispatch 로

  return (
    <StyledInputArea>
      <form onSubmit={submitBtnClick}>
        제목:
        <input type="text" value={title} onChange={titleInputChange} />
        내용:
        <input type="text" value={contents} onChange={contentsInputChange} />
        <button type="submit">제출</button>
      </form>
    </StyledInputArea>
  );
};

export default Input;

const StyledInputArea = styled.div`
  background-color: #c1abed;
  padding: 20px;
  font-size: large;
  font-weight: 600;
  text-align: center;
`;
