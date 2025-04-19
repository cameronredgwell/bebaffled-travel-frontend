import Link from 'next/link';
export default function Home() {
  return (
    <main className="p-6 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">BeBaffled Travel</h1>
      <p className="mb-4">Welcome to your travel dashboard:</p>
      <ul className="space-y-2">
        <li><Link className="text-blue-600 underline" href="/login">Login</Link></li>
        <li><Link className="text-blue-600 underline" href="/register">Register</Link></li>
        <li><Link className="text-blue-600 underline" href="/profile">Profile</Link></li>
        <li><Link className="text-blue-600 underline" href="/bookings">Bookings</Link></li>
      </ul>
    </main>
  );
}