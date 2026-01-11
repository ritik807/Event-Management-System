import { useEffect, useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const [cart, setCart] = useState(null);
  const navigate = useNavigate();

  const load = async () => {
    const res = await api.get("/cart");
    setCart(res.data);
  };

  const updateQty = async (id, qty) => {
    await api.patch(`/cart/item/${id}`, { quantity: qty });
    load();
  };

  const removeItem = async (id) => {
    await api.delete(`/cart/item/${id}`);
    load();
  };

  useEffect(() => { load(); }, []);

  if (!cart) return <p className="p-4">Loading...</p>;

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Cart</h1>

      {cart.items.length === 0 && <p>Cart is empty</p>}

      {cart.items.map(i => (
        <div key={i._id} className="flex gap-4 items-center border-b py-2">
          <span className="flex-1">{i.product.name}</span>
          <input
            type="number"
            value={i.quantity}
            min="1"
            onChange={e => updateQty(i._id, Number(e.target.value))}
            className="w-16 border p-1"
          />
          <button
            onClick={() => removeItem(i._id)}
            className="px-3 py-1 bg-red-600 text-white rounded"
          >
            Remove
          </button>
        </div>
      ))}

      {cart.items.length > 0 && (
        <button
          onClick={() => navigate("/user/checkout")}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
        >
          Checkout
        </button>
      )}
    </div>
  );
}
