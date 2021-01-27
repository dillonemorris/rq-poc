import React from "react";
import styled from "styled-components";
import { useCompleteTodo } from "../hooks/useCompleteTodo";

const StyledTodo = styled.li`
  border-radius: 6px;
  background-color: white;
  padding: 24px;
  margin-bottom: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CompleteButton = styled.button`
  border: none;
  padding: 12px;
  border-radius: 4px;
  background-color: #ecfdf5;
  color: #064e3b;
  font-size: 14px;
  font-weight: 500;

  &:hover {
    cursor: pointer;
  }
`;

const Title = styled.h3`
  margin-right: 16px;
`;

export const Todo = ({ title, pending, id }) => {
  const completeTodo = useCompleteTodo();

  return (
    <StyledTodo>
      <Title>{title}</Title>
      {pending ? (
        <CompleteButton onClick={() => completeTodo(id)}>
          Complete
        </CompleteButton>
      ) : (
        "🥳"
      )}
    </StyledTodo>
  );
};
