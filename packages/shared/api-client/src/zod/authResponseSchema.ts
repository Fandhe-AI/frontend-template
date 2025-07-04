import type { ToZod } from "@kubb/plugin-zod/utils";
import { z } from "zod";

import type { AuthResponse } from "../types/AuthResponse";
import { userSchema } from "./userSchema";

/**
 * @description 認証成功時のレスポンス
 */
export const authResponseSchema = z
  .object({
    access_token: z.string().describe("アクセストークン（JWT）"),
    refresh_token: z.string().describe("リフレッシュトークン"),
    token_type: z.string().describe("トークンタイプ"),
    expires_in: z.number().int().describe("アクセストークンの有効期限（秒）"),
    user: z.lazy(() => userSchema).describe("ユーザー情報"),
  })
  .describe("認証成功時のレスポンス") as unknown as ToZod<AuthResponse>;
