import { useEffect, useState } from "react";
import api from "../services/api";

export default function MaintainVendor() {
  const [vendors, setVendors] = useState([]);

  const load = async () => {
    const res = await api.get("/admin/vendors");
    setVendors(res.data);
  };

  const toggle = async (id) => {
    await api.patch(`/admin/vendors/${id}/toggle`);
    load();
  };

  useEffect(() => { load(); }, []);

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Maintain Vendors</h1>
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">Shop</th>
            <th className="border p-2">Owner</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {vendors.map(v => (
            <tr key={v._id}>
              <td className="border p-2">{v.shopName}</td>
              <td className="border p-2">{v.user?.name}</td>
              <td className="border p-2">
                {v.user?.isActive ? "Active" : "Blocked"}
              </td>
              <td className="border p-2">
                <button
                  onClick={() => toggle(v._id)}
                  className="px-3 py-1 bg-green-600 text-white rounded"
                >
                  Toggle
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
