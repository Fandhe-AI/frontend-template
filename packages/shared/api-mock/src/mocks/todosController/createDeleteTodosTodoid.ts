import { faker } from "@faker-js/faker";

import type {
  DeleteTodosTodoid204,
  DeleteTodosTodoid401,
  DeleteTodosTodoid404,
  DeleteTodosTodoid500,
  DeleteTodosTodoidMutationResponse,
  DeleteTodosTodoidPathParams,
} from "../../types/todosController/DeleteTodosTodoid";

export function createDeleteTodosTodoidPathParams(
  data?: Partial<DeleteTodosTodoidPathParams>,
): DeleteTodosTodoidPathParams {
  return {
    ...{ todoId: faker.string.alpha() },
    ...(data || {}),
  };
}

/**
 * @description Todo の削除に成功
 */
export function createDeleteTodosTodoid204(
  data?: Partial<DeleteTodosTodoid204>,
): DeleteTodosTodoid204 {
  return {
    ...{ success: faker.datatype.boolean(), message: faker.string.alpha() },
    ...(data || {}),
  };
}

/**
 * @description 認証が必要です
 */
export function createDeleteTodosTodoid401(
  data?: Partial<DeleteTodosTodoid401>,
): DeleteTodosTodoid401 {
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
export function createDeleteTodosTodoid404(
  data?: Partial<DeleteTodosTodoid404>,
): DeleteTodosTodoid404 {
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
export function createDeleteTodosTodoid500(
  data?: Partial<DeleteTodosTodoid500>,
): DeleteTodosTodoid500 {
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

export function createDeleteTodosTodoidMutationResponse(
  data?: Partial<DeleteTodosTodoidMutationResponse>,
): DeleteTodosTodoidMutationResponse {
  return (
    data || faker.helpers.arrayElement<any>([createDeleteTodosTodoid204()])
  );
}
