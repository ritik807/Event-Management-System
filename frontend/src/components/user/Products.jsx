import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../services/api.js";

const Products = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const fetchProducts = async () => {
    try {
      const { data } = await API.get("/products");
      setProducts(data);
    } catch (err) {
      console.error(err);
    }
  };

  const addToCart = async (id) => {
    try {
      await API.post("/cart", { productId: id, quantity: 1 });
      alert("Added to cart!");
      navigate("/user/cart");
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((p) => (
          <div key={p._id} className="border p-4 rounded shadow">
            <h3 className="font-bold text-lg">{p.name}</h3>
            <p>Category: {p.category}</p>
            <p>Price: ${p.price}</p>
            <p>Status: {p.status}</p>
            <button
              onClick={() => addToCart(p._id)}
              className="mt-2 w-full bg-green-600 text-white py-1 rounded hover:bg-green-700"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
