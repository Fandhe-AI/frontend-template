import type { ToZod } from "@kubb/plugin-zod/utils";
import { z } from "zod";

import type { Todo } from "../types/Todo";

/**
 * @description Todo アイテムを表現するオブジェクト
 */
export const todoSchema = z
  .object({
    id: z.string().describe("Todo の一意識別子"),
    title: z.string().min(1).max(200).describe("Todo のタイトル（必須）"),
    description: z
      .string()
      .max(1000)
      .describe("Todo の詳細説明（任意）")
      .nullable()
      .nullish(),
    status: z.enum(["pending", "completed"]).describe("Todo の完了状態"),
    priority: z.enum(["low", "medium", "high"]).describe("Todo の優先度"),
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
    created_at: z.date().describe("作成日時（ISO 8601形式）"),
    updated_at: z.date().describe("最終更新日時（ISO 8601形式）"),
  })
  .describe("Todo アイテムを表現するオブジェクト") as unknown as ToZod<Todo>;
