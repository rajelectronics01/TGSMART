'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { CATEGORIES } from '@/data/products';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    category: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setErrorMessage('Please fill in your name, email address, and enquiry message.');
      return;
    }

    setStatus('loading');
    // Simulate safe API submission
    setTimeout(() => {
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        category: '',
        message: ''
      });
    }, 800);
  };

  return (
    <div className="bg-white border border-[#E5E5E5] rounded-lg p-6 sm:p-8 shadow-xs">
      {status === 'success' ? (
        <div className="py-8 text-center space-y-3 animate-in fade-in duration-300">
          <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
          <h3 className="text-xl font-semibold text-neutral-900">Message Received</h3>
          <p className="text-sm text-neutral-600 max-w-md mx-auto leading-relaxed">
            Thank you for reaching out to TG SMART. Our customer support team will review your enquiry and respond to your email or phone shortly.
          </p>
          <button
            onClick={() => setStatus('idle')}
            className="mt-4 px-5 py-2 text-xs font-medium text-neutral-900 border border-neutral-300 hover:border-black rounded transition-colors"
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {status === 'error' && (
            <div className="p-3 rounded bg-red-50 border border-red-200 text-xs text-red-700 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1.5">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Ramesh Kumar"
                className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#E5E5E5] rounded focus:border-black focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1.5">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="ramesh@example.com"
                className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#E5E5E5] rounded focus:border-black focus:outline-none transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="phone" className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1.5">
                Phone Number (Optional)
              </label>
              <input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+91 98765 43210"
                className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#E5E5E5] rounded focus:border-black focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label htmlFor="category" className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1.5">
                Product Category of Interest
              </label>
              <select
                id="category"
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#E5E5E5] rounded focus:border-black focus:outline-none transition-colors text-neutral-700"
              >
                <option value="">Select a category...</option>
                {CATEGORIES.map((c) => (
                  <option key={c.slug} value={c.name}>
                    {c.name}
                  </option>
                ))}
                <option value="General Support">General Support / Enquiry</option>
                <option value="Warranty / Service">Warranty & Service</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1.5">
              Enquiry Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              required
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="How can we assist you with TG SMART appliances or order support?"
              className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#E5E5E5] rounded focus:border-black focus:outline-none transition-colors"
            />
          </div>

          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#111111] hover:bg-[#333333] text-white text-sm font-medium rounded transition-colors disabled:opacity-50"
          >
            {status === 'loading' ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Sending Enquiry...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Submit Enquiry</span>
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
