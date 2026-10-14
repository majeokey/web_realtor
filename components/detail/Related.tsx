import type { Property } from "@/data/properties";
import { PropertyCard } from "../PropertyCard";

export function Related({ properties }: { properties: Property[] }) {
  return (
    <section className="border-t border-line bg-sand/40">
      <div className="container-x py-20 sm:py-24">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          También te pueden <span className="accent-serif">gustar.</span>
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {properties.map((p) => (
            <PropertyCard key={p.slug} property={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
