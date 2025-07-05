import type { ButtonProps } from "@repo/shared-ui-layout-react-router";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";

import { Button } from ".";

const meta: Meta<typeof Button> = {
  component: Button,
  parameters: {
    layout: "centered",
  },
  args: { children: "Button", onClick: fn() },
};

export default meta;

type Story = StoryObj<Meta<typeof Button<ButtonProps>>>;

export const Default: Story = {};

export const SizeSm: Story = {
  args: {
    size: "sm",
  },
};

export const SizeMd: Story = {
  args: {
    size: "md",
  },
};

export const SizeLg: Story = {
  args: {
    size: "lg",
  },
};

export const ColorPrimary: Story = {
  args: {
    color: "primary",
  },
};

export const ColorAccent: Story = {
  args: {
    color: "accent",
  },
};
