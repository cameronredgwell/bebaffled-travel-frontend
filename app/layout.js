
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: 'Arial, sans-serif' }}>
        <header style={{
          background: '#1a202c',
          padding: '1rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          color: 'white'
        }}>
          <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
            BeBaffled Travel 🌏
          </div>
          <nav>
            <a href="/" style={{ marginRight: '1rem', color: 'white' }}>Home</a>
            <a href="/bookings" style={{ marginRight: '1rem', color: 'white' }}>Bookings</a>
            <a href="/profile" style={{ marginRight: '1rem', color: 'white' }}>Profile</a>
            <a href="/login" style={{ marginRight: '1rem', color: 'white' }}>Login</a>
            <a href="/register" style={{ color: 'white' }}>Register</a>
          </nav>
        </header>
        <main style={{ padding: '2rem' }}>
          {children}
        </main>
      </body>
    </html>
  );
}
