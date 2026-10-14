import type { CSSProperties } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProperty, getRelated, properties } from "@/data/properties";
import { formatArs, formatNumber, priceLabel, roomsLabel } from "@/lib/format";
import { DetailNav } from "@/components/detail/DetailNav";
import { Hero } from "@/components/detail/Hero";
import { KeyFacts } from "@/components/detail/KeyFacts";
import { LoveReasons } from "@/components/detail/LoveReasons";
import { Marquee } from "@/components/detail/Marquee";
import { Feature } from "@/components/detail/Feature";
import { Gallery } from "@/components/detail/Gallery";
import { Spaces } from "@/components/detail/Spaces";
import { Amenities } from "@/components/detail/Amenities";
import { Location } from "@/components/detail/Location";
import { Pricing } from "@/components/detail/Pricing";
import { FinalCta } from "@/components/detail/FinalCta";
import { Related } from "@/components/detail/Related";
import { StickyPriceBar } from "@/components/detail/StickyPriceBar";
import { SiteFooter } from "@/components/SiteFooter";

type Params = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return properties.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const p = getProperty(slug);
  if (!p) return {};

  const op = p.operation === "alquiler" ? "Alquiler" : "Venta";
  const title = `${op} ${roomsLabel(p.rooms).toLowerCase()} en ${p.neighborhood} · ${p.address.split(",")[0]}`;
  const description = `${p.headline.lead} ${p.headline.accent} ${formatNumber(p.totalM2)} m², piso ${p.floor}, orientación ${p.orientation.toLowerCase()}. ${priceLabel(p)} + expensas ${formatArs(p.expensasArs)}. ${p.availability}.`;

  return {
    title,
    description,
    openGraph: { title, description, images: [{ url: p.heroImage.src, width: 2000 }] },
    twitter: { card: "summary_large_image", title, description, images: [p.heroImage.src] },
  };
}

export default async function PropertyPage({ params }: Params) {
  const { slug } = await params;
  const property = getProperty(slug);
  if (!property) notFound();

  return (
    <div style={{ "--accent": property.accent } as CSSProperties}>
      <DetailNav property={property} />
      <main>
        <Hero property={property} />
        <KeyFacts property={property} />
        <LoveReasons property={property} />
        <Marquee words={property.marquee} />
        <Feature property={property} />
        <Gallery photos={property.gallery} />
        <Spaces property={property} />
        <Amenities property={property} />
        <Location property={property} />
        <Pricing property={property} />
        <FinalCta property={property} />
        <Related properties={getRelated(property)} />
      </main>
      <SiteFooter />
      <StickyPriceBar property={property} />
      <JsonLd property={property} />
    </div>
  );
}

/** Datos estructurados para SEO (schema.org) */
function JsonLd({ property: p }: { property: NonNullable<ReturnType<typeof getProperty>> }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "RealEstateListing",
    name: p.cardTitle,
    description: p.subtitle,
    image: p.gallery.map((g) => g.src),
    offers: {
      "@type": "Offer",
      price: p.priceUsd,
      priceCurrency: "USD",
      businessFunction: p.operation === "alquiler" ? "http://purl.org/goodrelations/v1#LeaseOut" : "http://purl.org/goodrelations/v1#Sell",
    },
    address: { "@type": "PostalAddress", streetAddress: p.address, addressLocality: p.neighborhood, addressRegion: "CABA", addressCountry: "AR" },
    floorSize: { "@type": "QuantitativeValue", value: p.totalM2, unitCode: "MTK" },
    numberOfRooms: p.rooms,
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
