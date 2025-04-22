'use client';

import { useEffect, useState } from 'react';

export default function HomePage() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const name = localStorage.getItem('name');
    if (token && name) {
      setUser({ name });
    }
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">BeBaffled Travel</h2>
      {user ? (
        <p>Welcome, {user.name}!</p>
      ) : (
        <p>Login or register to get started</p>
      )}
    </div>
  );
}
