// app/layout.js
import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'BeBaffled Travel',
  description: 'Track & compare your Accor bookings — smarter, faster.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 font-sans">
        <header className="p-4 bg-black text-white flex justify-between items-center">
          <h1 className="text-xl font-bold">BeBaffled 🚀</h1>
          <nav className="space-x-4">
            <Link href="/">Home</Link>
            <Link href="/bookings">Bookings</Link>
            <Link href="/profile">Profile</Link>
            <Link href="/login">Login</Link>
            <Link href="/register">Register</Link>
          </nav>
        </header>
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}
