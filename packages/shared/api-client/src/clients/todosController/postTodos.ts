import type {
  RequestConfig,
  ResponseErrorConfig,
} from "@kubb/plugin-client/clients/fetch";
import client from "@kubb/plugin-client/clients/fetch";

import type {
  PostTodos400,
  PostTodos401,
  PostTodos422,
  PostTodos500,
  PostTodosMutationRequest,
  PostTodosMutationResponse,
} from "../../types/todosController/PostTodos";
import {
  postTodosMutationRequestSchema,
  postTodosMutationResponseSchema,
} from "../../zod/todosController/postTodosSchema";

function getPostTodosUrl() {
  return `/todos` as const;
}

/**
 * @description 新しい Todo アイテムを作成します。タイトルは必須項目です。
 * @summary 新しい Todo の作成
 * {@link /todos}
 */
export async function postTodos(
  data: PostTodosMutationRequest,
  config: Partial<RequestConfig<PostTodosMutationRequest>> & {
    client?: typeof client;
  } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const requestData = postTodosMutationRequestSchema.parse(data);
  const res = await request<
    PostTodosMutationResponse,
    ResponseErrorConfig<
      PostTodos400 | PostTodos401 | PostTodos422 | PostTodos500
    >,
    PostTodosMutationRequest
  >({
    method: "POST",
    url: getPostTodosUrl().toString(),
    data: requestData,
    ...requestConfig,
  });
  return postTodosMutationResponseSchema.parse(res.data);
}
