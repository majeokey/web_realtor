import type { Property } from "@/data/properties";

export function Location({ property: p }: { property: Property }) {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(p.location.mapQuery)}&z=15&output=embed`;

  return (
    <section id="ubicacion" className="container-x py-24 sm:py-32">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <p className="eyebrow">Ubicación</p>
          <h2 className="mt-4 text-4xl font-semibold leading-[1.05] tracking-[-0.03em] text-balance sm:text-5xl">
            {p.address.split(",")[0]}, <span className="accent-serif">{p.neighborhood}.</span>
          </h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-muted text-pretty">{p.location.intro}</p>

          <ul className="mt-10 grid gap-3 sm:grid-cols-2">
            {p.location.pois.map((poi) => (
              <li key={poi.name} className="flex items-start gap-4 rounded-2xl border border-line bg-white p-4">
                <span className="text-2xl leading-none" aria-hidden>
                  {poi.emoji}
                </span>
                <div>
                  <p className="font-medium leading-snug">{poi.name}</p>
                  <p className="mt-0.5 text-sm text-muted">{poi.distance}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative min-h-[360px] overflow-hidden rounded-3xl border border-line bg-sand lg:min-h-full">
          <iframe
            title={`Mapa de ${p.address}`}
            src={mapSrc}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 size-full grayscale-[35%]"
          />
        </div>
      </div>
    </section>
  );
}
