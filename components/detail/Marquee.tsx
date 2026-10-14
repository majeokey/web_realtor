export function Marquee({ words }: { words: string[] }) {
  const row = [...words, ...words];
  return (
    <div className="overflow-hidden border-y border-line bg-sand/70 py-5" aria-hidden>
      <div className="flex w-max animate-marquee">
        {[0, 1].map((k) => (
          <div key={k} className="flex shrink-0 items-center">
            {row.map((w, i) => (
              <span key={`${k}-${i}`} className="flex items-center">
                <span className="px-6 font-serif text-3xl italic sm:text-4xl">{w}</span>
                <span className="text-lg text-[var(--accent)]">✺</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
