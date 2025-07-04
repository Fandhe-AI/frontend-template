import { faker } from "@faker-js/faker";

import type { CreateTodoRequest } from "../types/CreateTodoRequest";

/**
 * @description Todo 作成時のリクエストボディ
 */
export function createCreateTodoRequest(
  data?: Partial<CreateTodoRequest>,
): CreateTodoRequest {
  return {
    ...{
      title: faker.string.alpha({ length: { min: 1, max: 200 } }),
      description: faker.string.alpha({ length: 1000 }),
      priority: faker.helpers.arrayElement<
        NonNullable<CreateTodoRequest>["priority"]
      >(["low", "medium", "high"]),
      category_id: faker.string.alpha(),
      due_date: faker.date.anytime(),
    },
    ...(data || {}),
  };
}
