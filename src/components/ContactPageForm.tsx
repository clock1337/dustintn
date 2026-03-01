'use client';

import { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

const serviceOptions = [
  'New Website Design',
  'Website Redesign',
  'E-commerce Development',
  'SEO Services',
  'Brand Identity',
  'Digital Marketing',
  'Website Maintenance',
  'Other',
];

export default function ContactPageForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const res = await fetch('/api/contact', {
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

  if (isSubmitted) {
    return (
      <div className="text-center py-12">
        <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-10 h-10 text-accent" />
        </div>
        <h3 className="text-2xl font-semibold mb-4">Message Sent!</h3>
        <p className="text-white/50 mb-8">
          Thank you for reaching out. We&apos;ll be in touch soon.
        </p>
        <button
          onClick={() => {
            setIsSubmitted(false);
            setFormData({
              name: '',
              email: '',
              phone: '',
              company: '',
              service: '',
              budget: '',
              message: '',
            });
          }}
          className="btn-pill btn-pill-outline"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid sm:grid-cols-2 gap-6">
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

      <div className="grid sm:grid-cols-2 gap-6">
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
            Company
          </label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Your Company"
            className="w-full px-4 py-3 bg-dark-gray border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:border-accent focus:outline-none transition-colors"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label className="text-xs text-white/40 uppercase tracking-wider mb-2 block">
            Service Interested In
          </label>
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-dark-gray border border-white/10 rounded-xl text-white focus:border-accent focus:outline-none transition-colors appearance-none cursor-pointer"
          >
            <option value="" className="bg-dark-gray">
              Select a service
            </option>
            {serviceOptions.map((service, index) => (
              <option key={index} value={service} className="bg-dark-gray">
                {service}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="text-xs text-white/40 uppercase tracking-wider mb-2 block">
            Budget Range
          </label>
          <select
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-dark-gray border border-white/10 rounded-xl text-white focus:border-accent focus:outline-none transition-colors appearance-none cursor-pointer"
          >
            <option value="" className="bg-dark-gray">
              Select budget
            </option>
            <option value="under-5k" className="bg-dark-gray">
              Under $5,000
            </option>
            <option value="5k-10k" className="bg-dark-gray">
              $5,000 - $10,000
            </option>
            <option value="10k-25k" className="bg-dark-gray">
              $10,000 - $25,000
            </option>
            <option value="25k-plus" className="bg-dark-gray">
              $25,000+
            </option>
            <option value="not-sure" className="bg-dark-gray">
              Not Sure
            </option>
          </select>
        </div>
      </div>

      <div>
        <label className="text-xs text-white/40 uppercase tracking-wider mb-2 block">
          Message *
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          placeholder="Tell us about your project..."
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
            Send Message
            <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </>
        )}
      </button>
    </form>
  );
}
