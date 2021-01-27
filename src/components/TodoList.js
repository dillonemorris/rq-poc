import React from "react";
import styled from "styled-components";

const StyledTodoList = styled.ul`
  list-style: none;
  padding-inline-start: 0;
`;

export const TodoList = ({ children }) => {
  return <StyledTodoList>{children}</StyledTodoList>;
};
