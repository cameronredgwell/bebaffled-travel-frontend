
'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function HomePage() {
  const [name, setName] = useState(null);

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      const user = JSON.parse(userData);
      setName(user.name);
    }
  }, []);

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">BeBaffled Travel 🌏</h1>
        <nav className="space-x-4">
          <Link href="/">Home</Link>
          <Link href="/profile">Profile</Link>
          <Link href="/bookings">Bookings</Link>
          <Link href="/login">Login</Link>
          <Link href="/register">Register</Link>
        </nav>
      </header>
      {name ? (
        <h2 className="text-xl">Welcome, {name}!</h2>
      ) : (
        <p className="text-gray-600">Login or register to get started</p>
      )}
    </div>
  );
}
