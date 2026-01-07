import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../services/api.js";

const Checkout = () => {
  const [cart, setCart] = useState({ products: [] });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const fetchCart = async () => {
    try {
      const { data } = await API.get("/cart");
      setCart(data);
    } catch (err) {
      console.error(err);
    }
  };

  const placeOrder = async () => {
    try {
      await API.post("/orders");
      setMessage("Order placed successfully!");
      navigate("/user/products");
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const totalAmount = cart.products.reduce(
    (sum, p) => sum + p.product.price * p.quantity,
    0
  );

  return (
    <div className="p-8 max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>
      {cart.products.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <div>
          <ul className="mb-4">
            {cart.products.map((p) => (
              <li key={p.product._id}>
                {p.product.name} x {p.quantity} = ${p.product.price * p.quantity}
              </li>
            ))}
          </ul>
          <p className="font-bold mb-4">Total: ${totalAmount}</p>
          <button
            onClick={placeOrder}
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
          >
            Place Order
          </button>
          {message && <p className="mt-4 text-green-600">{message}</p>}
        </div>
      )}
    </div>
  );
};

export default Checkout;
