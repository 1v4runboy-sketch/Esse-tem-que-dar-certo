"use client";

import Image, { ImageProps } from "next/image";

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
  if (!src || src.trim() === "") {
    // Não renderiza <Image> com src vazio
    return (
      <Image
        src={fallbackSrc}
        alt={altFallback}
        width={rest.width ?? 600}
        height={rest.height ?? 400}
        className={className}
        {...rest}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt ?? altFallback}
      className={className}
      onError={(e) => {
        // Fallback inline, evita loops de carregamento
        (e.currentTarget as HTMLImageElement).src =
          "data:image/svg+xml;charset=UTF-8," +
          encodeURIComponent(
            `<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'><rect width='100%' height='100%' fill='#f1f5f9'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='14' fill='#64748b'>Imagem indisponível</text></svg>`
          );
      }}
      {...rest}
    />
  );
}
