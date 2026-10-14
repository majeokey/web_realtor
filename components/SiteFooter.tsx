import Link from "next/link";
import { Logo } from "./Logo";
import { site, whatsappLink } from "@/lib/site";
import { neighborhoods } from "@/data/properties";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-paper">
      <div className="container-x grid gap-10 py-14 sm:grid-cols-[1.4fr_1fr_1fr]">
        <div className="max-w-xs">
          <Logo />
          <p className="mt-3 text-sm leading-relaxed text-muted">
            Propiedades seleccionadas en Palermo, Recoleta y Belgrano. Pocas, buenas y bien contadas.
          </p>
        </div>
        <div>
          <p className="eyebrow">Barrios</p>
          <ul className="mt-4 space-y-2 text-sm">
            {neighborhoods.map((n) => (
              <li key={n}>
                <Link href={`/?barrio=${encodeURIComponent(n)}#propiedades`} className="text-ink/80 transition hover:text-ink">
                  {n}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="eyebrow">Contacto</p>
          <ul className="mt-4 space-y-2 text-sm text-ink/80">
            <li>
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="transition hover:text-ink">
                WhatsApp
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="transition hover:text-ink">
                {site.email}
              </a>
            </li>
            <li>
              <a href={`https://instagram.com/${site.instagram}`} target="_blank" rel="noopener noreferrer" className="transition hover:text-ink">
                @{site.instagram}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container-x flex flex-col gap-2 border-t border-line py-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Palermo Living · Ciudad de Buenos Aires</p>
        <p className="text-muted/70">Diseño · @majeokey</p>
      </div>
    </footer>
  );
}
