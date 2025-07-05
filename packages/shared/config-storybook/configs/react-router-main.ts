import type { StorybookConfig } from "@storybook/react-vite";

import baseConfig from "./main";
import { getAbsolutePath } from "./utils/get-absolute-path";

const config: StorybookConfig = {
  ...baseConfig,
  addons: [
    ...baseConfig.addons,
    getAbsolutePath("storybook-addon-remix-react-router"),
  ],
  framework: {
    name: getAbsolutePath("@storybook/react-vite"),
    options: {},
  },
} as const;

export default config;
