import { faker } from "@faker-js/faker";

import type {
  GetTodosTodoid200,
  GetTodosTodoid401,
  GetTodosTodoid404,
  GetTodosTodoid500,
  GetTodosTodoidPathParams,
  GetTodosTodoidQueryResponse,
} from "../../types/todosController/GetTodosTodoid";

export function createGetTodosTodoidPathParams(
  data?: Partial<GetTodosTodoidPathParams>,
): GetTodosTodoidPathParams {
  return {
    ...{ todoId: faker.string.alpha() },
    ...(data || {}),
  };
}

/**
 * @description Todo の取得に成功
 */
export function createGetTodosTodoid200(
  data?: Partial<GetTodosTodoid200>,
): GetTodosTodoid200 {
  return {
    ...{
      id: faker.string.alpha(),
      title: faker.string.alpha({ length: { min: 1, max: 200 } }),
      description: faker.string.alpha({ length: 1000 }),
      status: faker.helpers.arrayElement<
        NonNullable<GetTodosTodoid200>["status"]
      >(["pending", "completed"]),
      priority: faker.helpers.arrayElement<
        NonNullable<GetTodosTodoid200>["priority"]
      >(["low", "medium", "high"]),
      category_id: faker.string.alpha(),
      due_date: faker.date.anytime(),
      created_at: faker.date.anytime(),
      updated_at: faker.date.anytime(),
    },
    ...(data || {}),
  };
}

/**
 * @description 認証が必要です
 */
export function createGetTodosTodoid401(
  data?: Partial<GetTodosTodoid401>,
): GetTodosTodoid401 {
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
 * @description リソースが見つかりません
 */
export function createGetTodosTodoid404(
  data?: Partial<GetTodosTodoid404>,
): GetTodosTodoid404 {
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
export function createGetTodosTodoid500(
  data?: Partial<GetTodosTodoid500>,
): GetTodosTodoid500 {
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

export function createGetTodosTodoidQueryResponse(
  data?: Partial<GetTodosTodoidQueryResponse>,
): GetTodosTodoidQueryResponse {
  return data || faker.helpers.arrayElement<any>([createGetTodosTodoid200()]);
}
