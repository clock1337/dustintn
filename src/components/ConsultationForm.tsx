'use client';

import { useState } from 'react';
import { PhoneCall, CheckCircle2 } from 'lucide-react';

const helpTopics = [
  'Getting my business online',
  'Improving my search rankings / SEO',
  'Website maintenance & updates',
  'Social media strategy',
  'Monthly webmaster services',
  'GEO & AI search visibility',
  'General digital guidance',
  'Other',
];

const contactMethods = ['Google Meet', 'Phone Call', 'Text', 'Either works'];

export default function ConsultationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    business: '',
    website: '',
    helpTopic: '',
    contactMethod: '',
    description: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const res = await fetch('/api/consultation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Something went wrong');
      }

      setIsSubmitted(true);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : 'Failed to send. Please try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-16">
        <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-10 h-10 text-accent" />
        </div>
        <h3 className="text-2xl font-semibold mb-4">You&apos;re All Set!</h3>
        <p className="text-white/50 mb-3">
          Thanks for reaching out. We&apos;ll be in touch within 24 hours to
          schedule your free call.
        </p>
        <p className="text-white/40 text-sm mb-8">
          Check your inbox for a confirmation.
        </p>
        <button
          onClick={() => {
            setIsSubmitted(false);
            setFormData({
              name: '',
              email: '',
              phone: '',
              business: '',
              website: '',
              helpTopic: '',
              contactMethod: '',
              description: '',
            });
          }}
          className="btn-pill btn-pill-outline"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="text-xs text-white/40 uppercase tracking-wider mb-2 block">
            Name *
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="John Doe"
            className="w-full px-4 py-3 bg-dark-gray border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:border-accent focus:outline-none transition-colors"
          />
        </div>
        <div>
          <label className="text-xs text-white/40 uppercase tracking-wider mb-2 block">
            Email *
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="john@example.com"
            className="w-full px-4 py-3 bg-dark-gray border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:border-accent focus:outline-none transition-colors"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="text-xs text-white/40 uppercase tracking-wider mb-2 block">
            Phone
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="(615) 788-2453"
            className="w-full px-4 py-3 bg-dark-gray border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:border-accent focus:outline-none transition-colors"
          />
        </div>
        <div>
          <label className="text-xs text-white/40 uppercase tracking-wider mb-2 block">
            Business Name
          </label>
          <input
            type="text"
            name="business"
            value={formData.business}
            onChange={handleChange}
            placeholder="Your Business"
            className="w-full px-4 py-3 bg-dark-gray border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:border-accent focus:outline-none transition-colors"
          />
        </div>
      </div>

      <div>
        <label className="text-xs text-white/40 uppercase tracking-wider mb-2 block">
          Current Website (if any)
        </label>
        <input
          type="text"
          name="website"
          value={formData.website}
          onChange={handleChange}
          placeholder="www.yourbusiness.com"
          className="w-full px-4 py-3 bg-dark-gray border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:border-accent focus:outline-none transition-colors"
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="text-xs text-white/40 uppercase tracking-wider mb-2 block">
            What do you need help with?
          </label>
          <select
            name="helpTopic"
            value={formData.helpTopic}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-dark-gray border border-white/10 rounded-xl text-white focus:border-accent focus:outline-none transition-colors appearance-none cursor-pointer"
          >
            <option value="" className="bg-dark-gray">
              Select a topic
            </option>
            {helpTopics.map((topic, idx) => (
              <option key={idx} value={topic} className="bg-dark-gray">
                {topic}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="text-xs text-white/40 uppercase tracking-wider mb-2 block">
            Preferred Contact
          </label>
          <select
            name="contactMethod"
            value={formData.contactMethod}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-dark-gray border border-white/10 rounded-xl text-white focus:border-accent focus:outline-none transition-colors appearance-none cursor-pointer"
          >
            <option value="" className="bg-dark-gray">
              Select method
            </option>
            {contactMethods.map((method, idx) => (
              <option key={idx} value={method} className="bg-dark-gray">
                {method}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="text-xs text-white/40 uppercase tracking-wider mb-2 block">
          Tell us about your situation
        </label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows={4}
          placeholder="What's going on with your business online? What would you like to improve? Any specific questions you'd like answered?"
          className="w-full px-4 py-3 bg-dark-gray border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:border-accent focus:outline-none transition-colors resize-none"
        />
      </div>

      {error && (
        <p className="text-red-400 text-sm bg-red-400/10 border border-red-400/20 rounded-xl px-4 py-3">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-pill btn-pill-primary w-full justify-center group"
      >
        {isSubmitting ? (
          <>
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
            Sending...
          </>
        ) : (
          <>
            Book My Free Call
            <PhoneCall className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </>
        )}
      </button>

      <p className="text-center text-xs text-white/30">
        We&apos;ll never share your info. No spam, ever.
      </p>
    </form>
  );
}
