import mongoose from "mongoose";

const membershipSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true // 6 Months / 1 Year / 2 Years
    },
    durationInMonths: {
      type: Number,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    benefits: {
      type: String
    },
    isActive: {
      type: Boolean,
      default: true
    }
  },
  { timestamps: true }
);

export default mongoose.model("Membership", membershipSchema);
