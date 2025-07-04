// @ts-nocheck

import { http } from "msw";

import { createPostTodosMutationResponse } from "../../mocks/todosController/createPostTodos";
import type { PostTodosMutationResponse } from "../../types/todosController/PostTodos";

export function postTodosHandler(
  data?:
    | PostTodosMutationResponse
    | ((info: Parameters<Parameters<typeof http.post>[1]>[0]) => Response),
) {
  return http.post("http://localhost:8001/todos", function handler(info) {
    if (typeof data === "function") return data(info);

    return new Response(
      JSON.stringify(data || createPostTodosMutationResponse(data)),
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  });
}
