"use client";

import { useState } from "react";
import { ShareIcon } from "./Icons";

export function ShareButton({
  title,
  text,
  className = "",
  label = "Compartir",
}: {
  title: string;
  text?: string;
  className?: string;
  label?: string;
}) {
  const [copied, setCopied] = useState(false);

  async function share() {
    const url = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({ title, text, url });
        return;
      } catch {
        // El usuario canceló: no hacemos nada
        return;
      }
    }
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.prompt("Copiá el link:", url);
    }
  }

  return (
    <button
      type="button"
      onClick={share}
      className={`inline-flex items-center gap-2 transition ${className}`}
      aria-live="polite"
    >
      <ShareIcon />
      <span>{copied ? "¡Link copiado!" : label}</span>
    </button>
  );
}
