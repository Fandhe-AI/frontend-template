import type {
  RequestConfig,
  ResponseErrorConfig,
} from "@kubb/plugin-client/clients/fetch";
import client from "@kubb/plugin-client/clients/fetch";

import type {
  PostCategories400,
  PostCategories401,
  PostCategories422,
  PostCategories500,
  PostCategoriesMutationRequest,
  PostCategoriesMutationResponse,
} from "../../types/categoriesController/PostCategories";
import {
  postCategoriesMutationRequestSchema,
  postCategoriesMutationResponseSchema,
} from "../../zod/categoriesController/postCategoriesSchema";

function getPostCategoriesUrl() {
  return `/categories` as const;
}

/**
 * @description 新しいカテゴリを作成します。
 * @summary 新しいカテゴリの作成
 * {@link /categories}
 */
export async function postCategories(
  data: PostCategoriesMutationRequest,
  config: Partial<RequestConfig<PostCategoriesMutationRequest>> & {
    client?: typeof client;
  } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const requestData = postCategoriesMutationRequestSchema.parse(data);
  const res = await request<
    PostCategoriesMutationResponse,
    ResponseErrorConfig<
      | PostCategories400
      | PostCategories401
      | PostCategories422
      | PostCategories500
    >,
    PostCategoriesMutationRequest
  >({
    method: "POST",
    url: getPostCategoriesUrl().toString(),
    data: requestData,
    ...requestConfig,
  });
  return postCategoriesMutationResponseSchema.parse(res.data);
}
