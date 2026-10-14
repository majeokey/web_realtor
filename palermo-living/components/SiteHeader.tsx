import { Logo } from "./Logo";
import { WhatsAppIcon } from "./Icons";
import { whatsappLink } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-paper/80 backdrop-blur-xl">
      <div className="container-x flex h-16 items-center justify-between">
        <Logo />
        <nav className="flex items-center gap-1 text-sm">
          <a href="#propiedades" className="hidden rounded-full px-4 py-2 text-muted transition hover:text-ink sm:block">
            Propiedades
          </a>
          <a href="#como-trabajamos" className="hidden rounded-full px-4 py-2 text-muted transition hover:text-ink sm:block">
            Cómo trabajamos
          </a>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 font-medium text-paper transition hover:bg-ink/85"
          >
            <WhatsAppIcon className="size-4" />
            Contacto
          </a>
        </nav>
      </div>
    </header>
  );
}
