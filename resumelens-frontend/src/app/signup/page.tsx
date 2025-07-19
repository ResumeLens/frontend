'use client'

import { useState } from 'react'

export default function SignupPage() {
  const [form, setForm] = useState({ name: '', email: '', password: '' })
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const res = await fetch('/api/signup', {
      method: 'POST',
      body: JSON.stringify(form),
    })

    const data = await res.json()
    setMessage(data.message || (data.success ? 'Signup successful!' : 'Signup failed'))
  }

  return (
    <form onSubmit={handleSubmit} className="p-4 space-y-2">
      <input placeholder="Name" onChange={e => setForm({ ...form, name: e.target.value })} className="border p-2 w-full" />
      <input placeholder="Email" onChange={e => setForm({ ...form, email: e.target.value })} className="border p-2 w-full" />
      <input placeholder="Password" type="password" onChange={e => setForm({ ...form, password: e.target.value })} className="border p-2 w-full" />
      <button className="bg-green-600 text-white px-4 py-2">Sign Up</button>
      <p>{message}</p>
    </form>
  )
}
