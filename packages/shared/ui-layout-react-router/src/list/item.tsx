import * as Slot from "@radix-ui/react-slot";
import type { HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLLIElement> & {
  asChild?: boolean;
};

export const Item = ({ asChild, children, ...props }: Props) => {
  const Comp = asChild ? Slot.Root : "li";

  return (
    <Comp {...props}>
      <Slot.Slottable>{children}</Slot.Slottable>
    </Comp>
  );
};
