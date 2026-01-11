import { useEffect, useState } from "react";
import api from "../services/api";

export default function MaintainUser() {
  const [users, setUsers] = useState([]);

  const load = async () => {
    const res = await api.get("/admin/users");
    setUsers(res.data);
  };

  const toggle = async (id) => {
    await api.patch(`/admin/users/${id}/toggle`);
    load();
  };

  useEffect(() => { load(); }, []);

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Maintain Users</h1>
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">Name</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map(u => (
            <tr key={u._id}>
              <td className="border p-2">{u.name}</td>
              <td className="border p-2">{u.email}</td>
              <td className="border p-2">{u.isActive ? "Active" : "Blocked"}</td>
              <td className="border p-2">
                <button
                  onClick={() => toggle(u._id)}
                  className="px-3 py-1 bg-blue-600 text-white rounded"
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
