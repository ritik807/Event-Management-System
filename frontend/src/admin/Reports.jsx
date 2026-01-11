import { useEffect, useState } from "react";
import api from "../services/api";

export default function Reports() {
  const [report, setReport] = useState(null);

  useEffect(() => {
    api.get("/report/system").then(res => setReport(res.data));
  }, []);

  if (!report) return <p className="p-4">Loading...</p>;

  return (
    <div className="p-6 space-y-3">
      <h1 className="text-xl font-bold">System Reports</h1>
      <p>Users: {report.users}</p>
      <p>Vendors: {report.vendors}</p>
      <p>Products: {report.products}</p>
      <p>Orders: {report.orders}</p>
      <p>Transactions: {report.transactions}</p>
      <p>Total Revenue: ₹{report.revenue}</p>
    </div>
  );
}
