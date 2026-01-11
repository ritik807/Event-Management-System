import { useState } from "react";
import api from "../services/api";

export default function AddMembership() {
  const [form, setForm] = useState({
    title: "",
    durationInMonths: "",
    price: "",
    benefits: ""
  });

  const submit = async (e) => {
    e.preventDefault();
    await api.post("/membership", {
      ...form,
      durationInMonths: Number(form.durationInMonths),
      price: Number(form.price)
    });
    alert("Membership added");
  };

  return (
    <form onSubmit={submit} className="p-6 max-w-md mx-auto space-y-3">
      <h2 className="text-xl font-bold">Add Membership</h2>

      <input className="border p-2 w-full" placeholder="Title"
        onChange={e=>setForm({...form, title:e.target.value})} />

      <input className="border p-2 w-full" placeholder="Duration (months)"
        onChange={e=>setForm({...form, durationInMonths:e.target.value})} />

      <input className="border p-2 w-full" placeholder="Price"
        onChange={e=>setForm({...form, price:e.target.value})} />

      <textarea className="border p-2 w-full" placeholder="Benefits"
        onChange={e=>setForm({...form, benefits:e.target.value})} />

      <button className="bg-blue-600 text-white px-4 py-2 w-full rounded">
        Save
      </button>
    </form>
  );
}
