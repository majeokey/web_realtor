import type { Property } from "@/data/properties";
import { formatArs, formatNumber, priceLabel, roomsLabel } from "@/lib/format";

export function KeyFacts({ property: p }: { property: Property }) {
  const facts = [
    { value: `${formatNumber(p.totalM2)} m²`, label: "Superficie total" },
    {
      value: roomsLabel(p.rooms),
      label: p.bedrooms > 0 ? `${p.bedrooms} dorm. · ${p.bathrooms} baño${p.bathrooms > 1 ? "s" : ""}` : "Ambiente único",
    },
    { value: `Piso ${p.floor}`, label: p.floorNote },
    { value: p.orientation, label: p.orientationNote },
    p.propertyType === "PH"
      ? { value: `Año ${p.yearBuilt}`, label: "Casa de época reciclada" }
      : {
          value: `${p.amenities.length} amenities`,
          label: p.amenities
            .slice(0, 3)
            .map((a) => a.name.split(" ")[0])
            .join(", "),
        },
  ];

  return (
    <div className="container-x relative z-10 -mt-16 sm:-mt-20">
      <div className="overflow-hidden rounded-3xl border border-line bg-white shadow-[0_30px_80px_-40px_rgba(23,23,21,0.45)]">
        <div className="flex flex-col gap-1 border-b border-line px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <div className="flex items-baseline gap-3">
            <span className="text-xs text-muted">{p.operation === "alquiler" ? "Alquiler mensual" : "Precio"}</span>
            <span className="text-2xl font-semibold tracking-tight">{priceLabel(p)}</span>
          </div>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted">
            <span>Expensas {formatArs(p.expensasArs)}</span>
            <span className="inline-flex items-center gap-1.5 font-medium text-ink">
              <span className="size-2 rounded-full bg-emerald-500" aria-hidden />
              {p.availability}
            </span>
          </div>
        </div>
        <dl className="grid grid-cols-2 gap-px bg-line sm:grid-cols-3 lg:grid-cols-5">
          {facts.map((f, i) => (
            <div
              key={f.label}
              className={`flex flex-col-reverse bg-white px-6 py-5 sm:px-8 ${i === facts.length - 1 ? "col-span-2 lg:col-span-1" : ""}`}
            >
              <dt className="mt-1 text-xs leading-snug text-muted">{f.label}</dt>
              <dd className="text-xl font-semibold tracking-tight sm:text-2xl">{f.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
