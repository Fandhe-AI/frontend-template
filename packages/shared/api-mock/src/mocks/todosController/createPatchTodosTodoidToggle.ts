import { faker } from "@faker-js/faker";

import type {
  PatchTodosTodoidToggle200,
  PatchTodosTodoidToggle401,
  PatchTodosTodoidToggle404,
  PatchTodosTodoidToggle500,
  PatchTodosTodoidToggleMutationResponse,
  PatchTodosTodoidTogglePathParams,
} from "../../types/todosController/PatchTodosTodoidToggle";

export function createPatchTodosTodoidTogglePathParams(
  data?: Partial<PatchTodosTodoidTogglePathParams>,
): PatchTodosTodoidTogglePathParams {
  return {
    ...{ todoId: faker.string.alpha() },
    ...(data || {}),
  };
}

/**
 * @description 完了状態の切り替えに成功
 */
export function createPatchTodosTodoidToggle200(
  data?: Partial<PatchTodosTodoidToggle200>,
): PatchTodosTodoidToggle200 {
  return {
    ...{
      id: faker.string.alpha(),
      title: faker.string.alpha({ length: { min: 1, max: 200 } }),
      description: faker.string.alpha({ length: 1000 }),
      status: faker.helpers.arrayElement<
        NonNullable<PatchTodosTodoidToggle200>["status"]
      >(["pending", "completed"]),
      priority: faker.helpers.arrayElement<
        NonNullable<PatchTodosTodoidToggle200>["priority"]
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
export function createPatchTodosTodoidToggle401(
  data?: Partial<PatchTodosTodoidToggle401>,
): PatchTodosTodoidToggle401 {
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
export function createPatchTodosTodoidToggle404(
  data?: Partial<PatchTodosTodoidToggle404>,
): PatchTodosTodoidToggle404 {
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
export function createPatchTodosTodoidToggle500(
  data?: Partial<PatchTodosTodoidToggle500>,
): PatchTodosTodoidToggle500 {
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

export function createPatchTodosTodoidToggleMutationResponse(
  data?: Partial<PatchTodosTodoidToggleMutationResponse>,
): PatchTodosTodoidToggleMutationResponse {
  return (
    data || faker.helpers.arrayElement<any>([createPatchTodosTodoidToggle200()])
  );
}
