import basePreview from "@repo/shared-config-storybook/configs/react-router-preview";
import type { Preview } from "@storybook/react-vite";

import "./style.css";

const preview: Preview = {
  ...basePreview,
  tags: ["autodocs"],
};

export default preview;
