"use client";

import { useState } from "react";

interface AddonEmailSignupProps {
  slug: string;
  addonName: string;
}

export default function AddonEmailSignup({ slug, addonName }: AddonEmailSignupProps) {
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    try {
      const res = await fetch("/api/ascension/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug, email }),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong");
      }
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to sign up");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div
        style={{
          background: "var(--pa-bg-card)",
          border: "1px solid var(--pa-border-bright)",
          borderLeft: "3px solid var(--pa-gold)",
          padding: "24px 28px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-cinzel), serif",
            color: "var(--pa-gold-lt)",
            fontSize: 16,
            letterSpacing: "0.06em",
            marginBottom: 6,
          }}
        >
          ✓ You&apos;re on the list
        </p>
        <p style={{ fontSize: 14, color: "var(--pa-text-dim)", margin: 0 }}>
          We&apos;ll email you when {addonName} updates.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        background: "var(--pa-bg-card)",
        border: "1px solid var(--pa-border)",
        borderLeft: "3px solid var(--pa-gold)",
        padding: "24px 28px",
      }}
    >
      <p
        style={{
          fontFamily: "var(--font-cinzel), serif",
          color: "var(--pa-gold-lt)",
          fontSize: 14,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          marginBottom: 6,
        }}
      >
        Get update notifications
      </p>
      <p style={{ fontSize: 14, color: "var(--pa-text-dim)", marginBottom: 16 }}>
        Drop your email and we&apos;ll send you a quick note when a new version of{" "}
        {addonName} ships.
      </p>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          className="pa-input"
          style={{ flex: 1, minWidth: 200 }}
          disabled={submitting}
        />
        <button
          type="submit"
          disabled={submitting}
          className="pa-dl-btn"
          style={{ padding: "12px 24px", fontSize: 12 }}
        >
          {submitting ? "..." : "Notify Me"}
        </button>
      </div>
      {error && (
        <p
          style={{
            color: "#ff8888",
            fontSize: 13,
            marginTop: 12,
            fontFamily: "var(--font-tech-mono), monospace",
          }}
        >
          {error}
        </p>
      )}
    </form>
  );
}
