import type { ToZod } from "@kubb/plugin-zod/utils";
import { z } from "zod";

import type { BadRequest } from "../types/BadRequest";
import { customErrorSchema } from "./customErrorSchema";

export const badRequestSchema = z
  .lazy(() => customErrorSchema)
  .describe("エラー情報") as unknown as ToZod<BadRequest>;
