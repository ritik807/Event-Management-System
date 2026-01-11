import Transaction from "../models/Transaction.js";
import Order from "../models/Order.js";


export const checkout = async (req, res) => {
  try {
    const { orderId, paymentMethod } = req.body;

    if (!orderId || !paymentMethod) {
      return res.status(400).json({ message: "All fields required" });
    }

    const order = await Order.findById(orderId);
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    const transaction = await Transaction.create({
      order: order._id,
      paymentMethod,
      paymentStatus: "SUCCESS"
    });

    order.status = "PROCESSING";
    await order.save();

    res.status(201).json({
      message: "Payment successful",
      transaction
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
