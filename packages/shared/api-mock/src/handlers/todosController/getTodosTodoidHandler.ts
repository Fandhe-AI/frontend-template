// @ts-nocheck

import { http } from "msw";

import { createGetTodosTodoidQueryResponse } from "../../mocks/todosController/createGetTodosTodoid";
import type { GetTodosTodoidQueryResponse } from "../../types/todosController/GetTodosTodoid";

export function getTodosTodoidHandler(
  data?:
    | GetTodosTodoidQueryResponse
    | ((info: Parameters<Parameters<typeof http.get>[1]>[0]) => Response),
) {
  return http.get(
    "http://localhost:8001/todos/:todoId",
    function handler(info) {
      if (typeof data === "function") return data(info);

      return new Response(
        JSON.stringify(data || createGetTodosTodoidQueryResponse(data)),
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
    },
  );
}
