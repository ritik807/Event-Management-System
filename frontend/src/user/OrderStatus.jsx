import { useEffect, useState } from "react";
import api from "../services/api";

export default function OrderStatus() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    api.get("/user/orders").then(res => setOrders(res.data));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">My Orders</h1>

      {orders.map(o => (
        <div key={o._id} className="border p-3 mb-3 rounded">
          <p>Status: <b>{o.status}</b></p>
          <p>Total: ₹{o.totalAmount}</p>
        </div>
      ))}
    </div>
  );
}
