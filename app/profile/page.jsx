
'use client'
import { useState } from 'react';

export default function ProfilePage() {
  const [accorMemberNumber, setAccorMemberNumber] = useState('');
  const [preferredCurrency, setPreferredCurrency] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('/api/profile/update', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ accorMemberNumber, preferredCurrency }),
    });

    const data = await res.json();
    alert(data.message);
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">Update Profile</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Accor Member Number</label>
          <input
            type="text"
            value={accorMemberNumber}
            onChange={(e) => setAccorMemberNumber(e.target.value)}
            className="w-full border border-gray-300 px-3 py-2 rounded"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Preferred Currency</label>
          <select
            value={preferredCurrency}
            onChange={(e) => setPreferredCurrency(e.target.value)}
            className="w-full border border-gray-300 px-3 py-2 rounded"
            required
          >
            <option value="">Select a currency</option>
            <option value="AUD">AUD</option>
            <option value="THB">THB</option>
            <option value="IDR">IDR</option>
            <option value="SGD">SGD</option>
            <option value="MYR">MYR</option>
            <option value="VND">VND</option>
            <option value="PHP">PHP</option>
            <option value="JPY">JPY</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
            <option value="HKD">HKD</option>
            <option value="CNY">CNY</option>
            <option value="NZD">NZD</option>
            <option value="KRW">KRW</option>
          </select>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Save
        </button>
      </form>
    </div>
  );
}
