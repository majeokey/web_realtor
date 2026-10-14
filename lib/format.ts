import type { Property } from "@/data/properties";

const nf = new Intl.NumberFormat("es-AR", { maximumFractionDigits: 2 });

export const formatNumber = (n: number) => nf.format(n);
export const formatUsd = (n: number) => `USD ${nf.format(n)}`;
export const formatArs = (n: number) => `ARS ${nf.format(n)}`;
export const formatM2 = (n: number) => `${nf.format(n)} m²`;

export const operationLabel = (p: Property) => (p.operation === "alquiler" ? "Alquiler" : "Venta");

export const priceLabel = (p: Property) =>
  p.operation === "alquiler" ? `${formatUsd(p.priceUsd)}/mes` : formatUsd(p.priceUsd);

export const roomsLabel = (rooms: number) => (rooms === 1 ? "Monoambiente" : `${rooms} amb.`);

export const usdPerM2 = (p: Property) => Math.round(p.priceUsd / p.totalM2);
