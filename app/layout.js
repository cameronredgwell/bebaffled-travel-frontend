'use client';

import Link from 'next/link';
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="p-4 bg-gray-100 shadow-md">
          <div className="max-w-4xl mx-auto flex justify-between items-center">
            <h1 className="text-xl font-bold">BeBaffled Travel 🌏</h1>
            <nav className="space-x-4 text-sm">
              <Link href="/">Home</Link>
              <Link href="/profile">Profile</Link>
              <Link href="/bookings">Bookings</Link>
              <Link href="/login">Login</Link>
              <Link href="/register">Register</Link>
            </nav>
          </div>
        </header>
        <main className="max-w-4xl mx-auto p-4">{children}</main>
      </body>
    </html>
    );
}
