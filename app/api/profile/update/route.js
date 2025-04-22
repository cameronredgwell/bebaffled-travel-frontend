
import connectMongoDB from '@/lib/mongodb';
import User from '@/models/User';

export async function POST(req) {
  const { accorMemberNumber, preferredCurrency, email } = await req.json();

  try {
    await connectMongoDB();

    await User.findOneAndUpdate(
      { email },
      { accorMemberNumber, preferredCurrency }
    );

    return new Response(JSON.stringify({ message: 'Profile updated successfully' }), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Error updating profile' }), {
      status: 500,
    });
  }
}
