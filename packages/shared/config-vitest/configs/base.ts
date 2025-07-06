/// <reference types="vitest" />

import { defineConfig } from "vite";

export default defineConfig({
  test: {
    include: ["**/*.test.[jt]s"],
    benchmark: {
      include: ["**/*.bench.[jt]s"],
    },
    clearMocks: true,
    logHeapUsage: true,
    // NOTE: check:types でチェックするので、ここでは無効化
    // typecheck: {
    //   enabled: true,
    //   include: ["**/*.test-d.[jt]s"],
    // },
  },
});
