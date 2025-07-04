import { faker } from "@faker-js/faker";

import type {
  GetTodos200,
  GetTodos400,
  GetTodos401,
  GetTodos500,
  GetTodosQueryParams,
  GetTodosQueryResponse,
} from "../../types/todosController/GetTodos";

export function createGetTodosQueryParams(
  data?: Partial<GetTodosQueryParams>,
): GetTodosQueryParams {
  return {
    ...{
      status: faker.helpers.arrayElement<
        NonNullable<GetTodosQueryParams>["status"]
      >(["pending", "completed", "all"]),
      category: faker.string.alpha(),
      priority: faker.helpers.arrayElement<
        NonNullable<GetTodosQueryParams>["priority"]
      >(["low", "medium", "high"]),
      search: faker.string.alpha(),
      page: faker.number.int({ min: 1 }),
      limit: faker.number.int({ min: 1, max: 100 }),
      sort: faker.helpers.arrayElement<
        NonNullable<GetTodosQueryParams>["sort"]
      >(["created_at", "updated_at", "due_date", "priority", "title"]),
      order: faker.helpers.arrayElement<
        NonNullable<GetTodosQueryParams>["order"]
      >(["asc", "desc"]),
    },
    ...(data || {}),
  };
}

/**
 * @description Todo リストの取得に成功
 */
export function createGetTodos200(data?: Partial<GetTodos200>): GetTodos200 {
  return {
    ...{
      data: faker.helpers.multiple(() => ({
        id: faker.string.alpha(),
        title: faker.string.alpha({ length: { min: 1, max: 200 } }),
        description: faker.string.alpha({ length: 1000 }),
        status: faker.helpers.arrayElement<
          NonNullable<GetTodos200["data"][number]>["status"]
        >(["pending", "completed"]),
        priority: faker.helpers.arrayElement<
          NonNullable<GetTodos200["data"][number]>["priority"]
        >(["low", "medium", "high"]),
        category_id: faker.string.alpha(),
        due_date: faker.date.anytime(),
        created_at: faker.date.anytime(),
        updated_at: faker.date.anytime(),
      })),
      pagination: {
        page: faker.number.int({ min: 1 }),
        limit: faker.number.int({ min: 1 }),
        total: faker.number.int({ min: 0 }),
        total_pages: faker.number.int({ min: 0 }),
      },
    },
    ...(data || {}),
  };
}

/**
 * @description リクエストが不正です
 */
export function createGetTodos400(data?: Partial<GetTodos400>): GetTodos400 {
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
export function createGetTodos401(data?: Partial<GetTodos401>): GetTodos401 {
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
export function createGetTodos500(data?: Partial<GetTodos500>): GetTodos500 {
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

export function createGetTodosQueryResponse(
  data?: Partial<GetTodosQueryResponse>,
): GetTodosQueryResponse {
  return data || faker.helpers.arrayElement<any>([createGetTodos200()]);
}
