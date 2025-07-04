import type {
  RequestConfig,
  ResponseErrorConfig,
} from "@kubb/plugin-client/clients/fetch";
import client from "@kubb/plugin-client/clients/fetch";

import type {
  PatchTodosTodoidToggle401,
  PatchTodosTodoidToggle404,
  PatchTodosTodoidToggle500,
  PatchTodosTodoidToggleMutationResponse,
  PatchTodosTodoidTogglePathParams,
} from "../../types/todosController/PatchTodosTodoidToggle";
import { patchTodosTodoidToggleMutationResponseSchema } from "../../zod/todosController/patchTodosTodoidToggleSchema";

function getPatchTodosTodoidToggleUrl(
  todoId: PatchTodosTodoidTogglePathParams["todoId"],
) {
  return `/todos/${todoId}/toggle` as const;
}

/**
 * @description Todo の完了状態を切り替えます。pending の場合は completed に、completed の場合は pending に変更されます。
 * @summary Todo の完了状態の切り替え
 * {@link /todos/:todoId/toggle}
 */
export async function patchTodosTodoidToggle(
  todoId: PatchTodosTodoidTogglePathParams["todoId"],
  config: Partial<RequestConfig> & { client?: typeof client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    PatchTodosTodoidToggleMutationResponse,
    ResponseErrorConfig<
      | PatchTodosTodoidToggle401
      | PatchTodosTodoidToggle404
      | PatchTodosTodoidToggle500
    >,
    unknown
  >({
    method: "PATCH",
    url: getPatchTodosTodoidToggleUrl(todoId).toString(),
    ...requestConfig,
  });
  return patchTodosTodoidToggleMutationResponseSchema.parse(res.data);
}
