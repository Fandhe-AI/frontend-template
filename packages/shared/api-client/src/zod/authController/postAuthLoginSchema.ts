import type { ToZod } from "@kubb/plugin-zod/utils";
import { z } from "zod";

import type {
  PostAuthLogin200,
  PostAuthLogin400,
  PostAuthLogin401,
  PostAuthLogin500,
  PostAuthLoginMutationRequest,
  PostAuthLoginMutationResponse,
} from "../../types/authController/PostAuthLogin";

/**
 * @description ログインに成功
 */
export const postAuthLogin200Schema = z
  .object({
    access_token: z.string().describe("アクセストークン（JWT）"),
    refresh_token: z.string().describe("リフレッシュトークン"),
    token_type: z.string().describe("トークンタイプ"),
    expires_in: z.number().int().describe("アクセストークンの有効期限（秒）"),
    user: z
      .object({
        id: z.string().describe("ユーザーの一意識別子"),
        email: z.string().email().describe("ユーザーのメールアドレス"),
        name: z.string().describe("ユーザー名"),
        created_at: z.date().describe("アカウント作成日時"),
      })
      .describe("ユーザー情報"),
  })
  .describe("認証成功時のレスポンス") as unknown as ToZod<PostAuthLogin200>;

/**
 * @description リクエストが不正です
 */
export const postAuthLogin400Schema = z
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
  .describe("エラー情報") as unknown as ToZod<PostAuthLogin400>;

/**
 * @description 認証に失敗
 */
export const postAuthLogin401Schema = z
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
  .describe("エラー情報") as unknown as ToZod<PostAuthLogin401>;

/**
 * @description サーバー内部エラー
 */
export const postAuthLogin500Schema = z
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
  .describe("エラー情報") as unknown as ToZod<PostAuthLogin500>;

export const postAuthLoginMutationRequestSchema = z
  .object({
    email: z.string().email().describe("ユーザーのメールアドレス"),
    password: z.string().min(8).describe("ユーザーのパスワード"),
  })
  .describe(
    "ログイン時のリクエストボディ",
  ) as unknown as ToZod<PostAuthLoginMutationRequest>;

export const postAuthLoginMutationResponseSchema = z.lazy(
  () => postAuthLogin200Schema,
) as unknown as ToZod<PostAuthLoginMutationResponse>;
