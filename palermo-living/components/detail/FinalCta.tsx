import type { Property } from "@/data/properties";
import { SafeImage } from "../SafeImage";
import { WhatsAppIcon } from "../Icons";
import { whatsappLink } from "@/lib/site";

export function FinalCta({ property: p }: { property: Property }) {
  const image = p.gallery[p.gallery.length - 1] ?? p.heroImage;
  return (
    <section className="relative isolate overflow-hidden bg-forest text-white">
      <SafeImage src={image.src} alt="" fill sizes="100vw" className="-z-10 object-cover opacity-50" />
      <div className="absolute inset-0 -z-10 bg-[color-mix(in_oklab,var(--accent)_45%,#0b0b0a)] mix-blend-multiply" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

      <div className="container-x flex min-h-[70svh] flex-col items-center justify-center py-28 text-center">
        <p className="rounded-full bg-white/15 px-4 py-1.5 text-xs font-medium backdrop-blur">{p.availability}</p>
        <h2 className="mt-6 text-5xl font-semibold leading-[1] tracking-[-0.035em] sm:text-7xl">
          ¿Te la imaginás <span className="accent-serif">tuya?</span>
        </h2>
        <p className="mt-6 max-w-md text-lg text-white/80 text-pretty">
          Escribinos y coordinamos para que la conozcas. Las mejores propiedades de {p.neighborhood} vuelan.
        </p>
        <a
          href={whatsappLink(p)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-lg font-medium text-ink transition hover:scale-[1.02] hover:bg-white/90"
        >
          <WhatsAppIcon className="size-6 text-[#25D366]" />
          Escribir por WhatsApp
        </a>
      </div>
    </section>
  );
}
