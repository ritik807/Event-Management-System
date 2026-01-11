import { useEffect, useState } from "react";
import api from "../services/api";
import { Link } from "react-router-dom";

export default function VendorPage() {
  const [products, setProducts] = useState([]);

  const load = async () => {
    const res = await api.get("/vendor/products");
    setProducts(res.data);
  };

  const toggleStatus = async (id) => {
    await api.patch(`/vendor/products/${id}/status`);
    load();
  };

  useEffect(() => { load(); }, []);

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">My Products</h1>

      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">Name</th>
            <th className="border p-2">Price</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map(p => (
            <tr key={p._id}>
              <td className="border p-2">{p.name}</td>
              <td className="border p-2">₹{p.price}</td>
              <td className="border p-2">{p.status}</td>
              <td className="border p-2 space-x-2">
                <button
                  onClick={() => toggleStatus(p._id)}
                  className="px-3 py-1 bg-purple-600 text-white rounded"
                >
                  Toggle
                </button>
                <Link
                  to={`/vendor/update/${p._id}`}
                  className="px-3 py-1 bg-blue-600 text-white rounded"
                >
                  Edit
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
