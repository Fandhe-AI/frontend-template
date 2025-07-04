// @ts-nocheck

import { http } from "msw";

import { createDeleteTodosTodoidMutationResponse } from "../../mocks/todosController/createDeleteTodosTodoid";
import type { DeleteTodosTodoidMutationResponse } from "../../types/todosController/DeleteTodosTodoid";

export function deleteTodosTodoidHandler(
  data?:
    | DeleteTodosTodoidMutationResponse
    | ((info: Parameters<Parameters<typeof http.delete>[1]>[0]) => Response),
) {
  return http.delete(
    "http://localhost:8001/todos/:todoId",
    function handler(info) {
      if (typeof data === "function") return data(info);

      return new Response(
        JSON.stringify(data || createDeleteTodosTodoidMutationResponse(data)),
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
    },
  );
}
