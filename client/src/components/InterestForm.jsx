import { useState } from 'react'
import './InterestForm.css'

function InterestForm({ style, onClose }) {
  const [form, setForm] = useState({ name: '', phone: '', style: style, notes: '' })
  const [status, setStatus] = useState(null)

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('http://localhost:5000/interest', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      if (res.ok) setStatus('success')
      else        setStatus('error')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') return (
    <div className="interest-form__success">
      <p>Thank you! We will be in touch soon.</p>
      <button className="btn btn--primary" onClick={onClose}>Close</button>
    </div>
  )

  return (
    <div className="interest-form">
      <input
        name="name"
        placeholder="Your name"
        value={form.name}
        onChange={handleChange}
      />
      <input
        name="phone"
        placeholder="Your phone number"
        value={form.phone}
        onChange={handleChange}
      />
      <input
        name="style"
        value={form.style}
        readOnly
        className="interest-form__readonly"
      />
      <textarea
        name="notes"
        placeholder="Any notes or special requests?"
        value={form.notes}
        onChange={handleChange}
        rows={3}
      />
      <button
        className="btn btn--primary"
        onClick={handleSubmit}
        disabled={status === 'loading'}
      >
        {status === 'loading' ? 'Sending...' : 'Send interest'}
      </button>
      {status === 'error' && (
        <p className="interest-form__error">Something went wrong. Please try again.</p>
      )}
    </div>
  )
}

export default InterestForm