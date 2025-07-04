import type { ToZod } from "@kubb/plugin-zod/utils";
import { z } from "zod";

import type { LoginRequest } from "../types/LoginRequest";

/**
 * @description ログイン時のリクエストボディ
 */
export const loginRequestSchema = z
  .object({
    email: z.string().email().describe("ユーザーのメールアドレス"),
    password: z.string().min(8).describe("ユーザーのパスワード"),
  })
  .describe("ログイン時のリクエストボディ") as unknown as ToZod<LoginRequest>;
