"use client";

import Image, { ImageProps } from "next/image";
import { useState } from "react";

type Props = Omit<ImageProps, "src" | "alt"> & {
  src?: string;
  alt?: string;
  fallbackSrc?: string;
};

export default function ImageSafe({
  src,
  alt = "",
  fallbackSrc = "/polus-logo.svg",
  ...rest
}: Props) {
  const [error, setError] = useState(false);
  const actual = !src || error ? fallbackSrc : src;

  // se por algum motivo ainda estiver vazio, não renderiza
  if (!actual) return null;

  return (
    <Image
      {...rest}
      src={actual}
      alt={alt}
      onError={() => setError(true)}
      sizes={rest.sizes ?? "(min-width:768px) 33vw, 100vw"}
    />
  );
}
