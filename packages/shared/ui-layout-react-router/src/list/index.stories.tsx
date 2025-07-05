import type { Meta, StoryObj } from "@storybook/react-vite";

import { Item, Root } from ".";

const meta: Meta<typeof Root<{ id: number; name: string }>> = {
  component: Root,
  parameters: {
    layout: "centered",
  },
  args: {
    data: [
      { id: 1, name: "リストアイテム 1" },
      { id: 2, name: "リストアイテム 2" },
      { id: 3, name: "リストアイテム 3" },
    ],
    empty: "No items",
    children: (item) => <Item>{item.name}</Item>,
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const SingleItem: Story = {
  args: {
    data: [{ id: 1, name: "リストアイテム 1" }],
  },
};

export const Empty: Story = {
  args: {
    data: [],
  },
};
