import type { ToZod } from "@kubb/plugin-zod/utils";
import { z } from "zod";

import type { Category } from "../types/Category";

/**
 * @description カテゴリを表現するオブジェクト
 */
export const categorySchema = z
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
  .describe("カテゴリを表現するオブジェクト") as unknown as ToZod<Category>;
