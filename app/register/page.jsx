'use client';
import { useState } from 'react';

export default function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Registering:', { email, password });
    alert(`Registered with ${email}`);
    // 🔜 Connect to backend / DB
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold">Register</h1>
      <input
        className="w-full p-2 border"
        placeholder="Email"
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <input
        className="w-full p-2 border"
        placeholder="Password"
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <button className="bg-black text-white px-4 py-2" type="submit">
        Sign Up
      </button>
    </form>
  );
}

