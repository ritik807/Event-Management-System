import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";

export default function UpdateMembership() {
  const { id } = useParams();
  const [form, setForm] = useState({});

  useEffect(() => {
    api.get("/membership").then(res => {
      const m = res.data.find(x => x._id === id);
      setForm(m);
    });
  }, [id]);

  const submit = async (e) => {
    e.preventDefault();
    await api.put(`/membership/${id}`, form);
    alert("Updated");
  };

  return (
    <form onSubmit={submit} className="p-6 max-w-md mx-auto space-y-3">
      <h2 className="text-xl font-bold">Update Membership</h2>

      <input className="border p-2 w-full" value={form?.title || ""}
        onChange={e=>setForm({...form, title:e.target.value})} />

      <input className="border p-2 w-full" value={form?.price || ""}
        onChange={e=>setForm({...form, price:e.target.value})} />

      <button className="bg-green-600 text-white px-4 py-2 w-full rounded">
        Update
      </button>
    </form>
  );
}
