'use client';
import { useState } from 'react';

export default function BookingsPage() {
  const [hotel, setHotel] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Booking added:', { hotel, date });
    alert(`Booking added: ${hotel} on ${date}`);
    // 🔜 Connect to backend
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold">Add Booking</h1>
      <input
        className="w-full p-2 border"
        placeholder="Hotel name"
        value={hotel}
        onChange={e => setHotel(e.target.value)}
      />
      <input
        className="w-full p-2 border"
        placeholder="Booking date"
        type="date"
        value={date}
        onChange={e => setDate(e.target.value)}
      />
      <button className="bg-black text-white px-4 py-2" type="submit">
        Add Booking
      </button>
    </form>
  );
}
