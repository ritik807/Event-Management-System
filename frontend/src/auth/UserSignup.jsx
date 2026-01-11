import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function UserSignup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name:"", email:"", password:"" });

  const submit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/auth/signup", {
      ...form,
      role: "USER"
    });
    navigate("/user-login");
  };

  return (
    <form onSubmit={submit} className="p-6 max-w-sm mx-auto">
      <h2 className="text-xl mb-4">User Signup</h2>

      <input className="border p-2 w-full mb-2" placeholder="Name"
        onChange={e => setForm({ ...form, name: e.target.value })} />

      <input className="border p-2 w-full mb-2" placeholder="Email"
        onChange={e => setForm({ ...form, email: e.target.value })} />

      <input className="border p-2 w-full mb-2" type="password"
        placeholder="Password"
        onChange={e => setForm({ ...form, password: e.target.value })} />

      <button className="bg-purple-600 text-white px-4 py-2 w-full">Signup</button>
    </form>
  );
}
