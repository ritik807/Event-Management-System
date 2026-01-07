import Order from "../models/Order.js";
import Cart from "../models/Cart.js";

// PLACE ORDER
export const placeOrder = async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.user._id }).populate("products.product");
    if (!cart || cart.products.length === 0)
      return res.status(400).json({ message: "Cart is empty" });

    const products = cart.products.map(item => ({
      product: item.product._id,
      quantity: item.quantity,
      vendor: item.product.vendor
    }));

    const totalAmount = cart.products.reduce(
      (sum, item) => sum + item.product.price * item.quantity,
      0
    );

    const order = await Order.create({
      user: req.user._id,
      products,
      totalAmount
    });

    // clear cart
    cart.products = [];
    await cart.save();

    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// USER ORDERS

export const getUserOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user._id }).populate("products.product");
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// VENDOR ORDERS

export const getVendorOrders = async (req, res) => {
  try {
    const orders = await Order.find({ "products.vendor": req.user._id }).populate("products.product");
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// UPDATE ORDER STATUS (VENDOR)

export const updateOrderStatus = async (req, res) => {
  try {
    const { orderId, status } = req.body;
    const order = await Order.findById(orderId);

    if (!order) return res.status(404).json({ message: "Order not found" });

    // Only vendor can update their products
    
    order.products.forEach(p => {
      if (p.vendor.toString() === req.user._id.toString()) {
        p.status = status;
      }
    });

    await order.save();
    res.json({ message: "Order updated", order });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
