import type { ToZod } from "@kubb/plugin-zod/utils";
import { z } from "zod";

import type {
  GetCategories200,
  GetCategories401,
  GetCategories500,
  GetCategoriesQueryResponse,
} from "../../types/categoriesController/GetCategories";

/**
 * @description カテゴリリストの取得に成功
 */
export const getCategories200Schema = z.object({
  data: z.array(
    z
      .object({
        id: z.string().describe("カテゴリの一意識別子"),
        name: z.string().min(1).max(50).describe("カテゴリ名"),
        description: z
          .string()
          .max(200)
          .describe("カテゴリの説明")
          .nullable()
          .nullish(),
        color: z
          .string()
          .regex(/^#[0-9a-fA-F]{6}$/)
          .describe("カテゴリの表示色（HEXカラーコード）"),
        created_at: z.date().describe("作成日時（ISO 8601形式）"),
      })
      .describe("カテゴリを表現するオブジェクト"),
  ),
}) as unknown as ToZod<GetCategories200>;

/**
 * @description 認証が必要です
 */
export const getCategories401Schema = z
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
  .describe("エラー情報") as unknown as ToZod<GetCategories401>;

/**
 * @description サーバー内部エラー
 */
export const getCategories500Schema = z
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
  .describe("エラー情報") as unknown as ToZod<GetCategories500>;

export const getCategoriesQueryResponseSchema = z.lazy(
  () => getCategories200Schema,
) as unknown as ToZod<GetCategoriesQueryResponse>;
