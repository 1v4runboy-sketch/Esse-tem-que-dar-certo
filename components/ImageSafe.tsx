// components/ImageSafe.tsx
import Image, { ImageProps } from "next/image";

type Props = Omit<ImageProps, "src" | "alt"> & {
  src?: string | null;
  alt?: string;
  fallbackClassName?: string;
};

export default function ImageSafe({ src, alt, fallbackClassName, ...rest }: Props) {
  if (!src) {
    // Não renderiza nada se não houver src (evita warnings de src="")
    return <div className={fallbackClassName} aria-hidden />;
  }
  return <Image src={src} alt={alt ?? ""} {...rest} />;
}
