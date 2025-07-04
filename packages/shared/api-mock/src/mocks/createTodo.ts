import { faker } from "@faker-js/faker";

import type { Todo } from "../types/Todo";

/**
 * @description Todo アイテムを表現するオブジェクト
 */
export function createTodo(data?: Partial<Todo>): Todo {
  return {
    ...{
      id: faker.string.alpha(),
      title: faker.string.alpha({ length: { min: 1, max: 200 } }),
      description: faker.string.alpha({ length: 1000 }),
      status: faker.helpers.arrayElement<NonNullable<Todo>["status"]>([
        "pending",
        "completed",
      ]),
      priority: faker.helpers.arrayElement<NonNullable<Todo>["priority"]>([
        "low",
        "medium",
        "high",
      ]),
      category_id: faker.string.alpha(),
      due_date: faker.date.anytime(),
      created_at: faker.date.anytime(),
      updated_at: faker.date.anytime(),
    },
    ...(data || {}),
  };
}
