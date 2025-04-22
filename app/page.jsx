'use client'
import { useEffect, useState } from 'react';

export default function Home() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  return (
    <main>
      {user ? (
        <>
          <h1>Welcome, {user.name}</h1>
          <p>Bookings and form will appear here.</p>
        </>
      ) : (
        <h1>Please login to continue.</h1>
      )}
    </main>
  );
}