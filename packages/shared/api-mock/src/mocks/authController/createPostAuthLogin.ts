import { faker } from "@faker-js/faker";

import type {
  PostAuthLogin200,
  PostAuthLogin400,
  PostAuthLogin401,
  PostAuthLogin500,
  PostAuthLoginMutationRequest,
  PostAuthLoginMutationResponse,
} from "../../types/authController/PostAuthLogin";

/**
 * @description ログインに成功
 */
export function createPostAuthLogin200(
  data?: Partial<PostAuthLogin200>,
): PostAuthLogin200 {
  return {
    ...{
      access_token: faker.string.alpha(),
      refresh_token: faker.string.alpha(),
      token_type: faker.string.alpha(),
      expires_in: faker.number.int(),
      user: {
        id: faker.string.alpha(),
        email: faker.internet.email(),
        name: faker.string.alpha(),
        created_at: faker.date.anytime(),
      },
    },
    ...(data || {}),
  };
}

/**
 * @description リクエストが不正です
 */
export function createPostAuthLogin400(
  data?: Partial<PostAuthLogin400>,
): PostAuthLogin400 {
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
 * @description 認証に失敗
 */
export function createPostAuthLogin401(
  data?: Partial<PostAuthLogin401>,
): PostAuthLogin401 {
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
export function createPostAuthLogin500(
  data?: Partial<PostAuthLogin500>,
): PostAuthLogin500 {
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

export function createPostAuthLoginMutationRequest(
  data?: Partial<PostAuthLoginMutationRequest>,
): PostAuthLoginMutationRequest {
  return {
    ...{
      email: faker.internet.email(),
      password: faker.string.alpha({ length: 8 }),
    },
    ...(data || {}),
  };
}

export function createPostAuthLoginMutationResponse(
  data?: Partial<PostAuthLoginMutationResponse>,
): PostAuthLoginMutationResponse {
  return data || faker.helpers.arrayElement<any>([createPostAuthLogin200()]);
}
