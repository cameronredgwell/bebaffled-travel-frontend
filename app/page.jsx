'use client';
import { useEffect, useState } from 'react';

export default function HomePage() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <main className="p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">BeBaffled Travel 🧳</h1>
      <p className="mb-4">Track & compare your Accor bookings — smarter, faster.</p>
      {user ? (
        <p className="text-lg font-medium text-green-700">Welcome, {user.name}!</p>
      ) : (
        <p className="text-sm text-gray-600">Login or register to get started</p>
      )}
    </main>
  );
}
