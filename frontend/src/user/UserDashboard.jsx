import { Link } from "react-router-dom";

export default function UserDashboard() {
  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">User Dashboard</h1>

      <div className="flex gap-3 flex-wrap">
        <Link to="/user/products" className="px-4 py-2 bg-blue-600 text-white rounded">
          View Products
        </Link>
        <Link to="/user/cart" className="px-4 py-2 bg-green-600 text-white rounded">
          Cart
        </Link>
        <Link to="/user/orders" className="px-4 py-2 bg-purple-600 text-white rounded">
          Orders
        </Link>
        <Link to="/user/requests" className="px-4 py-2 bg-gray-700 text-white rounded">
          My Requests
        </Link>
      </div>
    </div>
  );
}
