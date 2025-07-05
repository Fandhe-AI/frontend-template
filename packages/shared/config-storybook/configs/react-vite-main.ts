import type { StorybookConfig } from "@storybook/react-vite";

import baseConfig from "./main";
import { getAbsolutePath } from "./utils/get-absolute-path";

const config: StorybookConfig = {
  ...baseConfig,
  framework: {
    name: getAbsolutePath("@storybook/react-vite"),
    options: {},
  },
} as const;

export default config;
