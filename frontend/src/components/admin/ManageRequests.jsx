import { useEffect, useState } from "react";
import API from "../../services/api.js";

const ManageRequests = () => {
  const [requests, setRequests] = useState([]);

  const fetchRequests = async () => {
    try {
      const { data } = await API.get("/admin/requests");
      setRequests(data);
    } catch (err) {
      console.error(err);
    }
  };

  const updateStatus = async (id, status) => {
    try {
      await API.put(`/admin/requests/${id}`, { status });
      fetchRequests();
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Manage Requests</h2>
      <table className="w-full border">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2 border">User</th>
            <th className="p-2 border">Item</th>
            <th className="p-2 border">Description</th>
            <th className="p-2 border">Status</th>
            <th className="p-2 border">Action</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((r) => (
            <tr key={r._id}>
              <td className="p-2 border">{r.user.name}</td>
              <td className="p-2 border">{r.itemName}</td>
              <td className="p-2 border">{r.description}</td>
              <td className="p-2 border">{r.status}</td>
              <td className="p-2 border flex gap-2">
                {r.status === "pending" && (
                  <>
                    <button
                      onClick={() => updateStatus(r._id, "approved")}
                      className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600"
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => updateStatus(r._id, "rejected")}
                      className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                    >
                      Reject
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageRequests;
