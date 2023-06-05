import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

function TodoList() {
  return (
    <TodoListBlock>
      <TodoItem text="gogogo" done={true}></TodoItem>
      <TodoItem text="alalalal" done={true}></TodoItem>
      <TodoItem text="blablabal" done={false}></TodoItem>
      <TodoItem text="lololololloo" done={false}></TodoItem>
    </TodoListBlock>
  );
}

export default TodoList;
