import type {
  RequestConfig,
  ResponseErrorConfig,
} from "@kubb/plugin-client/clients/fetch";
import client from "@kubb/plugin-client/clients/fetch";

import type {
  GetTodosTodoid401,
  GetTodosTodoid404,
  GetTodosTodoid500,
  GetTodosTodoidPathParams,
  GetTodosTodoidQueryResponse,
} from "../../types/todosController/GetTodosTodoid";
import { getTodosTodoidQueryResponseSchema } from "../../zod/todosController/getTodosTodoidSchema";

function getGetTodosTodoidUrl(todoId: GetTodosTodoidPathParams["todoId"]) {
  return `/todos/${todoId}` as const;
}

/**
 * @description 指定された ID の Todo アイテムの詳細を取得します。
 * @summary 特定の Todo の取得
 * {@link /todos/:todoId}
 */
export async function getTodosTodoid(
  todoId: GetTodosTodoidPathParams["todoId"],
  config: Partial<RequestConfig> & { client?: typeof client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    GetTodosTodoidQueryResponse,
    ResponseErrorConfig<
      GetTodosTodoid401 | GetTodosTodoid404 | GetTodosTodoid500
    >,
    unknown
  >({
    method: "GET",
    url: getGetTodosTodoidUrl(todoId).toString(),
    ...requestConfig,
  });
  return getTodosTodoidQueryResponseSchema.parse(res.data);
}
