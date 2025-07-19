import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="p-4 space-y-4">
      <h1 className="text-2xl font-bold">Welcome to ResumeLens</h1>
      <p>Choose an option to get started:</p>
      <div className="flex gap-4">
        <Link href="/login" className="bg-blue-500 text-white px-4 py-2 rounded">Login</Link>
        <Link href="/signup" className="bg-green-500 text-white px-4 py-2 rounded">Sign Up</Link>
      </div>
    </main>
  );
}
