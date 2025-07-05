import type { ToZod } from "@kubb/plugin-zod/utils";
import { z } from "zod";

import type { InternalServerError } from "../types/InternalServerError";
import { customErrorSchema } from "./customErrorSchema";

export const internalServerErrorSchema = z
  .lazy(() => customErrorSchema)
  .describe("エラー情報") as unknown as ToZod<InternalServerError>;
