import type { Preview } from "@storybook/react-vite";
import { withRouter } from "storybook-addon-remix-react-router";

import basePreview from "./react-vite-preview";

const preview: Preview = {
  ...basePreview,
  decorators: [withRouter],
};

export default preview;
