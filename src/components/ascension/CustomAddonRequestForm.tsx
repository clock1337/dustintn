"use client";

import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  realm: string;
  characterClass: string;
  profession: string;
  environment: string;
  addonIdea: string;
  whatItShouldDo: string;
  inspiration: string;
}

const INITIAL: FormData = {
  name: "",
  email: "",
  realm: "Bronzebeard",
  characterClass: "",
  profession: "",
  environment: "Both",
  addonIdea: "",
  whatItShouldDo: "",
  inspiration: "",
};

export default function CustomAddonRequestForm() {
  const [form, setForm] = useState<FormData>(INITIAL);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    try {
      const res = await fetch("/api/ascension/request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong");
      }
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to send request");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="pa-desc" style={{ textAlign: "center", padding: "48px 36px" }}>
        <div style={{ fontSize: 48, marginBottom: 16 }}>⚔️</div>
        <h3
          style={{
            fontFamily: "var(--font-cinzel), serif",
            color: "var(--pa-gold-lt)",
            fontSize: 24,
            marginBottom: 12,
            letterSpacing: "0.06em",
          }}
        >
          Request Received
        </h3>
        <p style={{ color: "var(--pa-text-dim)", fontSize: 16 }}>
          Longshaft will read your request and get back to you. The PenFifteen Club™
          appreciates your patience.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setForm(INITIAL);
          }}
          className="pa-dl-btn"
          style={{ marginTop: 28, padding: "12px 28px", fontSize: 12 }}
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="pa-desc" style={{ borderLeft: "3px solid var(--pa-gold)" }}>
      <div style={{ display: "grid", gap: 24 }}>
        {/* Identity row */}
        <div style={{ display: "grid", gap: 20, gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
          <div>
            <label className="pa-label" htmlFor="name">Your Name *</label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="Longshaft"
              className="pa-input"
              disabled={submitting}
            />
          </div>
          <div>
            <label className="pa-label" htmlFor="email">Email *</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="pa-input"
              disabled={submitting}
            />
          </div>
        </div>

        {/* Character row */}
        <div style={{ display: "grid", gap: 20, gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))" }}>
          <div>
            <label className="pa-label" htmlFor="realm">Realm</label>
            <select
              id="realm"
              name="realm"
              value={form.realm}
              onChange={handleChange}
              className="pa-input"
              disabled={submitting}
            >
              <option value="Bronzebeard">Bronzebeard (class-based)</option>
              <option value="Arena 52">Arena 52 (classless)</option>
              <option value="Both">Both / Either</option>
            </select>
          </div>
          <div>
            <label className="pa-label" htmlFor="characterClass">Class / Build</label>
            <input
              id="characterClass"
              name="characterClass"
              type="text"
              value={form.characterClass}
              onChange={handleChange}
              placeholder="Hunter, Mage, custom..."
              className="pa-input"
              disabled={submitting}
            />
          </div>
          <div>
            <label className="pa-label" htmlFor="profession">Profession</label>
            <input
              id="profession"
              name="profession"
              type="text"
              value={form.profession}
              onChange={handleChange}
              placeholder="Mining, Herbalism..."
              className="pa-input"
              disabled={submitting}
            />
          </div>
          <div>
            <label className="pa-label" htmlFor="environment">Environment</label>
            <select
              id="environment"
              name="environment"
              value={form.environment}
              onChange={handleChange}
              className="pa-input"
              disabled={submitting}
            >
              <option value="PvP">PvP</option>
              <option value="PvE">PvE</option>
              <option value="Both">Both</option>
              <option value="RP">RP / Quality of Life</option>
            </select>
          </div>
        </div>

        {/* Idea */}
        <div>
          <label className="pa-label" htmlFor="addonIdea">Addon Title / Idea *</label>
          <input
            id="addonIdea"
            name="addonIdea"
            type="text"
            required
            value={form.addonIdea}
            onChange={handleChange}
            placeholder="e.g. PotionPilot — auto-suggests potions in combat"
            className="pa-input"
            disabled={submitting}
          />
        </div>

        <div>
          <label className="pa-label" htmlFor="whatItShouldDo">What should it do? *</label>
          <textarea
            id="whatItShouldDo"
            name="whatItShouldDo"
            required
            rows={6}
            value={form.whatItShouldDo}
            onChange={handleChange}
            placeholder="Describe the problem you want solved, how you want the addon to behave, what triggers it, what the UI should look like..."
            className="pa-input"
            style={{ resize: "vertical", fontFamily: "var(--font-crimson), serif" }}
            disabled={submitting}
          />
        </div>

        <div>
          <label className="pa-label" htmlFor="inspiration">Similar addons / inspiration</label>
          <textarea
            id="inspiration"
            name="inspiration"
            rows={3}
            value={form.inspiration}
            onChange={handleChange}
            placeholder="Anything you've seen that's close to what you want? Screenshots, links, addon names..."
            className="pa-input"
            style={{ resize: "vertical", fontFamily: "var(--font-crimson), serif" }}
            disabled={submitting}
          />
        </div>

        {error && (
          <p
            style={{
              color: "#ff8888",
              fontSize: 14,
              fontFamily: "var(--font-tech-mono), monospace",
              padding: "12px 16px",
              border: "1px solid rgba(255, 100, 100, 0.3)",
              background: "rgba(255, 100, 100, 0.05)",
            }}
          >
            {error}
          </p>
        )}

        <div style={{ display: "flex", justifyContent: "center", marginTop: 8 }}>
          <button type="submit" disabled={submitting} className="pa-dl-btn">
            {submitting ? "Sending..." : "⚔ Submit Request"}
          </button>
        </div>
      </div>
    </form>
  );
}
