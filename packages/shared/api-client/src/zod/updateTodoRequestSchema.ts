import type { ToZod } from "@kubb/plugin-zod/utils";
import { z } from "zod";

import type { UpdateTodoRequest } from "../types/UpdateTodoRequest";

/**
 * @description Todo 更新時のリクエストボディ（部分更新対応）
 */
export const updateTodoRequestSchema = z
  .object({
    title: z.string().min(1).max(200).describe("Todo のタイトル").optional(),
    description: z
      .string()
      .max(1000)
      .describe("Todo の詳細説明")
      .nullable()
      .nullish(),
    status: z
      .enum(["pending", "completed"])
      .describe("Todo の完了状態")
      .optional(),
    priority: z
      .enum(["low", "medium", "high"])
      .describe("Todo の優先度")
      .optional(),
    category_id: z
      .string()
      .describe("関連するカテゴリの ID")
      .nullable()
      .nullish(),
    due_date: z
      .date()
      .describe("期限日時（ISO 8601形式）")
      .nullable()
      .nullish(),
  })
  .describe(
    "Todo 更新時のリクエストボディ（部分更新対応）",
  ) as unknown as ToZod<UpdateTodoRequest>;
