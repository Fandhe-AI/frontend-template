import strictConfig from "@repo/shared-config-syncpack/configs/strict";
import typesOnlyDevConfig from "@repo/shared-config-syncpack/configs/types-only-dev";
import type { RcFile } from "syncpack";

const config: RcFile = {
  ...(strictConfig as RcFile),
  ...(typesOnlyDevConfig as RcFile),
};

export default config;
