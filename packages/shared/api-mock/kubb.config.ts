import { defineConfig } from "@kubb/core";
import { pluginFaker } from "@kubb/plugin-faker";
import { pluginMsw } from "@kubb/plugin-msw";
import { pluginOas } from "@kubb/plugin-oas";
import { pluginTs } from "@kubb/plugin-ts";
import baseConfig from "@repo/shared/config-kubb/configs/base.json";
import fakerConfig from "@repo/shared/config-kubb/configs/faker.json";
import mswConfig from "@repo/shared/config-kubb/configs/msw.json";
import oasConfig from "@repo/shared/config-kubb/configs/oas.json";
import tsConfig from "@repo/shared/config-kubb/configs/ts.json";

export default defineConfig({
	...baseConfig,
	input: {
		// FIXME: @repo/shared/api-spec/openapi/todo.yaml に移行する
		path: "../api-spec/openapi/todo.yaml",
	},
	plugins: [
		pluginOas(oasConfig as Parameters<typeof pluginOas>[0]),
		pluginTs(tsConfig as Parameters<typeof pluginTs>[0]),
		pluginFaker(fakerConfig as Parameters<typeof pluginFaker>[0]),
		pluginMsw(mswConfig as Parameters<typeof pluginMsw>[0]),
	],
});
