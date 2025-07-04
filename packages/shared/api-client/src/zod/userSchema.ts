import type { ToZod } from "@kubb/plugin-zod/utils";
import { z } from "zod";

import type { User } from "../types/User";

/**
 * @description ユーザー情報
 */
export const userSchema = z
  .object({
    id: z.string().describe("ユーザーの一意識別子"),
    email: z.string().email().describe("ユーザーのメールアドレス"),
    name: z.string().describe("ユーザー名"),
    created_at: z.date().describe("アカウント作成日時"),
  })
  .describe("ユーザー情報") as unknown as ToZod<User>;
