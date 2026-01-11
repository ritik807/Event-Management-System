import { useNavigate } from "react-router-dom";
import { useState } from "react";
import api from "../services/api";

export default function VendorSignup() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    shopName: "",
    phone: ""
  });

  const submit = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("/auth/signup", {
        name: form.name,
        email: form.email,
        password: form.password,
        role: "VENDOR",
        vendorProfile: {
          shopName: form.shopName,
          phone: form.phone
        }
      });

      alert("Vendor signup successful ✅");
      navigate("/vendor-login");
    } catch (error) {
      console.error("Vendor signup error:", error.response?.data || error.message);

      alert(
        error.response?.data?.message ||
          "Vendor signup failed ❌"
      );
    }
  };

  return (
    <form onSubmit={submit} className="p-6 max-w-sm mx-auto space-y-3">
      <h2 className="text-xl font-bold">Vendor Signup</h2>

      <input
        className="border p-2 w-full"
        placeholder="Name"
        required
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />

      <input
        className="border p-2 w-full"
        placeholder="Email"
        required
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />

      <input
        className="border p-2 w-full"
        type="password"
        placeholder="Password"
        required
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />

      <input
        className="border p-2 w-full"
        placeholder="Shop Name"
        required
        onChange={(e) => setForm({ ...form, shopName: e.target.value })}
      />

      <input
        className="border p-2 w-full"
        placeholder="Phone"
        required
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
      />

      <button
        type="submit"
        className="bg-green-600 text-white px-4 py-2 w-full rounded"
      >
        Signup
      </button>
    </form>
  );
}
