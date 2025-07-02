import { type ImgHTMLAttributes, type SyntheticEvent, useState } from "react";

type Props = ImgHTMLAttributes<HTMLImageElement> &
  (
    | {
        alt: string;
      }
    | {
        "aria-label": string;
      }
    | {
        "aria-labelledby": string;
      }
  ) & {
    fallbackSrc?: string;
  };

export const Image = ({ src, fallbackSrc, onError, ...props }: Props) => {
  const [hasError, setHasError] = useState(false);

  const handleError = (event: SyntheticEvent<HTMLImageElement, Event>) => {
    if (fallbackSrc && !hasError) {
      setHasError(true);
    }
    onError?.(event);
  };

  return (
    // biome-ignore lint/a11y/useAltText: アクセシビリティ属性はImageProps型で必須として定義済み
    <img
      {...props}
      src={hasError && fallbackSrc ? fallbackSrc : src}
      onError={handleError}
    />
  );
};
