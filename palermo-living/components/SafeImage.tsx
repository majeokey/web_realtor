"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";

/** next/image con fallback elegante si la foto no carga. */
export function SafeImage({ alt, className = "", fill, ...props }: ImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`${fill ? "absolute inset-0" : ""} bg-[radial-gradient(120%_80%_at_20%_10%,#efe9dd_0%,#e3dccd_55%,#d6cdb9_100%)] ${className}`}
      />
    );
  }

  return <Image alt={alt} fill={fill} className={className} onError={() => setFailed(true)} {...props} />;
}
