import { useEffect, useState } from "react";
import api from "../services/api";
import { useNavigate, useParams } from "react-router-dom";

export default function UpdateItem() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name:"", description:"", price:"" });

  useEffect(() => {
    api.get("/vendor/products").then(res => {
      const p = res.data.find(x => x._id === id);
      if (p) setForm({ name:p.name, description:p.description, price:p.price });
    });
  }, [id]);

  const submit = async (e) => {
    e.preventDefault();
    await api.put(`/vendor/products/${id}`, {
      name: form.name,
      description: form.description,
      price: Number(form.price)
    });
    navigate("/vendor/products");
  };

  return (
    <form onSubmit={submit} className="p-6 max-w-md mx-auto space-y-3">
      <h2 className="text-xl font-bold">Update Item</h2>

      <input className="border p-2 w-full" value={form.name}
        onChange={e=>setForm({...form, name:e.target.value})} />

      <textarea className="border p-2 w-full" value={form.description}
        onChange={e=>setForm({...form, description:e.target.value})} />

      <input className="border p-2 w-full" type="number" value={form.price}
        onChange={e=>setForm({...form, price:e.target.value})} />

      <button className="bg-blue-600 text-white px-4 py-2 rounded w-full">
        Update
      </button>
    </form>
  );
}
