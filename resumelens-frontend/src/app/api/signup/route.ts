import { NextResponse } from 'next/server';
import { addUser, findUser } from '@/lib/userStore';

export async function POST(req: Request) {
  const { name, email, password } = await req.json();

  if (findUser(email)) {
    return NextResponse.json({ success: false, message: 'User already exists' }, { status: 400 });
  }

  addUser({ name, email, password });
  return NextResponse.json({ success: true });
}
