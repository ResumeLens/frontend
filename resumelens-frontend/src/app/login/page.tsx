'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input"
import { Toaster } from "~/components/ui/sonner"
import { toast } from "sonner"
import { Loader2Icon, Eye, EyeOff } from "lucide-react"

import MouseFollow from "~/components/MouseFollow";


export default function LoginPage() {
  const [darkMode] = useState();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [status, setStatus] = useState<'idle' | 'loading' | 'error'>('idle');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      console.log(data);

      if (res.ok) {
       // setMessage('Login successful!');
       toast.success('Login successful!');

       localStorage.setItem('access_token', data.access_token);
       localStorage.setItem('user_id', data.user.Email);
       localStorage.setItem('organization', data.organization.Name);
       
       router.push('/');
      } else {
        // setMessage(data.error || 'Login failed.');
        toast.error(data.error || 'Login failed.');
        setStatus('error');
      }
    } catch (error) {
      // setMessage('Network error.');
      toast.error('Network error.');
      setStatus('error');
    }
  };

  return (
    <div className={`${darkMode ? "dark" : ""} transition-all duration-500`}>
      <MouseFollow />

      <div className='max-w-md mx-auto mt-35 mb-50'> 
        <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance mb-6">Log In</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="email"
            placeholder="Email"
            className="w-full p-2 border rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <div className="flex w-full items-center gap-2">
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full p-2 border rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={6}
            />
            <Button 
              type='button' 
              onClick={() => setShowPassword(!showPassword)} 
              className="cursor-pointer bg-transparent hover:bg-transparent text-gray-500 dark:hover:text-gray-100 hover:text-gray-700"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </Button>
          </div>

          {status === 'loading' ? (
            <Button size="sm" disabled className="w-full">
              <Loader2Icon className="animate-spin mr-2 h-4 w-4" />
              Please wait
            </Button>
          ) : (
            <Button type="submit" className="w-full cursor-pointer bg-indigo-600 dark:bg-amber-400 dark:hover:bg-white hover:scale-105">
              Log In
            </Button>
          )}
        </form>
      </div>
      
      <Toaster />
    </div>
  );
}