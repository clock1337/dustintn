"use client";

import { useState } from "react";

interface AddonDownloadButtonProps {
  slug: string;
  fileName: string;
  initialCount: number;
  label?: string;
  comingSoon?: boolean;
}

export default function AddonDownloadButton({
  slug,
  fileName,
  initialCount,
  label = "Download",
  comingSoon = false,
}: AddonDownloadButtonProps) {
  const [count, setCount] = useState(initialCount);

  if (comingSoon) {
    return (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
        <span
          className="pa-dl-btn"
          style={{ opacity: 0.6, cursor: "default", pointerEvents: "none" }}
        >
          Coming Soon
        </span>
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
          Download available soon
        </p>
      </div>
    );
  }

  const handleClick = async () => {
    setCount((c) => c + 1);
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
        {label}
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
