import type { Meta, StoryObj } from "@storybook/react-vite";

import { Picture } from ".";

const meta: Meta<typeof Picture> = {
  component: Picture,
  parameters: {
    layout: "centered",
  },
  args: {
    image: {
      src: "https://placehold.co/600x400",
      alt: "画像",
    },
    sources: [
      { srcSet: "https://placehold.co/600x400", media: "(min-width: 768px)" },
      { srcSet: "https://placehold.co/400x300", media: "(max-width: 767px)" },
    ],
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithMultipleSources: Story = {
  args: {
    sources: [
      { srcSet: "https://placehold.co/800x600", media: "(min-width: 1024px)" },
      { srcSet: "https://placehold.co/600x400", media: "(min-width: 768px)" },
      { srcSet: "https://placehold.co/400x300", media: "(max-width: 767px)" },
    ],
  },
};

export const WithWebP: Story = {
  args: {
    sources: [
      { srcSet: "https://placehold.co/600x400.webp", type: "image/webp" },
      { srcSet: "https://placehold.co/600x400.jpg", type: "image/jpeg" },
    ],
  },
};
