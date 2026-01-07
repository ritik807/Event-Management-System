import Product from "../models/Product.js";


export const addProduct = async (req, res) => {
  try {
    const product = await Product.create({
      ...req.body,
      vendor: req.user._id
    });

    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



export const updateProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product)
      return res.status(404).json({ message: "Product not found" });

    if (product.vendor.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: "Not allowed" });
    }

    Object.assign(product, req.body);
    await product.save();

    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const updateProductStatus = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product)
      return res.status(404).json({ message: "Product not found" });

    product.status = req.body.status;
    await product.save();

    res.json({ message: "Product status updated" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



export const getApprovedProducts = async (req, res) => {
  try {
    const products = await Product.find({ status: "approved" })
      .populate("vendor", "name email");

    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
