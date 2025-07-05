import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";

import { type ButtonProps, type DivProps, Item } from ".";

const meta: Meta<typeof Item> = {
  component: Item,
  parameters: {
    layout: "centered",
  },
  args: { children: "Item", onClick: fn() },
};

export default meta;

type Story = StoryObj<Meta<typeof Item<DivProps>>>;
type ButtonStory = StoryObj<Meta<typeof Item<ButtonProps>>>;

export const Default: Story = {};

export const Button: ButtonStory = {
  args: {
    onClick: undefined,
    to: "/",
  },
};
