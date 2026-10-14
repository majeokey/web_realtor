import type { Property } from "@/data/properties";
import { SafeImage } from "../SafeImage";
import { AccentTitle } from "../AccentTitle";

export function Feature({ property: p }: { property: Property }) {
  const f = p.feature;
  return (
    <section className="container-x grid items-center gap-12 py-24 sm:py-32 lg:grid-cols-[1.15fr_1fr] lg:gap-20">
      <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-sand sm:aspect-[5/4] lg:aspect-[4/5]">
        <SafeImage src={f.image.src} alt={f.image.alt} fill sizes="(min-width: 1024px) 55vw, 100vw" className="object-cover" />
      </div>
      <div>
        <p className="eyebrow">{f.eyebrow}</p>
        <h2 className="mt-4 text-4xl font-semibold leading-[1.05] tracking-[-0.03em] text-balance sm:text-5xl">
          <AccentTitle title={f.title} />
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-muted text-pretty">{f.body}</p>
        <ul className="mt-8 space-y-3">
          {f.bullets.map((b) => (
            <li key={b} className="flex gap-3 border-t border-line pt-3">
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[var(--accent)]" aria-hidden />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
