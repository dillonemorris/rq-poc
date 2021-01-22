import React from "react";
import styled from "styled-components";
import { TodoList } from "./TodoList";
import { UserSelect } from "./UserSelect";

const Background = styled.div`
  background-color: #f3f4f6;
  height: 100vh;
`;

const Container = styled.div`
  max-width: 400px;
  display: flex;
  flex-direction: column;
  margin: auto;
  padding: 48px 16px;
`;

export const Dashboard = () => {
  return (
    <Background>
      <Container>
        <UserSelect />
        <TodoList />
      </Container>
    </Background>
  );
};
