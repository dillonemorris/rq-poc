import { toJS } from "mobx";
import { observer } from "mobx-react";
import React from "react";
import { useQuery } from "react-query";
import styled from "styled-components";
import { useStore } from "../hooks/useRootStore";

const TodoContainer = styled.div`
  padding-top: 120px;
`;

export const TodoList = observer(() => {
  const { currentUserStore, todoListStore } = useStore();
  const { fetchTodoList, todos } = todoListStore;
  const { user } = currentUserStore;
  const { data } = useQuery({
    queryKey: ["todo-list", user.id],
    queryFn: () => fetchTodoList(user.id),
  });

  console.log(toJS(todos));
  return (
    <TodoContainer>
      <h1>Todo</h1>
    </TodoContainer>
  );
});
