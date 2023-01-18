import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

const Detail = () => {
  const paramId = useParams().id;
  // console.log(paramId);
  const navigate = useNavigate();

  const todos = useSelector((state) => state.todos);
  console.log('todos', todos);
  const filteredTodo = todos.filter((item) => item.id === paramId)[0];
  console.log('filteredTodo', filteredTodo);
  // 화살표 함수로 축약시 콘솔에 undefined 출력됨
  //
  // const filteredTodo = todos.filter(function (item) {
  //     console.log(item.id);
  //     console.log(paramId);
  //     return item.id === paramId;
  // })[0];
  // 위 식 콘솔에 정상 출력됨
  // 메인에서 상세보기를 통해 들어오면 입력된 uuid 값이 같아 정상 출력되나
  // Detail 페이지 내에서 refresh 하면 들어올 때의 id 값과 refresh 후 변경된 uuid 값이 달라져 filteredTodo 에 undefined 이 출력되는 것.

  return (
    <StyledDetailArea>
      <h3>입력 받은 ID와 일치하는 상세보기</h3>
      제목 : {filteredTodo.title}
      <br />
      내용 : {filteredTodo.contents}
      <br />
      완료 여부 : {filteredTodo.isDone.toString()}
      <br />
      <br />
      <button
        onClick={() => {
          navigate('/');
        }}
      >
        이전 페이지로 돌아가기
      </button>
    </StyledDetailArea>
  );
};

export default Detail;

const StyledDetailArea = styled.div`
  background-color: #e8e1fa;
  padding: 20px;
`;
