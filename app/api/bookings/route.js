import dbConnect from '@/lib/mongodb';
import Booking from '@/models/Booking';
import { getToken } from 'next-auth/jwt';

export async function POST(req) {
  try {
    const token = await getToken({ req, secret: process.env.JWT_SECRET });
    if (!token) return new Response('Unauthorized', { status: 401 });

    const { hotelName, checkInDate, nights } = await req.json();
    await dbConnect();

    const newBooking = await Booking.create({
      user: token.userId,
      hotelName,
      checkInDate,
      nights,
    });

    return new Response(JSON.stringify({ success: true, booking: newBooking }), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}