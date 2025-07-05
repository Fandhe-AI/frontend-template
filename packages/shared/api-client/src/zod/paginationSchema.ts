import type { ToZod } from "@kubb/plugin-zod/utils";
import { z } from "zod";

import type { Pagination } from "../types/Pagination";

/**
 * @description ページネーション情報
 */
export const paginationSchema = z
  .object({
    page: z.number().int().min(1).describe("現在のページ番号"),
    limit: z.number().int().min(1).describe("1ページあたりの件数"),
    total: z.number().int().min(0).describe("総件数"),
    total_pages: z.number().int().min(0).describe("総ページ数"),
  })
  .describe("ページネーション情報") as unknown as ToZod<Pagination>;
