import { defineConfig } from "@kubb/core";
import { pluginOas } from "@kubb/plugin-oas";
import { pluginTs } from "@kubb/plugin-ts";
import { pluginZod } from "@kubb/plugin-zod";
import baseConfig from "@repo/shared/config-kubb/configs/base.json";
import oasConfig from "@repo/shared/config-kubb/configs/oas.json";
import tsConfig from "@repo/shared/config-kubb/configs/ts.json";
import zodConfig from "@repo/shared/config-kubb/configs/zod.json";

export default defineConfig({
  ...baseConfig,
  input: {
    // FIXME: @repo/shared/api-spec/openapi/todo.yaml に移行する
    path: "../api-spec/openapi/todo.yaml",
  },
  plugins: [
    pluginOas(oasConfig as Parameters<typeof pluginOas>[0]),
    pluginTs(tsConfig as Parameters<typeof pluginTs>[0]),
    // FIXME: 4.0.0 ではエラーが出るので、3.0.0 に戻す
    pluginZod(zodConfig as Parameters<typeof pluginZod>[0]),
  ],
});
