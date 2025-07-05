import { faker } from "@faker-js/faker";

import type { User } from "../types/User";

/**
 * @description ユーザー情報
 */
export function createUser(data?: Partial<User>): User {
  return {
    ...{
      id: faker.string.alpha(),
      email: faker.internet.email(),
      name: faker.string.alpha(),
      created_at: faker.date.anytime(),
    },
    ...(data || {}),
  };
}
