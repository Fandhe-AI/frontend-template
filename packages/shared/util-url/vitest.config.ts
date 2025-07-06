/// <reference types="vitest" />

import baseConfig from "@repo/shared-config-vitest/configs/base";
import { defineConfig, mergeConfig } from "vite";

export default mergeConfig(
  baseConfig,
  defineConfig({
    test: {
      dir: "./src",
    },
  }),
);
