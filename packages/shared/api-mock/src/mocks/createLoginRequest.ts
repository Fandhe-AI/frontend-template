import { faker } from "@faker-js/faker";

import type { LoginRequest } from "../types/LoginRequest";

/**
 * @description ログイン時のリクエストボディ
 */
export function createLoginRequest(data?: Partial<LoginRequest>): LoginRequest {
  return {
    ...{
      email: faker.internet.email(),
      password: faker.string.alpha({ length: 8 }),
    },
    ...(data || {}),
  };
}
