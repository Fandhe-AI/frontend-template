import type {
  RequestConfig,
  ResponseErrorConfig,
} from "@kubb/plugin-client/clients/fetch";
import fetch from "@kubb/plugin-client/clients/fetch";

import type {
  PostAuthRefresh400,
  PostAuthRefresh401,
  PostAuthRefresh500,
  PostAuthRefreshMutationRequest,
  PostAuthRefreshMutationResponse,
} from "../../types/authController/PostAuthRefresh";
import {
  postAuthRefreshMutationRequestSchema,
  postAuthRefreshMutationResponseSchema,
} from "../../zod/authController/postAuthRefreshSchema";

function getPostAuthRefreshUrl() {
  return `/auth/refresh` as const;
}

/**
 * @description リフレッシュトークンを使用してアクセストークンを更新します。
 * @summary トークンの更新
 * {@link /auth/refresh}
 */
export async function postAuthRefresh(
  data: PostAuthRefreshMutationRequest,
  config: Partial<RequestConfig<PostAuthRefreshMutationRequest>> & {
    client?: typeof fetch;
  } = {},
) {
  const { client: request = fetch, ...requestConfig } = config;

  const requestData = postAuthRefreshMutationRequestSchema.parse(data);
  const res = await request<
    PostAuthRefreshMutationResponse,
    ResponseErrorConfig<
      PostAuthRefresh400 | PostAuthRefresh401 | PostAuthRefresh500
    >,
    PostAuthRefreshMutationRequest
  >({
    method: "POST",
    url: getPostAuthRefreshUrl().toString(),
    data: requestData,
    ...requestConfig,
  });
  return postAuthRefreshMutationResponseSchema.parse(res.data);
}
