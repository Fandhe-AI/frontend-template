import annotations from "@repo/shared-config-storybook/configs/react-vite-vitest.setup";
import { setProjectAnnotations } from "@storybook/react-vite";

import * as projectAnnotations from "./preview";

setProjectAnnotations([...annotations, projectAnnotations]);
