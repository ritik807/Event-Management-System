import Vendor from "../models/Vendor.js";
import Product from "../models/Product.js";

export const vendorDashboard = async (req, res) => {
  try {
    const vendor = await Vendor.findOne({ user: req.user.id });
    if (!vendor) return res.status(404).json({ message: "Vendor not found" });

    const productsCount = await Product.countDocuments({ vendor: vendor._id });

    res.json({
      vendorId: vendor._id,
      shopName: vendor.shopName,
      productsCount
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const addItem = async (req, res) => {
  try {
    const vendor = await Vendor.findOne({ user: req.user.id });
    if (!vendor) return res.status(404).json({ message: "Vendor not found" });

    const { name, description, price } = req.body;

    if (!name || !price) {
      return res.status(400).json({ message: "Name and price required" });
    }

    const product = await Product.create({
      vendor: vendor._id,
      name,
      description,
      price
    });

    res.status(201).json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


export const listVendorProducts = async (req, res) => {
  try {
    const vendor = await Vendor.findOne({ user: req.user.id });
    if (!vendor) return res.status(404).json({ message: "Vendor not found" });

    const products = await Product.find({ vendor: vendor._id });
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


export const updateItem = async (req, res) => {
  try {
    const vendor = await Vendor.findOne({ user: req.user.id });
    if (!vendor) return res.status(404).json({ message: "Vendor not found" });

    const product = await Product.findOne({
      _id: req.params.id,
      vendor: vendor._id
    });

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    const { name, description, price } = req.body;

    if (name !== undefined) product.name = name;
    if (description !== undefined) product.description = description;
    if (price !== undefined) product.price = price;

    await product.save();

    res.json({ message: "Product updated", product });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


export const toggleProductStatus = async (req, res) => {
  try {
    const vendor = await Vendor.findOne({ user: req.user.id });
    if (!vendor) return res.status(404).json({ message: "Vendor not found" });

    const product = await Product.findOne({
      _id: req.params.id,
      vendor: vendor._id
    });

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    product.status = product.status === "ACTIVE" ? "INACTIVE" : "ACTIVE";
    await product.save();

    res.json({
      message: "Product status updated",
      status: product.status
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
