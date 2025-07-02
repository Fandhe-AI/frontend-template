import * as Slot from "@radix-ui/react-slot";
import type { ButtonHTMLAttributes } from "react";
import { tv, type VariantProps } from "tailwind-variants";

type Props = ButtonHTMLAttributes<HTMLButtonElement> &
  ButtonVariants & {
    asChild?: boolean;
  };

type ButtonVariants = VariantProps<typeof button>;

const button = tv({
  base: "font-medium bg-blue-500 text-white rounded-full active:opacity-80",
  variants: {
    color: {
      primary: "bg-blue-500 text-white",
      secondary: "bg-purple-500 text-white",
    },
    size: {
      sm: "text-sm",
      md: "text-base",
      lg: "px-4 py-3 text-lg",
    },
  },
  compoundVariants: [
    {
      size: ["sm", "md"],
      class: "px-3 py-1",
    },
  ],
  defaultVariants: {
    size: "md",
    color: "primary",
  },
});

export const Button = ({
  asChild,
  size,
  color,
  children,
  className,
  ...props
}: Props) => {
  const Comp = asChild ? Slot.Root : "button";

  return (
    <Comp className={button({ className, size, color })} {...props}>
      <Slot.Slottable>{children}</Slot.Slottable>
    </Comp>
  );
};
