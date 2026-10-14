"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { neighborhoods, type Neighborhood, type Operation, type Property } from "@/data/properties";
import { PropertyCard } from "./PropertyCard";

type OpFilter = "todas" | Operation;
type RoomsFilter = "todos" | "1" | "2" | "3" | "4+";
type Sort = "destacadas" | "precio-asc" | "precio-desc" | "m2-desc";

const PRICE_STEPS: Record<Operation, { value: number; label: string }[]> = {
  alquiler: [
    { value: 800, label: "Hasta USD 800" },
    { value: 1000, label: "Hasta USD 1.000" },
    { value: 1500, label: "Hasta USD 1.500" },
    { value: 2000, label: "Hasta USD 2.000" },
  ],
  venta: [
    { value: 250000, label: "Hasta USD 250.000" },
    { value: 300000, label: "Hasta USD 300.000" },
    { value: 350000, label: "Hasta USD 350.000" },
    { value: 400000, label: "Hasta USD 400.000" },
  ],
};

export function PropertyExplorer({ properties }: { properties: Property[] }) {
  const params = useSearchParams();

  const [op, setOp] = useState<OpFilter>(() => {
    const v = params.get("operacion");
    return v === "alquiler" || v === "venta" ? v : "todas";
  });
  const [barrio, setBarrio] = useState<"todos" | Neighborhood>(() => {
    const v = params.get("barrio") as Neighborhood | null;
    return v && neighborhoods.includes(v) ? v : "todos";
  });
  const [rooms, setRooms] = useState<RoomsFilter>("todos");
  const [maxPrice, setMaxPrice] = useState<number | null>(null);
  const [sort, setSort] = useState<Sort>("destacadas");

  // Mantener operación y barrio en la URL para poder compartir la búsqueda
  useEffect(() => {
    const url = new URL(window.location.href);
    op === "todas" ? url.searchParams.delete("operacion") : url.searchParams.set("operacion", op);
    barrio === "todos" ? url.searchParams.delete("barrio") : url.searchParams.set("barrio", barrio);
    window.history.replaceState(null, "", url);
  }, [op, barrio]);

  const results = useMemo(() => {
    const list = properties.filter((p) => {
      if (op !== "todas" && p.operation !== op) return false;
      if (barrio !== "todos" && p.neighborhood !== barrio) return false;
      if (rooms !== "todos") {
        if (rooms === "4+" ? p.rooms < 4 : p.rooms !== Number(rooms)) return false;
      }
      if (maxPrice !== null && p.priceUsd > maxPrice) return false;
      return true;
    });
    const sorted = [...list];
    if (sort === "precio-asc") sorted.sort((a, b) => a.priceUsd - b.priceUsd);
    if (sort === "precio-desc") sorted.sort((a, b) => b.priceUsd - a.priceUsd);
    if (sort === "m2-desc") sorted.sort((a, b) => b.totalM2 - a.totalM2);
    if (sort === "destacadas") sorted.sort((a, b) => Number(!!b.featured) - Number(!!a.featured));
    return sorted;
  }, [properties, op, barrio, rooms, maxPrice, sort]);

  const dirty = op !== "todas" || barrio !== "todos" || rooms !== "todos" || maxPrice !== null;

  function reset() {
    setOp("todas");
    setBarrio("todos");
    setRooms("todos");
    setMaxPrice(null);
  }

  return (
    <div>
      {/* Filtros */}
      <div className="rounded-3xl border border-line bg-white p-4 sm:p-5">
        <div className="grid grid-cols-2 gap-4 lg:flex lg:flex-wrap lg:items-end">
          <div className="col-span-2 lg:col-auto">
            <Field label="Operación">
              <Segmented
                value={op}
                onChange={(v) => {
                  setOp(v);
                  setMaxPrice(null);
                }}
                options={[
                  { value: "todas", label: "Todas" },
                  { value: "alquiler", label: "Alquiler" },
                  { value: "venta", label: "Venta" },
                ]}
              />
            </Field>
          </div>

          <div className="col-span-2 lg:col-auto">
            <Field label="Ambientes">
              <Segmented
                value={rooms}
                onChange={setRooms}
                options={[
                  { value: "todos", label: "Todos" },
                  { value: "1", label: "1" },
                  { value: "2", label: "2" },
                  { value: "3", label: "3" },
                  { value: "4+", label: "4+" },
                ]}
              />
            </Field>
          </div>

          <Field label="Barrio">
            <Select value={barrio} onChange={(v) => setBarrio(v as typeof barrio)}>
              <option value="todos">Todos</option>
              {neighborhoods.map((n) => (
                <option key={n} value={n}>
                  {n}
                </option>
              ))}
            </Select>
          </Field>

          <Field label="Precio">
            <Select
              value={maxPrice === null ? "" : String(maxPrice)}
              onChange={(v) => setMaxPrice(v ? Number(v) : null)}
              disabled={op === "todas"}
              title={op === "todas" ? "Elegí alquiler o venta para filtrar por precio" : undefined}
            >
              <option value="">{op === "todas" ? "Elegí operación" : "Cualquiera"}</option>
              {op !== "todas" &&
                PRICE_STEPS[op].map((s) => (
                  <option key={s.value} value={s.value}>
                    {s.label}
                  </option>
                ))}
            </Select>
          </Field>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between gap-4 text-sm text-muted">
        <div className="flex items-center gap-4">
          <p aria-live="polite">
            {results.length === 1 ? "1 propiedad" : `${results.length} propiedades`}
          </p>
          {dirty && (
            <button type="button" onClick={reset} className="underline-offset-4 transition hover:text-ink hover:underline">
              Limpiar filtros
            </button>
          )}
        </div>
        <label className="flex items-center gap-2">
          <span className="hidden sm:inline">Ordenar por</span>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as Sort)}
            aria-label="Ordenar"
            className="cursor-pointer bg-transparent font-medium text-ink focus:outline-none"
          >
            <option value="destacadas">Destacadas</option>
            <option value="precio-asc">Menor precio</option>
            <option value="precio-desc">Mayor precio</option>
            <option value="m2-desc">Más metros</option>
          </select>
        </label>
      </div>

      {results.length > 0 ? (
        <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((p, i) => (
            <PropertyCard key={p.slug} property={p} priority={i < 3} />
          ))}
        </div>
      ) : (
        <div className="mt-4 rounded-3xl border border-dashed border-line px-6 py-16 text-center">
          <p className="text-3xl" aria-hidden>
            🔎
          </p>
          <p className="mt-3 font-medium">No encontramos propiedades con esos filtros.</p>
          <p className="mt-1 text-sm text-muted">Probá ampliar el precio o cambiar de barrio.</p>
          <button
            type="button"
            onClick={reset}
            className="mt-6 rounded-full border border-ink px-5 py-2 text-sm font-medium transition hover:bg-ink hover:text-paper"
          >
            Ver todas
          </button>
        </div>
      )}
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2">
      <span className="eyebrow !tracking-[0.18em]">{label}</span>
      {children}
    </div>
  );
}

