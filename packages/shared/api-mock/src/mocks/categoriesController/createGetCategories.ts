import { faker } from "@faker-js/faker";

import type {
  GetCategories200,
  GetCategories401,
  GetCategories500,
  GetCategoriesQueryResponse,
} from "../../types/categoriesController/GetCategories";

/**
 * @description カテゴリリストの取得に成功
 */
export function createGetCategories200(
  data?: Partial<GetCategories200>,
): GetCategories200 {
  return {
    ...{
      data: faker.helpers.multiple(() => ({
        id: faker.string.alpha(),
        name: faker.string.alpha({ length: { min: 1, max: 50 } }),
        description: faker.string.alpha({ length: 200 }),
        color: faker.helpers.fromRegExp(/^#[0-9a-fA-F]{6}$/),
        created_at: faker.date.anytime(),
      })),
    },
    ...(data || {}),
  };
}

/**
 * @description 認証が必要です
 */
export function createGetCategories401(
  data?: Partial<GetCategories401>,
): GetCategories401 {
  return {
    ...{
      error: {
        code: faker.string.alpha(),
        message: faker.string.alpha(),
        details: faker.helpers.multiple(() => ({
          field: faker.string.alpha(),
          message: faker.string.alpha(),
        })),
      },
    },
    ...(data || {}),
  };
}

/**
 * @description サーバー内部エラー
 */
export function createGetCategories500(
  data?: Partial<GetCategories500>,
): GetCategories500 {
  return {
    ...{
      error: {
        code: faker.string.alpha(),
        message: faker.string.alpha(),
        details: faker.helpers.multiple(() => ({
          field: faker.string.alpha(),
          message: faker.string.alpha(),
        })),
      },
    },
    ...(data || {}),
  };
}

export function createGetCategoriesQueryResponse(
  data?: Partial<GetCategoriesQueryResponse>,
): GetCategoriesQueryResponse {
  return data || faker.helpers.arrayElement<any>([createGetCategories200()]);
}
