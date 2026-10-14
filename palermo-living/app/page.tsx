import { Suspense } from "react";
import { properties } from "@/data/properties";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PropertyExplorer } from "@/components/PropertyExplorer";
import { PropertyCard } from "@/components/PropertyCard";
import { WhatsAppIcon } from "@/components/Icons";
import { whatsappLink } from "@/lib/site";

const steps = [
  {
    emoji: "🔍",
    title: "Seleccionamos",
    body: "Publicamos pocas propiedades: solo las que visitamos y recomendaríamos a un amigo.",
  },
  {
    emoji: "📸",
    title: "Las contamos bien",
    body: "Cada una tiene su propia página, con fotos, metros reales, expensas y lo que la hace especial.",
  },
  {
    emoji: "🤝",
    title: "Te acompañamos",
    body: "Respondemos por WhatsApp en el día y coordinamos la visita cuando te quede cómodo.",
  },
];

export default function Home() {
  const neighborhoodsCount = new Set(properties.map((p) => p.neighborhood)).size;

  return (
    <>
      <SiteHeader />

      <main>
        {/* Hero */}
        <section className="container-x pb-12 pt-14 sm:pb-16 sm:pt-24">
          <p className="eyebrow">Selección curada · Palermo, Recoleta y Belgrano</p>
          <h1 className="mt-5 max-w-4xl text-[2.6rem] font-semibold leading-[1.02] tracking-[-0.035em] text-balance sm:text-6xl lg:text-7xl">
            Casas que se sienten <span className="accent-serif">hogar</span> desde la primera foto.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted text-pretty">
            Departamentos, PH y pisos elegidos uno por uno. Sin fichas eternas ni datos escondidos: cada propiedad, contada
            como se merece.
          </p>

          <dl className="mt-10 grid max-w-lg grid-cols-3 gap-6 border-t border-line pt-6">
            <Stat value={String(properties.length)} label="Propiedades" />
            <Stat value={String(neighborhoodsCount)} label="Barrios" />
            <Stat value="24 h" label="Respuesta" />
          </dl>
        </section>

        {/* Listado */}
        <section id="propiedades" className="container-x pb-24">
          <div className="mb-6 flex items-end justify-between gap-4">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Propiedades <span className="accent-serif">disponibles</span>
            </h2>
          </div>
          <Suspense
            fallback={
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {properties.map((p, i) => (
                  <PropertyCard key={p.slug} property={p} priority={i < 3} />
                ))}
              </div>
            }
          >
            <PropertyExplorer properties={properties} />
          </Suspense>
        </section>

        {/* Cómo trabajamos */}
        <section id="como-trabajamos" className="border-t border-line bg-sand/60">
          <div className="container-x py-20 sm:py-24">
            <p className="eyebrow">Cómo trabajamos</p>
            <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
              Menos portal, <span className="accent-serif">más criterio.</span>
            </h2>
            <div className="mt-12 grid gap-10 sm:grid-cols-3">
              {steps.map((s, i) => (
                <div key={s.title}>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl" aria-hidden>
                      {s.emoji}
                    </span>
                    <span className="text-xs tabular-nums text-muted">0{i + 1}</span>
                  </div>
                  <h3 className="mt-4 text-lg font-medium">{s.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-forest text-white">
          <div className="container-x flex flex-col items-start gap-8 py-20 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
                ¿No encontraste lo que buscás? <span className="accent-serif">Contanos.</span>
              </h2>
              <p className="mt-3 max-w-lg text-white/70">
                Decinos barrio, ambientes y presupuesto. Te avisamos antes de que se publique.
              </p>
            </div>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-6 py-3.5 font-medium text-forest transition hover:bg-white/90"
            >
              <WhatsAppIcon />
              Escribir por WhatsApp
            </a>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <dt className="text-xs text-muted">{label}</dt>
      <dd className="mt-1 text-2xl font-semibold tracking-tight tabular-nums">{value}</dd>
    </div>
  );
}
