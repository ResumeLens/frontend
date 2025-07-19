import { NextResponse } from 'next/server';
import { findUser } from '@/lib/userStore';

export async function POST(req: Request) {
  const { email, password } = await req.json();
  const user = findUser(email);

  if (!user || user.password !== password) {
    return NextResponse.json({ success: false, message: 'Invalid credentials' }, { status: 401 });
  }

  return NextResponse.json({ success: true, name: user.name });
}
