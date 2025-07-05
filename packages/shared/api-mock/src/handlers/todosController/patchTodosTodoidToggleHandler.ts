// @ts-nocheck

import { http } from "msw";

import { createPatchTodosTodoidToggleMutationResponse } from "../../mocks/todosController/createPatchTodosTodoidToggle";
import type { PatchTodosTodoidToggleMutationResponse } from "../../types/todosController/PatchTodosTodoidToggle";

export function patchTodosTodoidToggleHandler(
  data?:
    | PatchTodosTodoidToggleMutationResponse
    | ((info: Parameters<Parameters<typeof http.patch>[1]>[0]) => Response),
) {
  return http.patch(
    "http://localhost:8001/todos/:todoId/toggle",
    function handler(info) {
      if (typeof data === "function") return data(info);

      return new Response(
        JSON.stringify(
          data || createPatchTodosTodoidToggleMutationResponse(data),
        ),
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
    },
  );
}
