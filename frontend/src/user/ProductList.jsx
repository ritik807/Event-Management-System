import { useEffect, useState } from "react";
import api from "../services/api";

export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get("/user/products").then(res => setProducts(res.data));
  }, []);

  const addToCart = async (id) => {
    await api.post("/cart/add", { productId: id });
    alert("Added to cart");
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Products</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map(p => (
          <div key={p._id} className="border p-4 rounded shadow">
            <h2 className="font-semibold">{p.name}</h2>
            <p>₹{p.price}</p>
            <p className="text-sm text-gray-500">
              Vendor: {p.vendor?.user?.name}
            </p>

            <button
              onClick={() => addToCart(p._id)}
              className="mt-2 px-3 py-1 bg-green-600 text-white rounded"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
