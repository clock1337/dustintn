'use client';

import { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function ContactForm() {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [contactSubmitting, setContactSubmitting] = useState(false);
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [contactError, setContactError] = useState('');

  const handleContactChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setContactForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setContactSubmitting(true);
    setContactError('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: contactForm.name,
          email: contactForm.email,
          message: `[Subject: ${contactForm.subject || 'N/A'}]\n\n${contactForm.message}`,
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Something went wrong');
      }

      setContactSubmitted(true);
    } catch (err) {
      setContactError(
        err instanceof Error ? err.message : 'Failed to send. Please try again.'
      );
    } finally {
      setContactSubmitting(false);
    }
  };

  if (contactSubmitted) {
    return (
      <div className="bg-dark-gray p-8 lg:p-10 rounded-2xl text-center py-16">
        <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-10 h-10 text-accent" />
        </div>
        <h3 className="text-2xl font-semibold mb-4">Message Sent!</h3>
        <p className="text-white/50 mb-8">
          Thank you for reaching out. We&apos;ll be in touch soon.
        </p>
        <button
          onClick={() => {
            setContactSubmitted(false);
            setContactForm({ name: '', email: '', subject: '', message: '' });
          }}
          className="btn-pill btn-pill-outline"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleContactSubmit}
      className="space-y-6 bg-dark-gray p-8 lg:p-10 rounded-2xl"
    >
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label className="text-xs text-white/40 uppercase tracking-wider mb-2 block">
            Name *
          </label>
          <input
            type="text"
            name="name"
            value={contactForm.name}
            onChange={handleContactChange}
            required
            placeholder="John Doe"
            className="w-full px-0 py-3 bg-transparent border-b border-white/10 text-white placeholder:text-white/20 focus:border-accent focus:outline-none transition-colors"
          />
        </div>
        <div>
          <label className="text-xs text-white/40 uppercase tracking-wider mb-2 block">
            Email *
          </label>
          <input
            type="email"
            name="email"
            value={contactForm.email}
            onChange={handleContactChange}
            required
            placeholder="john@example.com"
            className="w-full px-0 py-3 bg-transparent border-b border-white/10 text-white placeholder:text-white/20 focus:border-accent focus:outline-none transition-colors"
          />
        </div>
      </div>
      <div>
        <label className="text-xs text-white/40 uppercase tracking-wider mb-2 block">
          Subject
        </label>
        <input
          type="text"
          name="subject"
          value={contactForm.subject}
          onChange={handleContactChange}
          placeholder="Project inquiry"
          className="w-full px-0 py-3 bg-transparent border-b border-white/10 text-white placeholder:text-white/20 focus:border-accent focus:outline-none transition-colors"
        />
      </div>
      <div>
        <label className="text-xs text-white/40 uppercase tracking-wider mb-2 block">
          Message *
        </label>
        <textarea
          name="message"
          value={contactForm.message}
          onChange={handleContactChange}
          required
          rows={4}
          placeholder="Tell us about your project..."
          className="w-full px-0 py-3 bg-transparent border-b border-white/10 text-white placeholder:text-white/20 focus:border-accent focus:outline-none transition-colors resize-none"
        />
      </div>

      {contactError && (
        <p className="text-red-400 text-sm bg-red-400/10 border border-red-400/20 rounded-xl px-4 py-3">
          {contactError}
        </p>
      )}

      <button
        type="submit"
        disabled={contactSubmitting}
        className="btn-pill btn-pill-primary w-full justify-center mt-4 group"
      >
        {contactSubmitting ? (
          <>
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
            Sending...
          </>
        ) : (
          <>
            Send Message
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </>
        )}
      </button>
    </form>
  );
}
