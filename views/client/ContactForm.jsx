'use client'

import { useState } from 'react'
import { useLanguage } from '@/views/client/LanguageProvider'

export function ContactForm() {
  const { locale } = useLanguage()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [status, setStatus] = useState('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const content = {
    en: {
      name: 'Name',
      email: 'Email',
      phone: 'Phone (Optional)',
      message: 'Message',
      submit: 'Send Message',
      success: 'Thank you! Your message has been sent successfully.',
      error: 'There was an error sending your message. Please try again.',
      required: 'This field is required',
      invalidEmail: 'Please enter a valid email address',
    },
    hi: {
      name: 'नाम',
      email: 'ईमेल',
      phone: 'फोन (वैकल्पिक)',
      message: 'संदेश',
      submit: 'संदेश भेजें',
      success: 'धन्यवाद! आपका संदेश सफलतापूर्वक भेज दिया गया है।',
      error: 'आपका संदेश भेजने में त्रुटि हुई। कृपया पुनः प्रयास करें।',
      required: 'यह फ़ील्ड आवश्यक है',
      invalidEmail: 'कृपया एक वैध ईमेल पता दर्ज करें',
    },
    mr: {
      name: 'नाव',
      email: 'ईमेल',
      phone: 'फोन (पर्यायी)',
      message: 'संदेश',
      submit: 'संदेश पाठवा',
      success: 'धन्यवाद! तुमचा संदेश यशस्वीरित्या पाठवला गेला आहे.',
      error: 'तुमचा संदेश पाठवताना त्रुटी आली. कृपया पुन्हा प्रयत्न करा.',
      required: 'हे फील्ड आवश्यक आहे',
      invalidEmail: 'कृपया वैध ईमेल पत्ता प्रविष्ट करा',
    },
  }

  const t = content[locale]

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error')
      setErrorMessage(t.required)
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setStatus('error')
      setErrorMessage(t.invalidEmail)
      return
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Failed to submit form')
      }

      setStatus('success')
      setFormData({ name: '', email: '', phone: '', message: '' })
    } catch (error) {
      setStatus('error')
      setErrorMessage(t.error)
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
        <div className="text-4xl mb-4 text-green-600">✓</div>
        <p className="text-charcoal">{t.success}</p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-6 px-6 py-2 bg-temple-orange text-white rounded-lg font-medium hover:bg-temple-orange/90 transition-all"
        >
          Send Another Message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-2">
          {t.name} <span className="text-temple-orange">*</span>
        </label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
          className="w-full px-4 py-2 border border-charcoal/20 bg-white rounded focus:outline-none focus:ring-2 focus:ring-temple-orange focus:border-transparent transition-all text-charcoal placeholder-charcoal/40"
          placeholder={t.name}
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-2">
          {t.email} <span className="text-temple-orange">*</span>
        </label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
          className="w-full px-4 py-2 border border-charcoal/20 bg-white rounded focus:outline-none focus:ring-2 focus:ring-temple-orange focus:border-transparent transition-all text-charcoal placeholder-charcoal/40"
          placeholder={t.email}
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-2">
          {t.message} <span className="text-temple-orange">*</span>
        </label>
        <textarea
          id="message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          required
          rows={5}
          className="w-full px-4 py-2 border border-charcoal/20 bg-white rounded focus:outline-none focus:ring-2 focus:ring-temple-orange focus:border-transparent transition-all resize-vertical text-charcoal placeholder-charcoal/40"
          placeholder={t.message}
        />
      </div>

      {status === 'error' && errorMessage && (
        <div className="bg-red-50 border-l-4 border-red-400 p-3 text-red-800 text-sm rounded">
          {errorMessage}
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full py-3 bg-temple-orange text-white rounded font-medium hover:bg-temple-orange/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed mt-6"
      >
        {status === 'loading' ? 'Sending...' : t.submit}
      </button>
    </form>
  )
}

