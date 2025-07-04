import type { ToZod } from "@kubb/plugin-zod/utils";
import { z } from "zod";

import type {
  PostCategories201,
  PostCategories400,
  PostCategories401,
  PostCategories422,
  PostCategories500,
  PostCategoriesMutationRequest,
  PostCategoriesMutationResponse,
} from "../../types/categoriesController/PostCategories";

/**
 * @description カテゴリの作成に成功
 */
export const postCategories201Schema = z
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
  .describe(
    "カテゴリを表現するオブジェクト",
  ) as unknown as ToZod<PostCategories201>;

/**
 * @description リクエストが不正です
 */
export const postCategories400Schema = z
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
  .describe("エラー情報") as unknown as ToZod<PostCategories400>;

/**
 * @description 認証が必要です
 */
export const postCategories401Schema = z
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
  .describe("エラー情報") as unknown as ToZod<PostCategories401>;

/**
 * @description バリデーションエラー
 */
export const postCategories422Schema = z
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
  .describe("エラー情報") as unknown as ToZod<PostCategories422>;

/**
 * @description サーバー内部エラー
 */
export const postCategories500Schema = z
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
  .describe("エラー情報") as unknown as ToZod<PostCategories500>;

export const postCategoriesMutationRequestSchema = z
  .object({
    name: z.string().min(1).max(50).describe("カテゴリ名（必須）"),
    description: z
      .string()
      .max(200)
      .describe("カテゴリの説明（任意）")
      .nullable()
      .nullish(),
    color: z
      .string()
      .regex(/^#[0-9a-fA-F]{6}$/)
      .describe("カテゴリの表示色（HEXカラーコード、必須）"),
  })
  .describe(
    "カテゴリ作成時のリクエストボディ",
  ) as unknown as ToZod<PostCategoriesMutationRequest>;

export const postCategoriesMutationResponseSchema = z.lazy(
  () => postCategories201Schema,
) as unknown as ToZod<PostCategoriesMutationResponse>;
