import mongoose from "mongoose";

const vendorSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    shopName: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String }
  },
  { timestamps: true }
);

export default mongoose.model("Vendor", vendorSchema);
