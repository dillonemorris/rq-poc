import { useMutation, useQueryClient } from "react-query";
import { fetchWrapper } from "../utils/fetchWrapper";

export const useCompleteTodo = () => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation(patchTodoAsComplete, {
    onSettled: () => {
      queryClient.invalidateQueries("todos");
    },
  });

  return mutate;
};

// resource will not be really updated on the server but it will be faked as if.
const patchTodoAsComplete = (id) => {
  return fetchWrapper(`todos/${id}`, {
    method: "PATCH",
    body: JSON.stringify({
      completed: true,
    }),
    headers: {
      "Content-type": "application/json",
    },
  });
};
