import type { ToZod } from "@kubb/plugin-zod/utils";
import { z } from "zod";

import type {
  GetTodos200,
  GetTodos400,
  GetTodos401,
  GetTodos500,
  GetTodosQueryParams,
  GetTodosQueryResponse,
} from "../../types/todosController/GetTodos";

export const getTodosQueryParamsSchema = z.object({
  status: z
    .enum(["pending", "completed", "all"])
    .default("all")
    .describe("Todo の完了状態でフィルタリング"),
  category: z.string().describe("カテゴリ ID でフィルタリング").optional(),
  priority: z
    .enum(["low", "medium", "high"])
    .describe("優先度でフィルタリング")
    .optional(),
  search: z.string().describe("タイトルや説明での検索").optional(),
  page: z.coerce
    .number()
    .int()
    .min(1)
    .default(1)
    .describe("ページ番号（1から開始）"),
  limit: z.coerce
    .number()
    .int()
    .min(1)
    .max(100)
    .default(20)
    .describe("1ページあたりの件数"),
  sort: z
    .enum(["created_at", "updated_at", "due_date", "priority", "title"])
    .default("created_at")
    .describe("並び替えフィールド"),
  order: z.enum(["asc", "desc"]).default("desc").describe("並び替え順序"),
}) as unknown as ToZod<GetTodosQueryParams>;

/**
 * @description Todo リストの取得に成功
 */
export const getTodos200Schema = z.object({
  data: z.array(
    z
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
      .describe("Todo アイテムを表現するオブジェクト"),
  ),
  pagination: z
    .object({
      page: z.number().int().min(1).describe("現在のページ番号"),
      limit: z.number().int().min(1).describe("1ページあたりの件数"),
      total: z.number().int().min(0).describe("総件数"),
      total_pages: z.number().int().min(0).describe("総ページ数"),
    })
    .describe("ページネーション情報"),
}) as unknown as ToZod<GetTodos200>;

/**
 * @description リクエストが不正です
 */
export const getTodos400Schema = z
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
  .describe("エラー情報") as unknown as ToZod<GetTodos400>;

/**
 * @description 認証が必要です
 */
export const getTodos401Schema = z
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
  .describe("エラー情報") as unknown as ToZod<GetTodos401>;

/**
 * @description サーバー内部エラー
 */
export const getTodos500Schema = z
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
  .describe("エラー情報") as unknown as ToZod<GetTodos500>;

export const getTodosQueryResponseSchema = z.lazy(
  () => getTodos200Schema,
) as unknown as ToZod<GetTodosQueryResponse>;
