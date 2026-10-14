"use client";

import { useEffect, useState } from "react";
import type { Property } from "@/data/properties";
import { formatArs, priceLabel } from "@/lib/format";
import { whatsappLink } from "@/lib/site";
import { WhatsAppIcon } from "../Icons";

/** Barra inferior con precio + CTA: aparece al pasar el hero. */
export function StickyPriceBar({ property: p }: { property: Property }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.75);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] transition duration-300 sm:px-6 ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-full opacity-0"
      }`}
    >
      <div className="mx-auto flex max-w-3xl items-center justify-between gap-4 rounded-full border border-line bg-white/90 py-2 pl-6 pr-2 shadow-[0_20px_50px_-20px_rgba(23,23,21,0.45)] backdrop-blur-xl">
        <div className="min-w-0">
          <p className="truncate text-xs text-muted">
            {p.neighborhood} · {p.address.split(",")[0]}
          </p>
          <p className="truncate font-semibold tracking-tight">
            {priceLabel(p)} <span className="font-normal text-muted">+ exp. {formatArs(p.expensasArs)}</span>
          </p>
        </div>
        <a
          href={whatsappLink(p)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-medium text-white transition hover:brightness-110"
        >
          <WhatsAppIcon className="size-4" />
          Consultar
        </a>
      </div>
    </div>
  );
}
