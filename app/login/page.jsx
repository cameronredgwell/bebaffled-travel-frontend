
'use client';
import { useState } from 'react';

export default function LoginPage() {
  const [form, setForm] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });
    const data = await res.json();
    alert(data.message);
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="email" name="email" placeholder="Email" className="w-full p-2 border" onChange={handleChange} />
        <input type="password" name="password" placeholder="Password" className="w-full p-2 border" onChange={handleChange} />
        <button type="submit" className="w-full bg-blue-600 text-white py-2">Login</button>
      </form>
    </div>
  );
}
