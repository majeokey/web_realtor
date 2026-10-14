import type { Property } from "@/data/properties";
import { AccentTitle } from "../AccentTitle";

export function Amenities({ property: p }: { property: Property }) {
  return (
    <section
      id="amenities"
      className="bg-[color-mix(in_oklab,var(--accent)_38%,#0f0f0e)] text-white"
    >
      <div className="container-x py-24 sm:py-32">
        <p className="eyebrow !text-white/60">
          {p.propertyType === "PH" ? "Equipamiento" : `El edificio · Año ${p.yearBuilt}`}
        </p>
        <h2 className="mt-4 max-w-3xl text-4xl font-semibold leading-[1.05] tracking-[-0.03em] text-balance sm:text-5xl">
          <AccentTitle title={p.amenitiesTitle} />
        </h2>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/70">{p.amenitiesIntro}</p>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {p.amenities.map((a) => (
            <article
              key={a.name}
              className="rounded-3xl border border-white/10 bg-white/[0.06] p-7 backdrop-blur transition hover:bg-white/[0.1]"
            >
              <span className="text-3xl" aria-hidden>
                {a.emoji}
              </span>
              <h3 className="mt-5 text-lg font-medium">{a.name}</h3>
              <p className="mt-2 leading-relaxed text-white/65">{a.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
