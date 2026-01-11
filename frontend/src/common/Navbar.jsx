import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  if (!user) return null;

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="bg-gray-800 text-white px-6 py-3 flex justify-between">
      <span className="font-bold">Event Management System</span>

      <div className="flex gap-4 items-center">
        {user.role === "ADMIN" && (
          <>
            <Link to="/admin">Dashboard</Link>
            <Link to="/admin/users">Users</Link>
            <Link to="/admin/vendors">Vendors</Link>
            <Link to="/admin/reports">Reports</Link>
          </>
        )}

        {user.role === "VENDOR" && (
          <>
            <Link to="/vendor">Dashboard</Link>
            <Link to="/vendor/add">Add Item</Link>
            <Link to="/vendor/products">My Products</Link>
          </>
        )}

        {user.role === "USER" && (
          <>
            <Link to="/user">Dashboard</Link>
            <Link to="/user/products">Products</Link>
            <Link to="/user/cart">Cart</Link>
            <Link to="/user/orders">Orders</Link>
          </>
        )}

        <button
          onClick={handleLogout}
          className="bg-red-600 px-3 py-1 rounded"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}
