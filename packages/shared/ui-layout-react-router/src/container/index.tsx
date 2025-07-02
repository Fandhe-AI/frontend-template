import * as Slot from "@radix-ui/react-slot";
import type { HTMLAttributes } from "react";
import { tv } from "tailwind-variants";

type Props<T extends HTMLAttributes<HTMLDivElement>> = T & {
  asChild?: boolean;
  inner?: Omit<HTMLAttributes<HTMLDivElement>, "children">;
};

const inner = tv({
  base: "w-(--container-width)",
});

export const Container = <T extends HTMLAttributes<HTMLDivElement>>({
  asChild,
  children,
  inner: { className: innerClassName, ...innerProps } = {},
  ...props
}: Props<T>) => {
  const Comp = asChild ? Slot.Root : "section";

  return (
    <Comp {...props}>
      <Slot.Slottable>
        <div className={inner({ className: innerClassName })} {...innerProps}>
          {children}
        </div>
      </Slot.Slottable>
    </Comp>
  );
};
