import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import "@fontsource/instrument-serif/400.css";
import "@fontsource/instrument-serif/400-italic.css";
import "./globals.css";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Palermo Living · Propiedades seleccionadas en Palermo, Recoleta y Belgrano",
    template: "%s · Palermo Living",
  },
  description:
    "Departamentos, PH y pisos seleccionados en Palermo, Recoleta y Belgrano. Cada propiedad, contada como se merece.",
  openGraph: { siteName: site.name, locale: "es_AR", type: "website" },
};

export const viewport: Viewport = {
  themeColor: "#faf8f4",
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-AR" className={GeistSans.variable}>
      <body className="bg-paper font-sans text-ink antialiased">{children}</body>
    </html>
  );
}
