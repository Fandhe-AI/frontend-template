import * as Slot from "@radix-ui/react-slot";
import type { ButtonHTMLAttributes } from "react";
import { Link, type LinkProps as ReactRouterLinkProps } from "react-router";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;
export type LinkProps = ReactRouterLinkProps;

type Props<T extends ButtonProps | LinkProps> = T & {
  asChild?: boolean;
};

export const Button = <T extends ButtonProps | LinkProps>({
  asChild,
  children,
  ...props
}: Props<T>) => {
  const Comp = asChild ? Slot.Root : "to" in props ? Link : "button";

  return (
    // @ts-expect-error: TODO: fix this
    <Comp {...props}>
      <Slot.Slottable>{children}</Slot.Slottable>
    </Comp>
  );
};
