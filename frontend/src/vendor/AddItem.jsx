import { useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

export default function AddItem() {
  const [form, setForm] = useState({ name:"", description:"", price:"" });
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    await api.post("/vendor/products", {
      name: form.name,
      description: form.description,
      price: Number(form.price)
    });
    navigate("/vendor/products");
  };

  return (
    <form onSubmit={submit} className="p-6 max-w-md mx-auto space-y-3">
      <h2 className="text-xl font-bold">Add Item</h2>

      <input className="border p-2 w-full" placeholder="Name"
        onChange={e=>setForm({...form, name:e.target.value})} />

      <textarea className="border p-2 w-full" placeholder="Description"
        onChange={e=>setForm({...form, description:e.target.value})} />

      <input className="border p-2 w-full" placeholder="Price" type="number"
        onChange={e=>setForm({...form, price:e.target.value})} />

      <button className="bg-green-600 text-white px-4 py-2 rounded w-full">
        Save
      </button>
    </form>
  );
}
