import type { ToZod } from "@kubb/plugin-zod/utils";
import { z } from "zod";

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
export const postTodos201Schema = z
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
  ) as unknown as ToZod<PostTodos201>;

/**
 * @description リクエストが不正です
 */
export const postTodos400Schema = z
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
  .describe("エラー情報") as unknown as ToZod<PostTodos400>;

/**
 * @description 認証が必要です
 */
export const postTodos401Schema = z
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
  .describe("エラー情報") as unknown as ToZod<PostTodos401>;

/**
 * @description バリデーションエラー
 */
export const postTodos422Schema = z
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
  .describe("エラー情報") as unknown as ToZod<PostTodos422>;

/**
 * @description サーバー内部エラー
 */
export const postTodos500Schema = z
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
  .describe("エラー情報") as unknown as ToZod<PostTodos500>;

export const postTodosMutationRequestSchema = z
  .object({
    title: z.string().min(1).max(200).describe("Todo のタイトル（必須）"),
    description: z
      .string()
      .max(1000)
      .describe("Todo の詳細説明（任意）")
      .nullable()
      .nullish(),
    priority: z
      .enum(["low", "medium", "high"])
      .default("medium")
      .describe("Todo の優先度（デフォルト: medium）"),
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
  })
  .describe(
    "Todo 作成時のリクエストボディ",
  ) as unknown as ToZod<PostTodosMutationRequest>;

export const postTodosMutationResponseSchema = z.lazy(
  () => postTodos201Schema,
) as unknown as ToZod<PostTodosMutationResponse>;
