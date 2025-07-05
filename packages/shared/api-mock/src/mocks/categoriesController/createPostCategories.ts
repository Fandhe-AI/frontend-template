import { faker } from "@faker-js/faker";

import type {
  PostCategories201,
  PostCategories400,
  PostCategories401,
  PostCategories422,
  PostCategories500,
  PostCategoriesMutationRequest,
  PostCategoriesMutationResponse,
} from "../../types/categoriesController/PostCategories";

/**
 * @description カテゴリの作成に成功
 */
export function createPostCategories201(
  data?: Partial<PostCategories201>,
): PostCategories201 {
  return {
    ...{
      id: faker.string.alpha(),
      name: faker.string.alpha({ length: { min: 1, max: 50 } }),
      description: faker.string.alpha({ length: 200 }),
      color: faker.helpers.fromRegExp(/^#[0-9a-fA-F]{6}$/),
      created_at: faker.date.anytime(),
    },
    ...(data || {}),
  };
}

/**
 * @description リクエストが不正です
 */
export function createPostCategories400(
  data?: Partial<PostCategories400>,
): PostCategories400 {
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
 * @description 認証が必要です
 */
export function createPostCategories401(
  data?: Partial<PostCategories401>,
): PostCategories401 {
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
 * @description バリデーションエラー
 */
export function createPostCategories422(
  data?: Partial<PostCategories422>,
): PostCategories422 {
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
export function createPostCategories500(
  data?: Partial<PostCategories500>,
): PostCategories500 {
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

export function createPostCategoriesMutationRequest(
  data?: Partial<PostCategoriesMutationRequest>,
): PostCategoriesMutationRequest {
  return {
    ...{
      name: faker.string.alpha({ length: { min: 1, max: 50 } }),
      description: faker.string.alpha({ length: 200 }),
      color: faker.helpers.fromRegExp(/^#[0-9a-fA-F]{6}$/),
    },
    ...(data || {}),
  };
}

export function createPostCategoriesMutationResponse(
  data?: Partial<PostCategoriesMutationResponse>,
): PostCategoriesMutationResponse {
  return data || faker.helpers.arrayElement<any>([createPostCategories201()]);
}
