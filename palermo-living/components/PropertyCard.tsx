import Link from "next/link";
import type { Property } from "@/data/properties";
import { SafeImage } from "./SafeImage";
import { ArrowRight } from "./Icons";
import { formatArs, formatNumber, operationLabel, priceLabel, roomsLabel } from "@/lib/format";

export function PropertyCard({ property: p, priority = false }: { property: Property; priority?: boolean }) {
  return (
    <Link
      href={`/propiedades/${p.slug}`}
      className="group flex flex-col overflow-hidden rounded-3xl border border-line bg-white transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_-28px_rgba(23,23,21,0.35)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-sand">
        <SafeImage
          src={p.heroImage.src}
          alt={p.heroImage.alt}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition duration-700 group-hover:scale-[1.04]"
        />
        <div className="absolute inset-x-0 top-0 flex items-center justify-between p-4">
          <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-ink backdrop-blur">
            {operationLabel(p)}
          </span>
          {p.featured && (
            <span className="rounded-full bg-ink/80 px-3 py-1 text-xs font-medium text-white backdrop-blur">
              Destacada
            </span>
          )}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="text-xs text-muted">
          {p.neighborhood} · {p.address.split(",")[0]}
        </p>
        <h3 className="mt-1.5 text-[17px] font-medium leading-snug tracking-tight text-balance">{p.cardTitle}</h3>

        <div className="mt-4 flex items-baseline gap-2">
          <span className="text-2xl font-semibold tracking-tight">{priceLabel(p)}</span>
        </div>
        <p className="text-xs text-muted">+ expensas {formatArs(p.expensasArs)}</p>

        <dl className="mt-4 flex gap-4 border-y border-line py-3 text-sm">
          <div>
            <dt className="sr-only">Ambientes</dt>
            <dd>{roomsLabel(p.rooms)}</dd>
          </div>
          <div className="text-line">|</div>
          <div>
            <dt className="sr-only">Superficie</dt>
            <dd>{formatNumber(p.totalM2)} m²</dd>
          </div>
          <div className="text-line">|</div>
          <div>
            <dt className="sr-only">Piso</dt>
            <dd>Piso {p.floor}</dd>
          </div>
        </dl>

        <ul className="mt-4 flex flex-wrap gap-2">
          {p.highlights.map((h) => (
            <li key={h.label} className="rounded-full bg-sand px-3 py-1 text-xs text-ink/80">
              <span aria-hidden>{h.emoji}</span> {h.label}
            </li>
          ))}
        </ul>

        <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-medium">
          Ver detalle
          <ArrowRight className="size-4 transition group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
