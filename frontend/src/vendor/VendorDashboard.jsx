import { useEffect, useState } from "react";
import api from "../services/api";
import { Link } from "react-router-dom";

export default function VendorDashboard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    api.get("/vendor/dashboard").then(res => setData(res.data));
  }, []);

  if (!data) return <p className="p-4">Loading...</p>;

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Vendor Dashboard</h1>
      <div className="bg-white p-4 shadow rounded">
        <p><b>Shop:</b> {data.shopName}</p>
        <p><b>Total Products:</b> {data.productsCount}</p>
      </div>

      <div className="flex gap-3">
        <Link to="/vendor/add" className="px-4 py-2 bg-green-600 text-white rounded">
          Add Item
        </Link>
        <Link to="/vendor/products" className="px-4 py-2 bg-blue-600 text-white rounded">
          My Products
        </Link>
      </div>
    </div>
  );
}
