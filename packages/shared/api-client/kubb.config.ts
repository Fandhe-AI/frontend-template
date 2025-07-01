import { defineConfig, type UserConfig } from "@kubb/core";
import { pluginClient } from "@kubb/plugin-client";
import { pluginOas } from "@kubb/plugin-oas";
import { pluginTs } from "@kubb/plugin-ts";
import { pluginZod } from "@kubb/plugin-zod";
import todoData from "@repo/shared-api-spec/openapi/todo";
import baseConfig from "@repo/shared-config-kubb/configs/base";
import clientConfig from "@repo/shared-config-kubb/configs/client";
import oasConfig from "@repo/shared-config-kubb/configs/oas";
import tsConfig from "@repo/shared-config-kubb/configs/ts";
import zodConfig from "@repo/shared-config-kubb/configs/zod";

export default defineConfig({
  ...(baseConfig as Omit<UserConfig, "input">),
  input: {
    data: todoData,
  },
  plugins: [
    pluginOas(oasConfig as Parameters<typeof pluginOas>[0]),
    pluginTs(tsConfig as Parameters<typeof pluginTs>[0]),
    // FIXME: 4.0.0 ではエラーが出るので、3.0.0 に戻す
    pluginZod(zodConfig as Parameters<typeof pluginZod>[0]),
    pluginClient(clientConfig as Parameters<typeof pluginClient>[0]),
  ],
});
