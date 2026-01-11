import User from "../models/User.js";
import Vendor from "../models/Vendor.js";
import Product from "../models/Product.js";
import Order from "../models/Order.js";
import Transaction from "../models/Transaction.js";

export const systemReport = async (req, res) => {
  try {
    const totalUsers = await User.countDocuments({ role: "USER" });
    const totalVendors = await User.countDocuments({ role: "VENDOR" });
    const totalProducts = await Product.countDocuments();
    const totalOrders = await Order.countDocuments();

    const revenueAgg = await Order.aggregate([
      { $group: { _id: null, total: { $sum: "$totalAmount" } } }
    ]);

    const totalRevenue = revenueAgg[0]?.total || 0;

    const transactions = await Transaction.countDocuments({
      paymentStatus: "SUCCESS"
    });

    res.json({
      users: totalUsers,
      vendors: totalVendors,
      products: totalProducts,
      orders: totalOrders,
      transactions,
      revenue: totalRevenue
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
