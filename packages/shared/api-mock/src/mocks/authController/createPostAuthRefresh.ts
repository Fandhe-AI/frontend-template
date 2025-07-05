import { faker } from "@faker-js/faker";

import type {
  PostAuthRefresh200,
  PostAuthRefresh400,
  PostAuthRefresh401,
  PostAuthRefresh500,
  PostAuthRefreshMutationRequest,
  PostAuthRefreshMutationResponse,
} from "../../types/authController/PostAuthRefresh";

/**
 * @description トークンの更新に成功
 */
export function createPostAuthRefresh200(
  data?: Partial<PostAuthRefresh200>,
): PostAuthRefresh200 {
  return {
    ...{
      access_token: faker.string.alpha(),
      token_type: faker.string.alpha(),
      expires_in: faker.number.int(),
    },
    ...(data || {}),
  };
}

/**
 * @description リクエストが不正です
 */
export function createPostAuthRefresh400(
  data?: Partial<PostAuthRefresh400>,
): PostAuthRefresh400 {
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
 * @description 無効なリフレッシュトークン
 */
export function createPostAuthRefresh401(
  data?: Partial<PostAuthRefresh401>,
): PostAuthRefresh401 {
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
export function createPostAuthRefresh500(
  data?: Partial<PostAuthRefresh500>,
): PostAuthRefresh500 {
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

export function createPostAuthRefreshMutationRequest(
  data?: Partial<PostAuthRefreshMutationRequest>,
): PostAuthRefreshMutationRequest {
  return {
    ...{ refresh_token: faker.string.alpha() },
    ...(data || {}),
  };
}

export function createPostAuthRefreshMutationResponse(
  data?: Partial<PostAuthRefreshMutationResponse>,
): PostAuthRefreshMutationResponse {
  return data || faker.helpers.arrayElement<any>([createPostAuthRefresh200()]);
}
