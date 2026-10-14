import Link from "next/link";
import type { Property } from "@/data/properties";
import { ShareButton } from "../ShareButton";
import { ArrowLeft } from "../Icons";
import { whatsappLink } from "@/lib/site";

const anchors = [
  { href: "#enamorar", label: "La propiedad" },
  { href: "#fotos", label: "Fotos" },
  { href: "#ambientes", label: "Ambientes" },
  { href: "#amenities", label: "Amenities" },
  { href: "#ubicacion", label: "Ubicación" },
  { href: "#precio", label: "Precio" },
];

export function DetailNav({ property }: { property: Property }) {
  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-paper/85 backdrop-blur-xl">
      <div className="container-x flex h-16 items-center justify-between gap-4">
        <Link
          href="/#propiedades"
          className="inline-flex items-center gap-2 text-sm text-muted transition hover:text-ink"
        >
          <ArrowLeft />
          <span className="hidden sm:inline">Propiedades</span>
          <span className="font-semibold text-ink sm:hidden">
            Palermo <span className="accent-serif">Living</span>
          </span>
        </Link>

        <nav aria-label="Secciones" className="hidden items-center gap-1 lg:flex">
          {anchors.map((a) => (
            <a key={a.href} href={a.href} className="rounded-full px-3 py-2 text-sm text-muted transition hover:text-ink">
              {a.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ShareButton
            title={`${property.cardTitle} · ${property.neighborhood}`}
            text={`${property.headline.lead} ${property.headline.accent}`}
            label="Compartir"
            className="rounded-full px-3 py-2 text-sm text-muted hover:text-ink [&>span]:hidden sm:[&>span]:inline"
          />
          <a
            href={whatsappLink(property)}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[var(--accent)] px-4 py-2 text-sm font-medium text-white transition hover:brightness-110"
          >
            Consultar
          </a>
        </div>
      </div>
    </header>
  );
}
