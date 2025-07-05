import type { ToZod } from "@kubb/plugin-zod/utils";
import { z } from "zod";

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

export const putTodosTodoidPathParamsSchema = z.object({
  todoId: z.string().describe("Todo の一意識別子"),
}) as unknown as ToZod<PutTodosTodoidPathParams>;

/**
 * @description Todo の更新に成功
 */
export const putTodosTodoid200Schema = z
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
  ) as unknown as ToZod<PutTodosTodoid200>;

/**
 * @description リクエストが不正です
 */
export const putTodosTodoid400Schema = z
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
  .describe("エラー情報") as unknown as ToZod<PutTodosTodoid400>;

/**
 * @description 認証が必要です
 */
export const putTodosTodoid401Schema = z
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
  .describe("エラー情報") as unknown as ToZod<PutTodosTodoid401>;

/**
 * @description リソースが見つかりません
 */
export const putTodosTodoid404Schema = z
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
  .describe("エラー情報") as unknown as ToZod<PutTodosTodoid404>;

/**
 * @description バリデーションエラー
 */
export const putTodosTodoid422Schema = z
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
  .describe("エラー情報") as unknown as ToZod<PutTodosTodoid422>;

/**
 * @description サーバー内部エラー
 */
export const putTodosTodoid500Schema = z
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
  .describe("エラー情報") as unknown as ToZod<PutTodosTodoid500>;

export const putTodosTodoidMutationRequestSchema = z
  .object({
    title: z.string().min(1).max(200).describe("Todo のタイトル").optional(),
    description: z
      .string()
      .max(1000)
      .describe("Todo の詳細説明")
      .nullable()
      .nullish(),
    status: z
      .enum(["pending", "completed"])
      .describe("Todo の完了状態")
      .optional(),
    priority: z
      .enum(["low", "medium", "high"])
      .describe("Todo の優先度")
      .optional(),
    category_id: z
      .string()
      .describe("関連するカテゴリの ID")
      .nullable()
      .nullish(),
    due_date: z
      .date()
      .describe("期限日時（ISO 8601形式）")
      .nullable()
      .nullish(),
  })
  .describe(
    "Todo 更新時のリクエストボディ（部分更新対応）",
  ) as unknown as ToZod<PutTodosTodoidMutationRequest>;

export const putTodosTodoidMutationResponseSchema = z.lazy(
  () => putTodosTodoid200Schema,
) as unknown as ToZod<PutTodosTodoidMutationResponse>;
