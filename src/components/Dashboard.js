import { observer } from "mobx-react";
import React, { useMemo, useState } from "react";
import styled from "styled-components";
import { useCurrentUserTodos } from "../hooks/useTodos";
import { Spinner } from "./Spinner";
import { Todo } from "./Todo";
import { TodoList } from "./TodoList";
import UserSelect from "./UserSelect";

const SpinnerContainer = styled.div`
  height: 100vh;
  padding: 120px;
  margin: auto;
`;

const Background = styled.div`
  background-color: #f3f4f6;
`;

const TodoContainer = styled.div`
  padding-top: 120px;
`;

const FilterButton = styled.button`
  background: none;
  border: none;
  font-size: 1rem;
  font-weight: 600;
  color: #6b7280;
  padding: 8px 0px;
  margin-right: 32px;
  border-bottom: ${({ active }) => active && `3px solid cornflowerblue`};

  &:focus {
    outline: none;
  }

  &:hover {
    cursor: pointer;
  }
`;

const Container = styled.div`
  max-width: 400px;
  display: flex;
  flex-direction: column;
  margin: auto;
  padding: 48px 16px;
`;

const StyledCount = styled.span`
  padding-left: 8px;
  color: #111827;
  font-weight: bold;
`;

const FILTERS = {
  COMPLETED: "completed",
  PENDING: "pending",
};

export const Dashboard = observer(() => {
  const [activeFilter, setActiveFilter] = useState(FILTERS.PENDING);
  const { todoList, status } = useCurrentUserTodos();
  const completedTodos = useMemo(
    () => todoList?.filter((todo) => todo.completed),
    [todoList]
  );
  const pendingTodos = useMemo(
    () => todoList?.filter((todo) => !todo.completed),
    [todoList]
  );

  const activeTodos =
    activeFilter === FILTERS.COMPLETED ? completedTodos : pendingTodos;

  return (
    <Background>
      <Container>
        <UserSelect />
        <TodoContainer>
          <h1>Todo</h1>
          <FilterButton
            onClick={() => setActiveFilter(FILTERS.PENDING)}
            active={activeFilter === FILTERS.PENDING}
          >
            Pending
            <StyledCount>{pendingTodos?.length}</StyledCount>
          </FilterButton>
          <FilterButton
            onClick={() => setActiveFilter(FILTERS.COMPLETED)}
            active={activeFilter === FILTERS.COMPLETED}
          >
            Completed
            <StyledCount>{completedTodos?.length}</StyledCount>
          </FilterButton>
        </TodoContainer>

        {status === "loading" ? (
          <SpinnerContainer>
            <Spinner />
          </SpinnerContainer>
        ) : (
          <TodoList>
            {activeTodos?.map((todo) => (
              <Todo
                key={todo.id}
                pending={!todo.completed}
                title={todo.title}
                id={todo.id}
              />
            ))}
          </TodoList>
        )}
      </Container>
    </Background>
  );
});
