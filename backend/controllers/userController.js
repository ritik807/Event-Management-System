import Product from "../models/Product.js";
import Order from "../models/Order.js";
import Vendor from "../models/Vendor.js";

export const userPortal = async (req, res) => {
  try {
    res.json({
      message: "Welcome to User Portal",
      userId: req.user.id
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


export const listProducts = async (req, res) => {
  try {
    const products = await Product.find({ status: "ACTIVE" })
      .populate({
        path: "vendor",
        populate: { path: "user", select: "name" }
      });

    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const listProductsByVendor = async (req, res) => {
  try {
    const vendor = await Vendor.findById(req.params.vendorId);
    if (!vendor) {
      return res.status(404).json({ message: "Vendor not found" });
    }

    const products = await Product.find({
      vendor: vendor._id,
      status: "ACTIVE"
    });

    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


export const userOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user.id })
      .sort({ createdAt: -1 })
      .populate("items.product");

    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
