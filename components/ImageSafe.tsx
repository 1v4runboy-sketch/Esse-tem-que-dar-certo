"use client";

import Image, { ImageProps } from "next/image";
import { useState } from "react";

type Props = Omit<ImageProps, "src" | "alt"> & {
  src?: string | null;
  alt?: string;
  fallbackSrc?: string;
  altFallback?: string;
  className?: string;
};

export default function ImageSafe({
  src,
  alt,
  fallbackSrc = "/placeholder.svg",
  altFallback = "Imagem não disponível",
  className,
  ...rest
}: Props) {
  const [err, setErr] = useState(false);

  const finalSrc =
    !src || src.trim() === "" || err ? fallbackSrc : (src as string);

  return (
    <Image
      src={finalSrc}
      alt={alt ?? altFallback}
      className={className}
      onError={() => setErr(true)}
      {...rest}
    />
  );
}
