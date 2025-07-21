'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input"
import { Toaster } from "~/components/ui/sonner"
import { toast } from "sonner"
import { Loader2Icon } from "lucide-react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "~/components/ui/navigation-menu"
import { set } from 'zod/v4';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [organizationName, setOrganizationName] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
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

       if (res.ok) {
        // setMessage('Login successful!');
        toast.success('Login successful!');
        setStatus('success');
        localStorage.setItem('access_token', data.access_token);
        // localStorage.setItem('refresh_token', data.refresh_token);

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
    <div className="max-w-md mx-auto p-6">
      <div className="fixed top-0 left-0 right-0 h-16 flex items-center justify-between px-6 w-full bg-black text-white z-50">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink
                className="text-white text-lg font-semibold cursor-pointer"
                onClick={() => router.push("/")}
              >
                Home
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink href='/signup' className="text-white hover:underline cursor-pointer">
                Sign Up
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <div className='max-w-md mx-auto mt-15'> 
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
          <Input
            type="password"
            placeholder="Password"
            className="w-full p-2 border rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={6}
          />
          {status === 'loading' ? (
            <Button size="sm" disabled className="w-full">
              <Loader2Icon className="animate-spin mr-2 h-4 w-4" />
              Please wait
            </Button>
          ) : status === 'success' ? (
            <Button type="button" disabled className="w-full" onClick={() => router.push('/login')}>
              Logged In
            </Button>
          ) : (
            <Button type="submit" className="w-full">
              Log In
            </Button>
          )}
        </form>
      </div>
      <Toaster />
      {/* {message && <p className="mt-4 text-center text-red-600">{message}</p>} */}
    </div>
  );
}