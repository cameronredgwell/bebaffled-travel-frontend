import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
  accorMemberNumber: { type: String, required: false },
}, { timestamps: true });

export default mongoose.models.User || mongoose.model('User', UserSchema);