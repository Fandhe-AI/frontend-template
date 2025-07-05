import type { Meta, StoryObj } from "@storybook/react-vite";

import { Container } from ".";

const meta: Meta<typeof Container> = {
  component: Container,
  parameters: {
    layout: "centered",
  },
  args: { children: "Container" },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
