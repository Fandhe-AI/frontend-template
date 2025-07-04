import type { ToZod } from "@kubb/plugin-zod/utils";
import { z } from "zod";

import type { Unauthorized } from "../types/Unauthorized";
import { customErrorSchema } from "./customErrorSchema";

export const unauthorizedSchema = z
  .lazy(() => customErrorSchema)
  .describe("エラー情報") as unknown as ToZod<Unauthorized>;
