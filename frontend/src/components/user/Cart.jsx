import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../services/api.js";

const Cart = () => {
  const [cart, setCart] = useState({ products: [] });
  const navigate = useNavigate();

  const fetchCart = async () => {
    try {
      const { data } = await API.get("/cart");
      setCart(data);
    } catch (err) {
      console.error(err);
    }
  };

  const removeItem = async (id) => {
    try {
      await API.delete("/cart", { data: { productId: id } });
      fetchCart();
    } catch (err) {
      console.error(err);
    }
  };

  const goToCheckout = () => {
    navigate("/user/checkout");
  };

  useEffect(() => {
    fetchCart();
  }, []);

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cart.products.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <div>
          {cart.products.map((p) => (
            <div key={p.product._id} className="border p-4 rounded mb-2 flex justify-between items-center">
              <div>
                <h3 className="font-bold">{p.product.name}</h3>
                <p>Price: ${p.product.price}</p>
                <p>Quantity: {p.quantity}</p>
              </div>
              <button
                onClick={() => removeItem(p.product._id)}
                className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            onClick={goToCheckout}
            className="mt-4 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
          >
            Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
