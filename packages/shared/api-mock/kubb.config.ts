import { defineConfig, type UserConfig } from "@kubb/core";
import { pluginFaker } from "@kubb/plugin-faker";
import { pluginMsw } from "@kubb/plugin-msw";
import { pluginOas } from "@kubb/plugin-oas";
import { pluginTs } from "@kubb/plugin-ts";
import todoData from "@repo/shared-api-spec/openapi/todo";
import baseConfig from "@repo/shared-config-kubb/configs/base";
import fakerConfig from "@repo/shared-config-kubb/configs/faker";
import mswConfig from "@repo/shared-config-kubb/configs/msw";
import oasConfig from "@repo/shared-config-kubb/configs/oas";
import tsConfig from "@repo/shared-config-kubb/configs/ts";
import dotenv from "dotenv";

dotenv.config();

export default defineConfig({
  ...(baseConfig as Omit<UserConfig, "input">),
  input: {
    data: todoData,
  },
  plugins: [
    pluginOas(oasConfig as Parameters<typeof pluginOas>[0]),
    pluginTs(tsConfig as Parameters<typeof pluginTs>[0]),
    pluginFaker(fakerConfig as Parameters<typeof pluginFaker>[0]),
    pluginMsw({
      ...(mswConfig as Parameters<typeof pluginMsw>[0]),
      output: {
        ...(mswConfig as Parameters<typeof pluginMsw>[0])?.output,
        path: "handlers",
        banner: "// @ts-nocheck",
      },
      baseURL: process.env.MOCK_API_BASE_URL,
    }),
  ],
});
