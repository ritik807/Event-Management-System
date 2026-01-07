import { useEffect, useState } from "react";
import API from "../../services/api.js";

const MaintainVendors = () => {
  const [vendors, setVendors] = useState([]);

  const fetchVendors = async () => {
    try {
      const { data } = await API.get("/admin/users?role=vendor");
      setVendors(data);
    } catch (err) {
      console.error(err);
    }
  };

  const deleteVendor = async (id) => {
    if (!window.confirm("Are you sure?")) return;
    try {
      await API.delete(`/admin/users/${id}`);
      fetchVendors();
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchVendors();
  }, []);

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Manage Vendors</h2>
      <table className="w-full border">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Email</th>
            <th className="p-2 border">Action</th>
          </tr>
        </thead>
        <tbody>
          {vendors.map((v) => (
            <tr key={v._id}>
              <td className="p-2 border">{v.name}</td>
              <td className="p-2 border">{v.email}</td>
              <td className="p-2 border">
                <button
                  onClick={() => deleteVendor(v._id)}
                  className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MaintainVendors;