function Segmented<T extends string>({
  value,
  onChange,
  options,
}: {
  value: T;
  onChange: (v: T) => void;
  options: { value: T; label: string }[];
}) {
  return (
    <div role="radiogroup" className="inline-flex w-full rounded-full bg-sand p-1 sm:w-auto">
      {options.map((o) => {
        const active = o.value === value;
        return (
          <button
            key={o.value}
            type="button"
            role="radio"
            aria-checked={active}
            onClick={() => onChange(o.value)}
            className={`flex-1 rounded-full px-4 py-2 text-sm transition sm:flex-none ${
              active ? "bg-white font-medium text-ink shadow-sm" : "text-muted hover:text-ink"
            }`}
          >
            {o.label}
          </button>
        );
      })}
    </div>
  );
}

function Select({
  value,
  onChange,
  children,
  disabled,
  title,
}: {
  value: string;
  onChange: (v: string) => void;
  children: React.ReactNode;
  disabled?: boolean;
  title?: string;
}) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
        title={title}
        className="h-10 w-full appearance-none rounded-full border border-line bg-white pl-4 pr-10 text-sm text-ink transition hover:border-ink/40 focus:border-ink focus:outline-none disabled:cursor-not-allowed disabled:text-muted/70 lg:min-w-48"
      >
        {children}
      </select>
      <svg
        viewBox="0 0 24 24"
        aria-hidden
        className="pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2 text-muted"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.75}
      >
        <path d="m6 9 6 6 6-6" />
      </svg>
    </div>
  );
}
