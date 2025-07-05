import * as Slot from "@radix-ui/react-slot";
import type { ComponentPropsWithRef, HTMLAttributes } from "react";

import { Button } from "../button";

type DivProps = HTMLAttributes<HTMLDivElement>;
type ButtonProps = ComponentPropsWithRef<typeof Button>;

type Props<T extends ButtonProps | DivProps> = T & {
  asChild?: boolean;
};

export const Item = <T extends ButtonProps | DivProps>({
  asChild,
  children,
  ...props
}: Props<T>) => {
  const Comp = asChild
    ? Slot.Root
    : "to" in props || "onClick" in props
      ? Button
      : "div";

  return (
    // @ts-expect-error: TODO: fix this
    <Comp {...props}>
      <Slot.Slottable>{children}</Slot.Slottable>
    </Comp>
  );
};
