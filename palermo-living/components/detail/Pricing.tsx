import type { Property } from "@/data/properties";
import { formatArs, formatUsd, usdPerM2 } from "@/lib/format";
import { whatsappLink } from "@/lib/site";
import { WhatsAppIcon } from "../Icons";
import { ShareButton } from "../ShareButton";

export function Pricing({ property: p }: { property: Property }) {
  const rent = p.operation === "alquiler";

  return (
    <section id="precio" className="container-x pb-24 sm:pb-32">
      <div className="grid overflow-hidden rounded-[2rem] border border-line bg-white lg:grid-cols-[1.2fr_1fr]">
        <div className="p-8 sm:p-12">
          <p className="eyebrow">Valores</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            {rent ? (
              <>
                Precio por contrato <span className="accent-serif">de un año.</span>
              </>
            ) : (
              <>
                Precio claro, <span className="accent-serif">sin sorpresas.</span>
              </>
            )}
          </h2>

          <div className="mt-10 space-y-6">
            <div>
              <p className="text-sm text-muted">{rent ? "Alquiler mensual" : "Precio de venta"}</p>
              <p className="mt-1 text-5xl font-semibold tracking-[-0.03em] tabular-nums sm:text-6xl">
                {formatUsd(p.priceUsd)}
                {rent && <span className="text-2xl font-normal text-muted">/mes</span>}
              </p>
              {!rent && <p className="mt-2 text-sm text-muted">{formatUsd(usdPerM2(p))} por m²</p>}
            </div>
            <div className="flex items-baseline gap-3 border-t border-line pt-6">
              <span className="text-2xl text-muted" aria-hidden>
                +
              </span>
              <div>
                <p className="text-sm text-muted">Expensas por mes</p>
                <p className="mt-0.5 text-2xl font-semibold tracking-tight tabular-nums">{formatArs(p.expensasArs)}</p>
              </div>
            </div>
          </div>

          <p className="mt-8 text-sm leading-relaxed text-muted">{p.priceNote}</p>
        </div>

        <div className="flex flex-col justify-between gap-10 bg-sand/70 p-8 sm:p-12">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
              </span>
              {p.availability}
            </p>
            <ul className="mt-8 space-y-3">
              {p.perks.map((perk) => (
                <li key={perk} className="border-b border-line pb-3 text-lg">
                  {perk}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            <a
              href={whatsappLink(p)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--accent)] px-6 py-4 font-medium text-white transition hover:brightness-110"
            >
              <WhatsAppIcon />
              Coordinar una visita
            </a>
            <ShareButton
              title={`${p.cardTitle} · ${p.neighborhood}`}
              label="Compartir esta propiedad"
              className="justify-center rounded-full border border-ink/15 px-6 py-3.5 text-sm font-medium hover:border-ink"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
