import type { Property } from "@/data/properties";
import { formatM2 } from "@/lib/format";

export function Spaces({ property: p }: { property: Property }) {
  const total = p.surfaces[p.surfaces.length - 1];
  const parts = p.surfaces.slice(0, -1);

  return (
    <section id="ambientes" className="border-y border-line bg-sand/50">
      <div className="container-x grid gap-16 py-24 sm:py-32 lg:grid-cols-[1fr_1.3fr] lg:gap-24">
        <div>
          <p className="eyebrow">Superficies</p>
          <h2 className="mt-4 text-4xl font-semibold leading-[1.05] tracking-[-0.03em] sm:text-5xl">
            Metros <span className="accent-serif">que se viven.</span>
          </h2>
          <p className="mt-5 max-w-sm leading-relaxed text-muted">
            Medidas reales según plano. Sin sumar espacios comunes ni redondear para arriba.
          </p>

          <dl className="mt-10 divide-y divide-line border-y border-line">
            {parts.map((s) => (
              <div key={s.label} className="flex items-baseline justify-between py-4">
                <dt className="text-muted">{s.label}</dt>
                <dd className="font-medium tabular-nums">{formatM2(s.m2)}</dd>
              </div>
            ))}
            <div className="flex items-baseline justify-between py-5">
              <dt className="font-medium">{total.label}</dt>
              <dd className="text-3xl font-semibold tracking-tight tabular-nums">{formatM2(total.m2)}</dd>
            </div>
          </dl>
        </div>

        <div>
          <p className="eyebrow">Distribución</p>
          <ol className="mt-6">
            {p.spaces.map((s, i) => (
              <li key={s.name} className="grid grid-cols-[3rem_1fr] gap-2 border-t border-line py-5 last:border-b">
                <span className="pt-0.5 text-sm tabular-nums text-[var(--accent)]">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <p className="text-lg font-medium tracking-tight">{s.name}</p>
                  <p className="mt-1 text-muted">{s.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
