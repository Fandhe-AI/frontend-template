import { faker } from "@faker-js/faker";

import type { CustomSuccess } from "../types/CustomSuccess";

/**
 * @description 成功情報
 */
export function createCustomSuccess(
  data?: Partial<CustomSuccess>,
): CustomSuccess {
  return {
    ...{ success: faker.datatype.boolean(), message: faker.string.alpha() },
    ...(data || {}),
  };
}
