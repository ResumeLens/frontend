'use client'
import { useState } from 'react';

type AuthType = 'login' | 'signup';

interface AuthFormProps {
  type: AuthType;
  onSubmit: (...args: any[]) => void;
}

export default function AuthForm({ type, onSubmit }: AuthFormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (type === 'signup') {
      onSubmit(email, password, name);
    } else {
      onSubmit(email, password);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-sm mx-auto mt-10 p-6 bg-white shadow-md rounded-xl space-y-4"
    >
      <h2 className="text-xl font-bold text-center">
        {type === 'signup' ? 'Sign Up' : 'Log In'}
      </h2>

      {type === 'signup' && (
        <input
          className="w-full p-2 border border-gray-300 rounded"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      )}

      <input
        className="w-full p-2 border border-gray-300 rounded"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        className="w-full p-2 border border-gray-300 rounded"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        type="submit"
        className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"
      >
        {type === 'signup' ? 'Create Account' : 'Log In'}
      </button>
    </form>
  );
}
