import type { ToZod } from "@kubb/plugin-zod/utils";
import { z } from "zod";

import type { NotFound } from "../types/NotFound";
import { customErrorSchema } from "./customErrorSchema";

export const notFoundSchema = z
  .lazy(() => customErrorSchema)
  .describe("エラー情報") as unknown as ToZod<NotFound>;
