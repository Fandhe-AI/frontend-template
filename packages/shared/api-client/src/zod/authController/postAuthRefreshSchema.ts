import type { ToZod } from "@kubb/plugin-zod/utils";
import { z } from "zod";

import type {
  PostAuthRefresh200,
  PostAuthRefresh400,
  PostAuthRefresh401,
  PostAuthRefresh500,
  PostAuthRefreshMutationRequest,
  PostAuthRefreshMutationResponse,
} from "../../types/authController/PostAuthRefresh";

/**
 * @description トークンの更新に成功
 */
export const postAuthRefresh200Schema = z.object({
  access_token: z.string().describe("新しいアクセストークン"),
  token_type: z.string(),
  expires_in: z.number().int().describe("トークンの有効期限（秒）"),
}) as unknown as ToZod<PostAuthRefresh200>;

/**
 * @description リクエストが不正です
 */
export const postAuthRefresh400Schema = z
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
  .describe("エラー情報") as unknown as ToZod<PostAuthRefresh400>;

/**
 * @description 無効なリフレッシュトークン
 */
export const postAuthRefresh401Schema = z
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
  .describe("エラー情報") as unknown as ToZod<PostAuthRefresh401>;

/**
 * @description サーバー内部エラー
 */
export const postAuthRefresh500Schema = z
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
  .describe("エラー情報") as unknown as ToZod<PostAuthRefresh500>;

export const postAuthRefreshMutationRequestSchema = z.object({
  refresh_token: z.string().describe("リフレッシュトークン"),
}) as unknown as ToZod<PostAuthRefreshMutationRequest>;

export const postAuthRefreshMutationResponseSchema = z.lazy(
  () => postAuthRefresh200Schema,
) as unknown as ToZod<PostAuthRefreshMutationResponse>;
