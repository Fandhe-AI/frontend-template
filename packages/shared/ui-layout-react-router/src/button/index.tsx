import * as Slot from "@radix-ui/react-slot";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { Link, type LinkProps as ReactRouterLinkProps } from "react-router";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;
type LinkProps = ReactRouterLinkProps;

type Props = (ButtonProps | LinkProps) & {
  asChild?: boolean;
  children: ReactNode;
};

export const Button = ({ asChild, children, ...props }: Props) => {
  const Comp = asChild ? Slot.Root : "to" in props ? Link : "button";

  return (
    // @ts-expect-error: TODO: fix this
    <Comp {...props}>
      <Slot.Slottable>{children}</Slot.Slottable>
    </Comp>
  );
};
