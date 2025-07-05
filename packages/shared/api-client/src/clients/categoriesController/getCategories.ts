import type {
  RequestConfig,
  ResponseErrorConfig,
} from "@kubb/plugin-client/clients/fetch";
import client from "@kubb/plugin-client/clients/fetch";

import type {
  GetCategories401,
  GetCategories500,
  GetCategoriesQueryResponse,
} from "../../types/categoriesController/GetCategories";
import { getCategoriesQueryResponseSchema } from "../../zod/categoriesController/getCategoriesSchema";

function getGetCategoriesUrl() {
  return `/categories` as const;
}

/**
 * @description 利用可能なカテゴリのリストを取得します。
 * @summary カテゴリリストの取得
 * {@link /categories}
 */
export async function getCategories(
  config: Partial<RequestConfig> & { client?: typeof client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    GetCategoriesQueryResponse,
    ResponseErrorConfig<GetCategories401 | GetCategories500>,
    unknown
  >({
    method: "GET",
    url: getGetCategoriesUrl().toString(),
    ...requestConfig,
  });
  return getCategoriesQueryResponseSchema.parse(res.data);
}
