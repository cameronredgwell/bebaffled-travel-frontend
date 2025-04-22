'use client';
import { useState } from 'react';

export default function BookingsPage() {
  const [form, setForm] = useState({ hotelName: '', checkInDate: '', nights: 1 });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/bookings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    setMessage(data.success ? 'Booking saved!' : data.error);
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Add Booking</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="hotelName" placeholder="Hotel Name" className="w-full p-2 border" onChange={handleChange} />
        <input name="checkInDate" type="date" className="w-full p-2 border" onChange={handleChange} />
        <input name="nights" type="number" min="1" className="w-full p-2 border" onChange={handleChange} />
        <button type="submit" className="w-full bg-blue-600 text-white py-2">Submit</button>
      </form>
      {message && <p className="mt-4 text-center">{message}</p>}
    </div>
  );
}