"use client";

import { useCallback, useEffect, useState } from "react";
import type { Photo } from "@/data/properties";
import { SafeImage } from "../SafeImage";
import { ArrowLeft, ArrowRight, CloseIcon } from "../Icons";

export function Gallery({ photos }: { photos: Photo[] }) {
  const [open, setOpen] = useState<number | null>(null);
  const visible = photos.slice(0, 5);
  const extra = photos.length - visible.length;

  const close = useCallback(() => setOpen(null), []);
  const step = useCallback(
    (dir: 1 | -1) => setOpen((i) => (i === null ? i : (i + dir + photos.length) % photos.length)),
    [photos.length],
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close, step]);

  return (
    <section id="fotos" className="container-x pb-24 sm:pb-32">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="eyebrow">Recorré la propiedad</p>
          <h2 className="mt-4 text-4xl font-semibold leading-[1.05] tracking-[-0.03em] sm:text-5xl">
            Cada rincón, <span className="accent-serif">en detalle.</span>
          </h2>
        </div>
        <button
          type="button"
          onClick={() => setOpen(0)}
          className="self-start rounded-full border border-ink/20 px-5 py-2.5 text-sm font-medium transition hover:border-ink sm:self-auto"
        >
          Ver las {photos.length} fotos
        </button>
      </div>

      <div className="mt-10 grid auto-rows-[160px] grid-cols-2 gap-3 sm:auto-rows-[220px] lg:grid-cols-4">
        {visible.map((ph, i) => (
          <button
            key={ph.src + i}
            type="button"
            onClick={() => setOpen(i)}
            className={`group relative overflow-hidden rounded-2xl bg-sand text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink ${
              i === 0 ? "col-span-2 row-span-2" : ""
            }`}
          >
            <SafeImage
              src={ph.src}
              alt={ph.alt}
              fill
              sizes={i === 0 ? "(min-width: 1024px) 50vw, 100vw" : "(min-width: 1024px) 25vw, 50vw"}
              className="object-cover transition duration-700 group-hover:scale-[1.04]"
            />
            <span className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4 text-sm text-white opacity-0 transition group-hover:opacity-100">
              {ph.caption ?? ph.alt}
            </span>
            {i === visible.length - 1 && extra > 0 && (
              <span className="absolute inset-0 flex items-center justify-center bg-black/45 text-lg font-medium text-white">
                +{extra} {extra === 1 ? "foto" : "fotos"}
              </span>
            )}
          </button>
        ))}
      </div>

      {open !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Galería de fotos"
          className="fixed inset-0 z-50 flex flex-col bg-black/95 text-white"
          onClick={close}
        >
          <div className="flex items-center justify-between p-4 sm:p-6">
            <span className="text-sm tabular-nums text-white/70">
              {open + 1} / {photos.length}
            </span>
            <button type="button" onClick={close} aria-label="Cerrar" className="rounded-full p-2 transition hover:bg-white/10">
              <CloseIcon />
            </button>
          </div>
          <div className="relative flex-1" onClick={(e) => e.stopPropagation()}>
            <SafeImage
              key={photos[open].src + open}
              src={photos[open].src}
              alt={photos[open].alt}
              fill
              sizes="100vw"
              className="object-contain"
            />
            <button
              type="button"
              onClick={() => step(-1)}
              aria-label="Foto anterior"
              className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 backdrop-blur transition hover:bg-white/20"
            >
              <ArrowLeft className="size-5" />
            </button>
            <button
              type="button"
              onClick={() => step(1)}
              aria-label="Foto siguiente"
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 backdrop-blur transition hover:bg-white/20"
            >
              <ArrowRight className="size-5" />
            </button>
          </div>
          <p className="p-6 text-center text-sm text-white/80">{photos[open].caption ?? photos[open].alt}</p>
        </div>
      )}
    </section>
  );
}
