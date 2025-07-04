import type { ToZod } from "@kubb/plugin-zod/utils";
import { z } from "zod";

import type {
  PatchTodosTodoidToggle200,
  PatchTodosTodoidToggle401,
  PatchTodosTodoidToggle404,
  PatchTodosTodoidToggle500,
  PatchTodosTodoidToggleMutationResponse,
  PatchTodosTodoidTogglePathParams,
} from "../../types/todosController/PatchTodosTodoidToggle";

export const patchTodosTodoidTogglePathParamsSchema = z.object({
  todoId: z.string().describe("Todo の一意識別子"),
}) as unknown as ToZod<PatchTodosTodoidTogglePathParams>;

/**
 * @description 完了状態の切り替えに成功
 */
export const patchTodosTodoidToggle200Schema = z
  .object({
    id: z.string().describe("Todo の一意識別子"),
    title: z.string().min(1).max(200).describe("Todo のタイトル（必須）"),
    description: z
      .string()
      .max(1000)
      .describe("Todo の詳細説明（任意）")
      .nullable()
      .nullish(),
    status: z.enum(["pending", "completed"]).describe("Todo の完了状態"),
    priority: z.enum(["low", "medium", "high"]).describe("Todo の優先度"),
    category_id: z
      .string()
      .describe("関連するカテゴリの ID（任意）")
      .nullable()
      .nullish(),
    due_date: z
      .date()
      .describe("期限日時（ISO 8601形式、任意）")
      .nullable()
      .nullish(),
    created_at: z.date().describe("作成日時（ISO 8601形式）"),
    updated_at: z.date().describe("最終更新日時（ISO 8601形式）"),
  })
  .describe(
    "Todo アイテムを表現するオブジェクト",
  ) as unknown as ToZod<PatchTodosTodoidToggle200>;

/**
 * @description 認証が必要です
 */
export const patchTodosTodoidToggle401Schema = z
  .object({
    error: z.object({
      code: z.string().describe("エラーコード"),
      message: z.string().describe("エラーメッセージ"),
      details: z
        .array(
          z.object({
            field: z.string().describe("エラーが発生したフィールド名"),
            message: z.string().describe("フィールド固有のエラーメッセージ"),
          }),
        )
        .describe("詳細なエラー情報（バリデーションエラー時など）")
        .optional(),
    }),
  })
  .describe("エラー情報") as unknown as ToZod<PatchTodosTodoidToggle401>;

/**
 * @description リソースが見つかりません
 */
export const patchTodosTodoidToggle404Schema = z
  .object({
    error: z.object({
      code: z.string().describe("エラーコード"),
      message: z.string().describe("エラーメッセージ"),
      details: z
        .array(
          z.object({
            field: z.string().describe("エラーが発生したフィールド名"),
            message: z.string().describe("フィールド固有のエラーメッセージ"),
          }),
        )
        .describe("詳細なエラー情報（バリデーションエラー時など）")
        .optional(),
    }),
  })
  .describe("エラー情報") as unknown as ToZod<PatchTodosTodoidToggle404>;

/**
 * @description サーバー内部エラー
 */
export const patchTodosTodoidToggle500Schema = z
  .object({
    error: z.object({
      code: z.string().describe("エラーコード"),
      message: z.string().describe("エラーメッセージ"),
      details: z
        .array(
          z.object({
            field: z.string().describe("エラーが発生したフィールド名"),
            message: z.string().describe("フィールド固有のエラーメッセージ"),
          }),
        )
        .describe("詳細なエラー情報（バリデーションエラー時など）")
        .optional(),
    }),
  })
  .describe("エラー情報") as unknown as ToZod<PatchTodosTodoidToggle500>;

export const patchTodosTodoidToggleMutationResponseSchema = z.lazy(
  () => patchTodosTodoidToggle200Schema,
) as unknown as ToZod<PatchTodosTodoidToggleMutationResponse>;
