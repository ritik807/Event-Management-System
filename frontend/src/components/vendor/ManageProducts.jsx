import { useEffect, useState } from "react";
import API from "../../services/api.js";

const ManageProducts = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const { data } = await API.get("/products");
      setProducts(data.filter(p => p.vendor._id === JSON.parse(localStorage.getItem("user"))._id));
    } catch (err) {
      console.error(err);
    }
  };

  const updateProduct = async (id) => {
    const newName = prompt("Enter new product name:");
    if (!newName) return;
    try {
      await API.put(`/products/${id}`, { name: newName });
      fetchProducts();
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Manage Products</h2>
      <table className="w-full border">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Category</th>
            <th className="p-2 border">Price</th>
            <th className="p-2 border">Status</th>
            <th className="p-2 border">Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p._id}>
              <td className="p-2 border">{p.name}</td>
              <td className="p-2 border">{p.category}</td>
              <td className="p-2 border">{p.price}</td>
              <td className="p-2 border">{p.status}</td>
              <td className="p-2 border">
                <button
                  onClick={() => updateProduct(p._id)}
                  className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageProducts;
