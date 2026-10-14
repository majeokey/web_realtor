import type { Accented } from "@/data/properties";

export function AccentTitle({ title, className = "" }: { title: Accented; className?: string }) {
  return (
    <span className={className}>
      {title.lead} <span className="accent-serif">{title.accent}</span>
    </span>
  );
}
