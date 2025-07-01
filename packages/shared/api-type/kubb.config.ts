import { defineConfig, type UserConfig } from "@kubb/core";
import { pluginOas } from "@kubb/plugin-oas";
import { pluginTs } from "@kubb/plugin-ts";
import todoData from "@repo/shared-api-spec/openapi/todo";
import baseConfig from "@repo/shared-config-kubb/configs/base";
import oasConfig from "@repo/shared-config-kubb/configs/oas";
import tsConfig from "@repo/shared-config-kubb/configs/ts";

export default defineConfig({
  ...(baseConfig as Omit<UserConfig, "input">),
  input: {
    data: todoData,
  },
  plugins: [
    pluginOas(oasConfig as Parameters<typeof pluginOas>[0]),
    pluginTs(tsConfig as Parameters<typeof pluginTs>[0]),
  ],
});
