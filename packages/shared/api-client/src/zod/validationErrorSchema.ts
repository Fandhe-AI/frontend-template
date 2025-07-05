import type { ToZod } from "@kubb/plugin-zod/utils";
import { z } from "zod";

import type { ValidationError } from "../types/ValidationError";
import { customErrorSchema } from "./customErrorSchema";

export const validationErrorSchema = z
  .lazy(() => customErrorSchema)
  .describe("エラー情報") as unknown as ToZod<ValidationError>;
