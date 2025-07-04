// @ts-nocheck

import { http } from "msw";

import { createGetTodosQueryResponse } from "../../mocks/todosController/createGetTodos";
import type { GetTodosQueryResponse } from "../../types/todosController/GetTodos";

export function getTodosHandler(
  data?:
    | GetTodosQueryResponse
    | ((info: Parameters<Parameters<typeof http.get>[1]>[0]) => Response),
) {
  return http.get("http://localhost:8001/todos", function handler(info) {
    if (typeof data === "function") return data(info);

    return new Response(
      JSON.stringify(data || createGetTodosQueryResponse(data)),
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  });
}
