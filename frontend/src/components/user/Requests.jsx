import { useState, useEffect } from "react";
import API from "../../services/api.js";

const Requests = () => {
  const [requests, setRequests] = useState([]);
  const [itemName, setItemName] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");

  const fetchRequests = async () => {
    try {
      const { data } = await API.get("/requests/myrequests");
      setRequests(data);
    } catch (err) {
      console.error(err);
    }
  };

  const createRequest = async (e) => {
    e.preventDefault();
    try {
      await API.post("/requests", { itemName, description });
      setMessage("Request submitted!");
      setItemName(""); setDescription("");
      fetchRequests();
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  return (
    <div className="p-8 max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4">Request Item</h2>
      {message && <p className="text-green-600 mb-2">{message}</p>}
      <form onSubmit={createRequest} className="mb-6 space-y-2">
        <input
          type="text"
          placeholder="Item Name"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          className="w-full border p-2 rounded"
          required
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border p-2 rounded"
        />
        <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          Submit Request
        </button>
      </form>

      <h3 className="text-xl font-bold mb-2">My Requests</h3>
      <ul>
        {requests.map((r) => (
          <li key={r._id} className="border p-2 rounded mb-2">
            <strong>{r.itemName}</strong> - {r.description} <br />
            Status: {r.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Requests;
