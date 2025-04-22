'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    try {
      const storedUser = localStorage.getItem('user');
      if (!storedUser) {
        router.push('/login');
      } else {
        const parsedUser = JSON.parse(storedUser);
        if (parsedUser?.name) {
          setUser(parsedUser);
        } else {
          throw new Error("Invalid user format");
        }
      }
    } catch (err) {
      console.error("Error parsing user from localStorage:", err);
      setError(true);
      router.push('/login');
    }
  }, []);

  if (error) return <p className="text-red-500">Something went wrong. Please login again.</p>;
  if (!user) return <p>Loading dashboard...</p>;

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">Welcome, {user.name} 👋</h1>
      <p className="text-gray-600 mb-4">You’re logged in as: <strong>{user.email}</strong></p>

      <div className="mt-6 p-4 bg-gray-100 border rounded">
        <h2 className="text-xl font-semibold mb-2">My Bookings</h2>
        <p className="text-sm text-gray-500">No bookings added yet. When you add bookings, they’ll show here.</p>
      </div>
    </div>
  );
}