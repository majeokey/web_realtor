import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main className="container-x flex min-h-[60svh] flex-col items-start justify-center py-24">
        <p className="eyebrow">Error 404</p>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight">
          Esta propiedad <span className="accent-serif">ya voló.</span>
        </h1>
        <p className="mt-4 max-w-md text-lg text-muted">
          Puede que se haya alquilado o vendido. Mirá las que siguen disponibles.
        </p>
        <Link href="/" className="mt-8 rounded-full bg-ink px-6 py-3 font-medium text-paper transition hover:bg-ink/85">
          Ver propiedades
        </Link>
      </main>
      <SiteFooter />
    </>
  );
}
