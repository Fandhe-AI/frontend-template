import type { ToZod } from "@kubb/plugin-zod/utils";
import { z } from "zod";

import type {
  DeleteTodosTodoid204,
  DeleteTodosTodoid401,
  DeleteTodosTodoid404,
  DeleteTodosTodoid500,
  DeleteTodosTodoidMutationResponse,
  DeleteTodosTodoidPathParams,
} from "../../types/todosController/DeleteTodosTodoid";

export const deleteTodosTodoidPathParamsSchema = z.object({
  todoId: z.string().describe("Todo の一意識別子"),
}) as unknown as ToZod<DeleteTodosTodoidPathParams>;

/**
 * @description Todo の削除に成功
 */
export const deleteTodosTodoid204Schema = z
  .object({
    success: z.boolean().describe("成功フラグ"),
    message: z.string().describe("成功メッセージ").optional(),
  })
  .describe("成功情報") as unknown as ToZod<DeleteTodosTodoid204>;

/**
 * @description 認証が必要です
 */
export const deleteTodosTodoid401Schema = z
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
  .describe("エラー情報") as unknown as ToZod<DeleteTodosTodoid401>;

/**
 * @description リソースが見つかりません
 */
export const deleteTodosTodoid404Schema = z
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
  .describe("エラー情報") as unknown as ToZod<DeleteTodosTodoid404>;

/**
 * @description サーバー内部エラー
 */
export const deleteTodosTodoid500Schema = z
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
  .describe("エラー情報") as unknown as ToZod<DeleteTodosTodoid500>;

export const deleteTodosTodoidMutationResponseSchema = z.lazy(
  () => deleteTodosTodoid204Schema,
) as unknown as ToZod<DeleteTodosTodoidMutationResponse>;
