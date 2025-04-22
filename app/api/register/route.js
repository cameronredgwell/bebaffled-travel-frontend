import dbConnect from '@/lib/mongodb';
import User from '@/models/User';
import bcrypt from 'bcryptjs';

export async function POST(req) {
  try {
    await dbConnect();
    const { name, email, password, accorMemberNumber } = await req.json();

    const existingUser = await User.findOne({ email });
    if (existingUser) return new Response('Email already exists', { status: 400 });

    const passwordHash = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, passwordHash, accorMemberNumber });

    return new Response(JSON.stringify({ success: true, user }), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}