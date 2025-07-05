import type {
  RequestConfig,
  ResponseErrorConfig,
} from "@kubb/plugin-client/clients/fetch";
import client from "@kubb/plugin-client/clients/fetch";

import type {
  PostAuthLogin400,
  PostAuthLogin401,
  PostAuthLogin500,
  PostAuthLoginMutationRequest,
  PostAuthLoginMutationResponse,
} from "../../types/authController/PostAuthLogin";
import {
  postAuthLoginMutationRequestSchema,
  postAuthLoginMutationResponseSchema,
} from "../../zod/authController/postAuthLoginSchema";

function getPostAuthLoginUrl() {
  return `/auth/login` as const;
}

/**
 * @description メールアドレスとパスワードでユーザー認証を行います。成功時にはアクセストークンとリフレッシュトークンが返されます。
 * @summary ユーザーログイン
 * {@link /auth/login}
 */
export async function postAuthLogin(
  data: PostAuthLoginMutationRequest,
  config: Partial<RequestConfig<PostAuthLoginMutationRequest>> & {
    client?: typeof client;
  } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const requestData = postAuthLoginMutationRequestSchema.parse(data);
  const res = await request<
    PostAuthLoginMutationResponse,
    ResponseErrorConfig<PostAuthLogin400 | PostAuthLogin401 | PostAuthLogin500>,
    PostAuthLoginMutationRequest
  >({
    method: "POST",
    url: getPostAuthLoginUrl().toString(),
    data: requestData,
    ...requestConfig,
  });
  return postAuthLoginMutationResponseSchema.parse(res.data);
}
