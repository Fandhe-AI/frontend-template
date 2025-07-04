import { faker } from "@faker-js/faker";

import type { AuthResponse } from "../types/AuthResponse";
import { createUser } from "./createUser";

/**
 * @description 認証成功時のレスポンス
 */
export function createAuthResponse(data?: Partial<AuthResponse>): AuthResponse {
  return {
    ...{
      access_token: faker.string.alpha(),
      refresh_token: faker.string.alpha(),
      token_type: faker.string.alpha(),
      expires_in: faker.number.int(),
      user: createUser(),
    },
    ...(data || {}),
  };
}
