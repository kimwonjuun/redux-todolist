import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { removeTodo, switchTodo } from '../modules/todos';

const TodoList = ({ isActive }) => {
  // store 에 있는 todos 가져오기 (useSelector(화살표함수 state를 인자로 넣어 state > todos 가져오기))
  const todos = useSelector((state) => state.todos);
  // console.log('todos', todos);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const deleteBtnClick = (id) => {
    dispatch(removeTodo(id));
  };
  const switchBtnClick = (id) => {
    // console.log(id);
    dispatch(switchTodo(id));
  };
  // 1. store 에 있는 todos 가져오기 useSelector로 호출 -> Input 으로 넘어가 마저 구성하기
  //
  //
  //
  // deleteBtnClick 만들기 (***dispatch 가지고 있어야함)
  // deleteBrnClick 안 removeTodo 는 todos.js 에 4번 reducer 생성 부분임 removeTodo 이니 그 중 두 번째 case
  // 삭제 버튼 onClick 의 deleteBrnClick 함수는 ()=>{} 안으로 감싸줘야함
  // switchBtnClick 도 같음 todos.js 4번의 세 번째 case

  return (
    <StyledTodoListArea>
      <h4>{isActive ? '할일😅' : '완료😎'}</h4>
      {todos
        .filter((item) => item.isDone === !isActive)
        .map((item) => {
          return (
            <StyledTodoArea key={item.id}>
              <h5>{item.title}</h5>
              <h5>{item.contents}</h5>
              <button onClick={() => switchBtnClick(item.id)}>
                {isActive ? '완료' : '취소'}
              </button>
              <button onClick={() => deleteBtnClick(item.id)}>삭제</button>
              <br />
              <button
                onClick={() => {
                  navigate(`/${item.id}`);
                  // 백틱 사용
                  // 상세보기 클릭 시 / 다음
                  // 6ed9a526-acf8-4a5a-9c43-ecad375dbd49
                  // item.id 가 들어감
                }}
              >
                상세 보기
              </button>
            </StyledTodoArea>
            // TodoArea 는 다른 컴포넌트로 나누는 게 바람직함
          );
        })}
    </StyledTodoListArea>
  );
};

export default TodoList;

const StyledTodoListArea = styled.div`
  background-color: #dbcdf7;
  padding: 20px;
  font-size: large;
  font-weight: 600;
  /* text-align: center; */
  /* display: flex; */
  /* justify-content: space-between; */
`;

const StyledTodoArea = styled.div`
  border: 4px solid white;
  border-radius: 10px;
  padding: 10px;
  margin: 5px;
`;
