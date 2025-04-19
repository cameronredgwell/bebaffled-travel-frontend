import Link from 'next/link';

export default function Home() {
  return (
    <main className="p-6 text-center">
      <h1 className="text-4xl font-bold mb-2">BeBaffled Travel 🧳</h1>
      <p className="text-lg text-gray-600">
        Track & compare your Accor bookings — smarter, faster.
      </p>
      <p className="mt-6 text-sm text-gray-400">
        <Link href="/login" className="underline text-blue-500">Login</Link> or <Link href="/register" className="underline text-blue-500">Register</Link> to get started
      </p>
    </main>
  );
}
