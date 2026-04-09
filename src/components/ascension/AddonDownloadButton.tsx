"use client";

import { useState } from "react";

interface AddonDownloadButtonProps {
  slug: string;
  fileName: string;
  initialCount: number;
  label?: string;
}

export default function AddonDownloadButton({
  slug,
  fileName,
  initialCount,
  label = "Download",
}: AddonDownloadButtonProps) {
  const [count, setCount] = useState(initialCount);

  const handleClick = async () => {
    // Optimistic increment
    setCount((c) => c + 1);

    // Fire-and-forget the counter increment
    try {
      const res = await fetch("/api/ascension/download", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug }),
      });
      if (res.ok) {
        const data = await res.json();
        if (typeof data.count === "number") {
          setCount(data.count);
        }
      }
    } catch {
      // Silent fail — the file download still works via the href
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
      <a
        href={`/downloads/ascension/${fileName}`}
        download
        onClick={handleClick}
        className="pa-dl-btn"
      >
        ⬇ {label}
      </a>
      <p
        style={{
          fontFamily: "var(--font-tech-mono), monospace",
          fontSize: 11,
          color: "var(--pa-text-dim)",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          margin: 0,
        }}
      >
        {count.toLocaleString()} {count === 1 ? "download" : "downloads"}
      </p>
    </div>
  );
}
