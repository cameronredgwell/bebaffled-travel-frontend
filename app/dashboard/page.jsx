'use client';
import { useEffect, useState } from 'react';

export default function DashboardPage() {
  const [user, setUser] = useState(null);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser);
      // Example static bookings, replace with API fetch later
      setBookings([
        { id: 1, hotel: 'Pullman Bangkok', date: '2025-05-01', nights: 3 },
        { id: 2, hotel: 'SO/ Bali', date: '2025-06-12', nights: 5 },
      ]);
    }
  }, []);

  if (!user) return <p>Please login to continue.</p>;

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Welcome, {user.name}</h1>
      <h2 className="text-xl font-semibold mb-2">Your Bookings:</h2>
      <ul className="mb-4">
        {bookings.map((booking) => (
          <li key={booking.id} className="mb-2">
            <strong>{booking.hotel}</strong> – {booking.date} for {booking.nights} night(s)
          </li>
        ))}
      </ul>
      <div className="space-x-4">
        <a href="/profile" className="text-blue-600 underline">Edit Profile</a>
        <a href="/bookings" className="text-blue-600 underline">Add Booking</a>
        <button
          className="text-red-600 underline"
          onClick={() => {
            localStorage.removeItem('user');
            window.location.href = '/login';
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}