import type { StorybookConfig } from "storybook/internal/types";

import { getAbsolutePath } from "./utils/get-absolute-path";

const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    getAbsolutePath("@storybook/addon-docs"),
    getAbsolutePath("@storybook/addon-a11y"),
    getAbsolutePath("@storybook/addon-vitest"),
  ],
} as const satisfies StorybookConfig;

export default config;
