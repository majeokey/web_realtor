import Link from "next/link";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link
      href="/"
      className={`text-[17px] font-semibold tracking-tight ${light ? "text-white" : "text-ink"}`}
      aria-label="Palermo Living, inicio"
    >
      Palermo <span className="accent-serif text-[20px]">Living</span>
    </Link>
  );
}
