import { faker } from "@faker-js/faker";

import type {
  PostTodos201,
  PostTodos400,
  PostTodos401,
  PostTodos422,
  PostTodos500,
  PostTodosMutationRequest,
  PostTodosMutationResponse,
} from "../../types/todosController/PostTodos";

/**
 * @description Todo の作成に成功
 */
export function createPostTodos201(data?: Partial<PostTodos201>): PostTodos201 {
  return {
    ...{
      id: faker.string.alpha(),
      title: faker.string.alpha({ length: { min: 1, max: 200 } }),
      description: faker.string.alpha({ length: 1000 }),
      status: faker.helpers.arrayElement<NonNullable<PostTodos201>["status"]>([
        "pending",
        "completed",
      ]),
      priority: faker.helpers.arrayElement<
        NonNullable<PostTodos201>["priority"]
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
export function createPostTodos400(data?: Partial<PostTodos400>): PostTodos400 {
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
export function createPostTodos401(data?: Partial<PostTodos401>): PostTodos401 {
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
export function createPostTodos422(data?: Partial<PostTodos422>): PostTodos422 {
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
export function createPostTodos500(data?: Partial<PostTodos500>): PostTodos500 {
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

export function createPostTodosMutationRequest(
  data?: Partial<PostTodosMutationRequest>,
): PostTodosMutationRequest {
  return {
    ...{
      title: faker.string.alpha({ length: { min: 1, max: 200 } }),
      description: faker.string.alpha({ length: 1000 }),
      priority: faker.helpers.arrayElement<
        NonNullable<PostTodosMutationRequest>["priority"]
      >(["low", "medium", "high"]),
      category_id: faker.string.alpha(),
      due_date: faker.date.anytime(),
    },
    ...(data || {}),
  };
}

export function createPostTodosMutationResponse(
  data?: Partial<PostTodosMutationResponse>,
): PostTodosMutationResponse {
  return data || faker.helpers.arrayElement<any>([createPostTodos201()]);
}
