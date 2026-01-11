import { useEffect, useState } from "react";
import api from "../services/api";

export default function AdminDashboard() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    api.get("/admin/dashboard").then(res => setStats(res.data));
  }, []);

  if (!stats) return <p className="p-4">Loading...</p>;

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white p-4 shadow">Users: {stats.users}</div>
        <div className="bg-white p-4 shadow">Vendors: {stats.vendors}</div>
        <div className="bg-white p-4 shadow">Products: {stats.products}</div>
        <div className="bg-white p-4 shadow">Orders: {stats.orders}</div>
      </div>
    </div>
  );
}
