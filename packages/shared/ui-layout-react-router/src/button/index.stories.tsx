import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";

import { Button, type ButtonProps, type LinkProps } from ".";

const meta: Meta<typeof Button> = {
  component: Button,
  parameters: {
    layout: "centered",
  },
  args: { children: "Button", onClick: fn() },
};

export default meta;

type Story = StoryObj<Meta<typeof Button<ButtonProps>>>;
type LinkStory = StoryObj<Meta<typeof Button<LinkProps>>>;

export const Default: Story = {};

export const Link: LinkStory = {
  args: {
    onClick: undefined,
    to: "/",
  },
};
