import { faker } from "@faker-js/faker";

import type { CustomError } from "../types/CustomError";

/**
 * @description エラー情報
 */
export function createCustomError(data?: Partial<CustomError>): CustomError {
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
