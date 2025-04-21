import { connectToDatabase } from '../../lib/mongodb';
import User from '../../models/User';
import bcrypt from 'bcrypt';

export async function POST(req) {
  const { name, email, password } = await req.json();

  await connectToDatabase();

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return new Response(JSON.stringify({ message: 'Email already in use' }), { status: 400 });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = await User.create({ name, email, password: hashedPassword });

  return new Response(JSON.stringify({ message: 'User registered', user: newUser }), { status: 201 });
}
