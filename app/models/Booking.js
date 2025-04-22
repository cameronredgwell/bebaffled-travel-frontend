import mongoose from 'mongoose';

const BookingSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  hotelName: String,
  checkInDate: Date,
  nights: Number,
}, { timestamps: true });

export default mongoose.models.Booking || mongoose.model('Booking', BookingSchema);