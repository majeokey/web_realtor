import type { Property } from "@/data/properties";
import { AccentTitle } from "../AccentTitle";

export function LoveReasons({ property: p }: { property: Property }) {
  return (
    <section id="enamorar" className="container-x py-24 sm:py-32">
      <p className="eyebrow">Por qué te vas a enamorar</p>
      <h2 className="mt-4 max-w-3xl text-4xl font-semibold leading-[1.05] tracking-[-0.03em] text-balance sm:text-5xl">
        <AccentTitle title={p.reasonsTitle} />
      </h2>

      <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2">
        {p.reasons.map((r, i) => (
          <article key={r.title} className="bg-paper p-8 sm:p-10">
            <div className="flex items-center justify-between">
              <span className="text-3xl" aria-hidden>
                {r.emoji}
              </span>
              <span className="text-xs tabular-nums text-muted">0{i + 1}</span>
            </div>
            <h3 className="mt-6 text-xl font-medium tracking-tight">{r.title}</h3>
            <p className="mt-3 leading-relaxed text-muted text-pretty">{r.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
