import type { ToZod } from "@kubb/plugin-zod/utils";
import { z } from "zod";

import type {
  GetTodosTodoid200,
  GetTodosTodoid401,
  GetTodosTodoid404,
  GetTodosTodoid500,
  GetTodosTodoidPathParams,
  GetTodosTodoidQueryResponse,
} from "../../types/todosController/GetTodosTodoid";

export const getTodosTodoidPathParamsSchema = z.object({
  todoId: z.string().describe("Todo の一意識別子"),
}) as unknown as ToZod<GetTodosTodoidPathParams>;

/**
 * @description Todo の取得に成功
 */
export const getTodosTodoid200Schema = z
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
  ) as unknown as ToZod<GetTodosTodoid200>;

/**
 * @description 認証が必要です
 */
export const getTodosTodoid401Schema = z
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
  .describe("エラー情報") as unknown as ToZod<GetTodosTodoid401>;

/**
 * @description リソースが見つかりません
 */
export const getTodosTodoid404Schema = z
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
  .describe("エラー情報") as unknown as ToZod<GetTodosTodoid404>;

/**
 * @description サーバー内部エラー
 */
export const getTodosTodoid500Schema = z
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
  .describe("エラー情報") as unknown as ToZod<GetTodosTodoid500>;

export const getTodosTodoidQueryResponseSchema = z.lazy(
  () => getTodosTodoid200Schema,
) as unknown as ToZod<GetTodosTodoidQueryResponse>;
