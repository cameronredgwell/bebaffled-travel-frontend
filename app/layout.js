// app/layout.js
import './globals.css';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'BeBaffled Travel',
  description: 'Your Accor booking power tool',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="bg-white shadow-md p-4 flex items-center justify-between">
          <Link href="/">
            <Image src="/logo.png" alt="BeBaffled Logo" width={150} height={50} />
          </Link>
          <nav className="flex gap-4 text-sm">
            <Link href="/bookings" className="hover:underline">Bookings</Link>
            <Link href="/profile" className="hover:underline">Profile</Link>
            <Link href="/login" className="hover:underline">Login</Link>
            <Link href="/register" className="hover:underline">Register</Link>
          </nav>
        </header>
        <main className="p-4">
          {children}
        </main>
      </body>
    </html>
  );
}
