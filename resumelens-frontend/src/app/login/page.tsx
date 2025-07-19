'use client'

import { useState } from 'react'

export default function LoginPage() {
  const [form, setForm] = useState({ email: '', password: '' })
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const res = await fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify(form),
    })

    const data = await res.json()
    if (data.success) {
      setMessage(`Welcome, ${data.name}!`)
    } else {
      setMessage(data.message || 'Login failed')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="p-4 space-y-2">
      <input placeholder="Email" onChange={e => setForm({ ...form, email: e.target.value })} className="border p-2 w-full" />
      <input placeholder="Password" type="password" onChange={e => setForm({ ...form, password: e.target.value })} className="border p-2 w-full" />
      <button className="bg-blue-600 text-white px-4 py-2">Login</button>
      <p>{message}</p>
    </form>
  )
}
