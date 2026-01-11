import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function AdminLogin() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    await login({ email, password, role: "ADMIN" });
    navigate("/admin");
  };

  return (
    <form onSubmit={submit} className="p-6 max-w-sm mx-auto">
      <h2 className="text-xl mb-4">Admin Login</h2>

      <input className="border p-2 w-full mb-2" placeholder="Email"
        onChange={(e) => setEmail(e.target.value)} />

      <input className="border p-2 w-full mb-2" type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)} />

      <button className="bg-blue-600 text-white px-4 py-2 w-full">
        Login
      </button>

      {/* ✅ SIGNUP LINK */}
      <p className="text-sm mt-3 text-center">
        New Admin?{" "}
        <span
          className="text-blue-600 cursor-pointer"
          onClick={() => navigate("/admin-signup")}
        >
          Signup
        </span>
      </p>
    </form>
  );
}
