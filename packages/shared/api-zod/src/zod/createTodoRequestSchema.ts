import type { ToZod } from "@kubb/plugin-zod/utils";
import { z } from "zod";

import type { CreateTodoRequest } from "../types/CreateTodoRequest";

/**
 * @description Todo 作成時のリクエストボディ
 */
export const createTodoRequestSchema = z
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
  ) as unknown as ToZod<CreateTodoRequest>;
