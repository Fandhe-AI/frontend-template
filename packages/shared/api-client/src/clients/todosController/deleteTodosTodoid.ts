import type {
  RequestConfig,
  ResponseErrorConfig,
} from "@kubb/plugin-client/clients/fetch";
import client from "@kubb/plugin-client/clients/fetch";

import type {
  DeleteTodosTodoid401,
  DeleteTodosTodoid404,
  DeleteTodosTodoid500,
  DeleteTodosTodoidMutationResponse,
  DeleteTodosTodoidPathParams,
} from "../../types/todosController/DeleteTodosTodoid";
import { deleteTodosTodoidMutationResponseSchema } from "../../zod/todosController/deleteTodosTodoidSchema";

function getDeleteTodosTodoidUrl(
  todoId: DeleteTodosTodoidPathParams["todoId"],
) {
  return `/todos/${todoId}` as const;
}

/**
 * @description 指定された ID の Todo アイテムを削除します。この操作は元に戻せません。
 * @summary Todo の削除
 * {@link /todos/:todoId}
 */
export async function deleteTodosTodoid(
  todoId: DeleteTodosTodoidPathParams["todoId"],
  config: Partial<RequestConfig> & { client?: typeof client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    DeleteTodosTodoidMutationResponse,
    ResponseErrorConfig<
      DeleteTodosTodoid401 | DeleteTodosTodoid404 | DeleteTodosTodoid500
    >,
    unknown
  >({
    method: "DELETE",
    url: getDeleteTodosTodoidUrl(todoId).toString(),
    ...requestConfig,
  });
  return deleteTodosTodoidMutationResponseSchema.parse(res.data);
}
