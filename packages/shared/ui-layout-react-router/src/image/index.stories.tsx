import type { Meta, StoryObj } from "@storybook/react-vite";

import { Image } from ".";

const meta: Meta<typeof Image> = {
  component: Image,
  parameters: {
    layout: "centered",
  },
  args: { src: "https://placehold.co/600x400", alt: "Image" },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
