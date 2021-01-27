import { useMemo } from "react";
import { useQuery } from "react-query";
import { fetchWrapper } from "../utils/fetchWrapper";
import { useStore } from "./useRootStore";

// Filters todos to those belonging to currentUser held in client state
export const useCurrentUserTodos = () => {
  const { currentUser } = useStore();
  const { todoList, status, error } = useTodos();
  const currentUserTodos = useMemo(() => {
    return todoList?.filter((todo) => todo.userId === currentUser.id);
  }, [todoList, currentUser.id]);

  return {
    todoList: currentUserTodos,
    status,
    error,
  };
};

// Creates list of users to display in <UserSelect />
export const useUserList = () => {
  const { todoList } = useTodos();

  return useMemo(() => {
    return todoList?.reduce((uniqueUsers, todo) => {
      return uniqueUsers.some((user) => user.id === todo.userId)
        ? uniqueUsers
        : [...uniqueUsers, { id: todo.userId }];
    }, []);
  }, [todoList]);
};

// Query Hook
export const useTodos = () => {
  const { data: todoList, status, error } = useQuery({
    queryKey: "todos",
    queryFn: fetchTodoList,
  });

  return {
    todoList,
    status,
    error,
  };
};

const fetchTodoList = () => {
  return fetchWrapper("todos");
};
