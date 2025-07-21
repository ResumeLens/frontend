'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input"
import { Toaster } from "~/components/ui/sonner"
import { toast } from "sonner"
import { Loader2Icon } from "lucide-react"
import { set } from 'zod/v4';

export default function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [organizationName, setOrganizationName] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  // const [message, setMessage] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          email, 
          password, 
          organization_name: organizationName 
        }),
      });
      const data = await res.json();

      if (res.ok) {
        // setMessage('Signup successful!');
        // router.push('/login');

        toast.success('Signup successful!');
        setStatus('success');
      } else {
        // setMessage(data.error || 'Signup failed.');
        toast.error(data.error || 'Signup failed.');
        setStatus('error');
      }
    } catch (error) {
      // setMessage('Network error.');
      toast.error('Network error.');
      setStatus('error');
    }
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Sign Up</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          type="email"
          placeholder="Email"
          // className="w-full p-2 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="Password"
          className="w-full p-2 border rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          minLength={6}
        />
        <Input
          type="text"
          placeholder="Organization Name"
          className="w-full p-2 border rounded"
          value={organizationName}
          onChange={(e) => setOrganizationName(e.target.value)}
          required
        />
        {status === 'loading' ? (
          <Button size="sm" disabled className="w-full">
            <Loader2Icon className="animate-spin mr-2 h-4 w-4" />
            Please wait
          </Button>
        ) : status === 'success' ? (
          <Button type="button" className="w-full" onClick={() => router.push('/login')}>
            Go to login
          </Button>
        ) : (
          <Button type="submit" className="w-full">
            Sign Up
          </Button>
        )}
      </form>
      {/* {message && <p className="mt-4 text-center text-red-600">{message}</p>} */}
      <Toaster />
    </div>
  );
}
