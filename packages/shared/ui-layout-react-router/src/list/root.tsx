import * as Slot from "@radix-ui/react-slot";
import type { HTMLAttributes, ReactNode } from "react";

type Props<T> = HTMLAttributes<HTMLUListElement> & {
  asChild?: boolean;
  data: T[];
  empty?: ReactNode;
  filter?: (item: T) => boolean;
  sort?: (a: T, b: T) => number;
  children: (item: T) => ReactNode;
};

export const Root = <T,>({
  asChild,
  data,
  filter,
  sort,
  empty,
  children,
  ...props
}: Props<T>) => {
  const Comp = asChild ? Slot.Root : "ul";

  const filteredData = filter ? data.filter(filter) : data;
  const sortedData = sort ? filteredData.sort(sort) : filteredData;

  return (
    <Comp {...props}>
      <Slot.Slottable>
        {sortedData.length > 0
          ? sortedData.map((item) => children(item))
          : empty}
      </Slot.Slottable>
    </Comp>
  );
};
