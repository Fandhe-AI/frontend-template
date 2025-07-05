import type {
  RequestConfig,
  ResponseErrorConfig,
} from "@kubb/plugin-client/clients/fetch";
import fetch from "@kubb/plugin-client/clients/fetch";

import type {
  PutTodosTodoid400,
  PutTodosTodoid401,
  PutTodosTodoid404,
  PutTodosTodoid422,
  PutTodosTodoid500,
  PutTodosTodoidMutationRequest,
  PutTodosTodoidMutationResponse,
  PutTodosTodoidPathParams,
} from "../../types/todosController/PutTodosTodoid";
import {
  putTodosTodoidMutationRequestSchema,
  putTodosTodoidMutationResponseSchema,
} from "../../zod/todosController/putTodosTodoidSchema";

function getPutTodosTodoidUrl(todoId: PutTodosTodoidPathParams["todoId"]) {
  return `/todos/${todoId}` as const;
}

/**
 * @description 指定された ID の Todo アイテムを更新します。部分的な更新も可能です（提供されたフィールドのみが更新されます）。
 * @summary Todo の更新
 * {@link /todos/:todoId}
 */
export async function putTodosTodoid(
  todoId: PutTodosTodoidPathParams["todoId"],
  data?: PutTodosTodoidMutationRequest,
  config: Partial<RequestConfig<PutTodosTodoidMutationRequest>> & {
    client?: typeof fetch;
  } = {},
) {
  const { client: request = fetch, ...requestConfig } = config;

  const requestData = putTodosTodoidMutationRequestSchema.parse(data);
  const res = await request<
    PutTodosTodoidMutationResponse,
    ResponseErrorConfig<
      | PutTodosTodoid400
      | PutTodosTodoid401
      | PutTodosTodoid404
      | PutTodosTodoid422
      | PutTodosTodoid500
    >,
    PutTodosTodoidMutationRequest
  >({
    method: "PUT",
    url: getPutTodosTodoidUrl(todoId).toString(),
    data: requestData,
    ...requestConfig,
  });
  return putTodosTodoidMutationResponseSchema.parse(res.data);
}
