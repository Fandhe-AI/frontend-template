import type {
  ComponentPropsWithRef,
  HTMLAttributes,
  SourceHTMLAttributes,
  SyntheticEvent,
} from "react";
import { useState } from "react";

import { Image } from "../image";

type ImageProps = ComponentPropsWithRef<typeof Image>;

type Props = Omit<HTMLAttributes<HTMLPictureElement>, "children"> & {
  sources?: SourceHTMLAttributes<HTMLSourceElement>[];
  image: ImageProps;
  fallbackSrc?: string;
};

export const Picture = ({
  sources,
  image: { fallbackSrc: imageFallbackSrc, onError, ...image },
  fallbackSrc,
  ...props
}: Props) => {
  const [hasError, setHasError] = useState(false);

  const handleError = (event: SyntheticEvent<HTMLImageElement, Event>) => {
    setHasError(true);
    onError?.(event);
  };

  if (hasError && fallbackSrc) {
    return (
      <picture {...props}>
        <Image {...image} src={fallbackSrc} />
      </picture>
    );
  }

  return (
    <picture {...props}>
      {sources?.map((source) => (
        <source key={source.src} {...source} />
      ))}
      <Image
        {...image}
        fallbackSrc={imageFallbackSrc ?? fallbackSrc}
        onError={handleError}
      />
    </picture>
  );
};
