import User from "../models/User.js";
import Vendor from "../models/Vendor.js";
import Product from "../models/Product.js";
import Order from "../models/Order.js";

export const dashboard = async (req, res) => {
  try {
    const users = await User.countDocuments({ role: "USER" });
    const vendors = await User.countDocuments({ role: "VENDOR" });
    const products = await Product.countDocuments();
    const orders = await Order.countDocuments();

    res.json({ users, vendors, products, orders });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const listUsers = async (req, res) => {
  try {
    const users = await User.find({ role: "USER" }).select("-password");
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const toggleUserStatus = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });

    user.isActive = !user.isActive;
    await user.save();

    res.json({ message: "User status updated", isActive: user.isActive });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const listVendors = async (req, res) => {
  try {
    const vendors = await Vendor.find().populate({
      path: "user",
      select: "name email isActive"
    });
    res.json(vendors);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const toggleVendorStatus = async (req, res) => {
  try {
    const vendor = await Vendor.findById(req.params.id).populate("user");
    if (!vendor) return res.status(404).json({ message: "Vendor not found" });

    vendor.user.isActive = !vendor.user.isActive;
    await vendor.user.save();

    res.json({
      message: "Vendor status updated",
      isActive: vendor.user.isActive
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const reports = async (req, res) => {
  try {
    const totalRevenue = await Order.aggregate([
      { $group: { _id: null, sum: { $sum: "$totalAmount" } } }
    ]);

    res.json({
      totalOrders: await Order.countDocuments(),
      totalRevenue: totalRevenue[0]?.sum || 0
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
