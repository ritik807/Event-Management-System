import { useEffect, useState } from "react";
import api from "../services/api";

export default function RequestItem() {
  const [vendors, setVendors] = useState([]);
  const [message, setMessage] = useState("");
  const [vendorId, setVendorId] = useState("");

  useEffect(() => {
    api.get("/admin/vendors").then(res => setVendors(res.data));
  }, []);

  const submit = async () => {
    await api.post("/request", { vendorId, message });
    alert("Request sent");
  };

  return (
    <div className="p-6 max-w-md mx-auto space-y-3">
      <h1 className="text-xl font-bold">Request Item</h1>

      <select
        className="border p-2 w-full"
        onChange={e => setVendorId(e.target.value)}
      >
        <option value="">Select Vendor</option>
        {vendors.map(v => (
          <option key={v._id} value={v._id}>
            {v.shopName}
          </option>
        ))}
      </select>

      <textarea
        className="border p-2 w-full"
        placeholder="Message"
        onChange={e => setMessage(e.target.value)}
      />

      <button
        onClick={submit}
        className="px-4 py-2 bg-blue-600 text-white rounded w-full"
      >
        Send Request
      </button>
    </div>
  );
}
