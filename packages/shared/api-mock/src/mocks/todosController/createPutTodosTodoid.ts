import { faker } from "@faker-js/faker";

import type {
  PutTodosTodoid200,
  PutTodosTodoid400,
  PutTodosTodoid401,
  PutTodosTodoid404,
  PutTodosTodoid422,
  PutTodosTodoid500,
  PutTodosTodoidMutationRequest,
  PutTodosTodoidMutationResponse,
  PutTodosTodoidPathParams,
} from "../../types/todosController/PutTodosTodoid";

export function createPutTodosTodoidPathParams(
  data?: Partial<PutTodosTodoidPathParams>,
): PutTodosTodoidPathParams {
  return {
    ...{ todoId: faker.string.alpha() },
    ...(data || {}),
  };
}

/**
 * @description Todo の更新に成功
 */
export function createPutTodosTodoid200(
  data?: Partial<PutTodosTodoid200>,
): PutTodosTodoid200 {
  return {
    ...{
      id: faker.string.alpha(),
      title: faker.string.alpha({ length: { min: 1, max: 200 } }),
      description: faker.string.alpha({ length: 1000 }),
      status: faker.helpers.arrayElement<
        NonNullable<PutTodosTodoid200>["status"]
      >(["pending", "completed"]),
      priority: faker.helpers.arrayElement<
        NonNullable<PutTodosTodoid200>["priority"]
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
 * @description リクエストが不正です
 */
export function createPutTodosTodoid400(
  data?: Partial<PutTodosTodoid400>,
): PutTodosTodoid400 {
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
 * @description 認証が必要です
 */
export function createPutTodosTodoid401(
  data?: Partial<PutTodosTodoid401>,
): PutTodosTodoid401 {
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
export function createPutTodosTodoid404(
  data?: Partial<PutTodosTodoid404>,
): PutTodosTodoid404 {
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
 * @description バリデーションエラー
 */
export function createPutTodosTodoid422(
  data?: Partial<PutTodosTodoid422>,
): PutTodosTodoid422 {
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
export function createPutTodosTodoid500(
  data?: Partial<PutTodosTodoid500>,
): PutTodosTodoid500 {
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

export function createPutTodosTodoidMutationRequest(
  data?: Partial<PutTodosTodoidMutationRequest>,
): PutTodosTodoidMutationRequest {
  return {
    ...{
      title: faker.string.alpha({ length: { min: 1, max: 200 } }),
      description: faker.string.alpha({ length: 1000 }),
      status: faker.helpers.arrayElement<
        NonNullable<PutTodosTodoidMutationRequest>["status"]
      >(["pending", "completed"]),
      priority: faker.helpers.arrayElement<
        NonNullable<PutTodosTodoidMutationRequest>["priority"]
      >(["low", "medium", "high"]),
      category_id: faker.string.alpha(),
      due_date: faker.date.anytime(),
    },
    ...(data || {}),
  };
}

export function createPutTodosTodoidMutationResponse(
  data?: Partial<PutTodosTodoidMutationResponse>,
): PutTodosTodoidMutationResponse {
  return data || faker.helpers.arrayElement<any>([createPutTodosTodoid200()]);
}
