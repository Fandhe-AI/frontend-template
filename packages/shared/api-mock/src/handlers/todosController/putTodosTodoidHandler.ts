// @ts-nocheck

import { http } from "msw";

import { createPutTodosTodoidMutationResponse } from "../../mocks/todosController/createPutTodosTodoid";
import type { PutTodosTodoidMutationResponse } from "../../types/todosController/PutTodosTodoid";

export function putTodosTodoidHandler(
  data?:
    | PutTodosTodoidMutationResponse
    | ((info: Parameters<Parameters<typeof http.put>[1]>[0]) => Response),
) {
  return http.put(
    "http://localhost:8001/todos/:todoId",
    function handler(info) {
      if (typeof data === "function") return data(info);

      return new Response(
        JSON.stringify(data || createPutTodosTodoidMutationResponse(data)),
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
    },
  );
}
