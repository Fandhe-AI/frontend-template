import { faker } from "@faker-js/faker";

import type { Pagination } from "../types/Pagination";

/**
 * @description ページネーション情報
 */
export function createPagination(data?: Partial<Pagination>): Pagination {
  return {
    ...{
      page: faker.number.int({ min: 1 }),
      limit: faker.number.int({ min: 1 }),
      total: faker.number.int({ min: 0 }),
      total_pages: faker.number.int({ min: 0 }),
    },
    ...(data || {}),
  };
}
