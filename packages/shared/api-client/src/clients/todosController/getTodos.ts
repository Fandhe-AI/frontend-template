import type {
  RequestConfig,
  ResponseErrorConfig,
} from "@kubb/plugin-client/clients/fetch";
import client from "@kubb/plugin-client/clients/fetch";

import type {
  GetTodos400,
  GetTodos401,
  GetTodos500,
  GetTodosQueryParams,
  GetTodosQueryResponse,
} from "../../types/todosController/GetTodos";
import { getTodosQueryResponseSchema } from "../../zod/todosController/getTodosSchema";

function getGetTodosUrl() {
  return `/todos` as const;
}

/**
 * @description Todo アイテムのリストを取得します。クエリパラメータを使用してフィルタリングや並び替えが可能です。
 * @summary Todo リストの取得
 * {@link /todos}
 */
export async function getTodos(
  params?: GetTodosQueryParams,
  config: Partial<RequestConfig> & { client?: typeof client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    GetTodosQueryResponse,
    ResponseErrorConfig<GetTodos400 | GetTodos401 | GetTodos500>,
    unknown
  >({
    method: "GET",
    url: getGetTodosUrl().toString(),
    params,
    ...requestConfig,
  });
  return getTodosQueryResponseSchema.parse(res.data);
}
