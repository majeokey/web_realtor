import type { Property } from "@/data/properties";
import { SafeImage } from "../SafeImage";
import { WhatsAppIcon } from "../Icons";
import { whatsappLink } from "@/lib/site";

export function Hero({ property: p }: { property: Property }) {
  return (
    <section className="relative isolate flex min-h-[88svh] items-end overflow-hidden bg-forest text-white">
      <SafeImage src={p.heroImage.src} alt={p.heroImage.alt} fill priority sizes="100vw" className="-z-10 object-cover" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/80 via-black/35 to-black/10" />

      <div className="container-x pb-28 pt-32 sm:pb-36">
        <p className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-medium backdrop-blur-md">
          {p.operation === "alquiler" ? "En alquiler" : "En venta"} · {p.neighborhood}
        </p>
        <h1 className="mt-6 max-w-4xl text-[2.7rem] font-semibold leading-[1.02] tracking-[-0.035em] text-balance sm:text-6xl lg:text-[5.25rem]">
          {p.headline.lead} <span className="accent-serif">{p.headline.accent}</span>
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/80 text-pretty sm:text-lg">{p.subtitle}</p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <a
            href={whatsappLink(p)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 font-medium text-ink transition hover:bg-white/90"
          >
            <WhatsAppIcon />
            Consultar por WhatsApp
          </a>
          <a
            href="#fotos"
            className="inline-flex items-center justify-center rounded-full border border-white/40 px-6 py-3.5 font-medium text-white backdrop-blur-sm transition hover:bg-white/10"
          >
            Ver las fotos
          </a>
        </div>
      </div>
    </section>
  );
}
