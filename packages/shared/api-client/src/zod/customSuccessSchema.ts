import type { ToZod } from "@kubb/plugin-zod/utils";
import { z } from "zod";

import type { CustomSuccess } from "../types/CustomSuccess";

/**
 * @description 成功情報
 */
export const customSuccessSchema = z
  .object({
    success: z.boolean().describe("成功フラグ"),
    message: z.string().describe("成功メッセージ").optional(),
  })
  .describe("成功情報") as unknown as ToZod<CustomSuccess>;
