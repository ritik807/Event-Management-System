import { Link } from "react-router-dom";

const UserDashboard = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">User Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link
          to="/user/products"
          className="p-6 bg-blue-100 rounded hover:bg-blue-200 text-center"
        >
          Products
        </Link>
        <Link
          to="/user/cart"
          className="p-6 bg-green-100 rounded hover:bg-green-200 text-center"
        >
          Cart
        </Link>
        <Link
          to="/user/checkout"
          className="p-6 bg-yellow-100 rounded hover:bg-yellow-200 text-center"
        >
          Checkout
        </Link>
        <Link
          to="/user/requests"
          className="p-6 bg-purple-100 rounded hover:bg-purple-200 text-center"
        >
          Requests
        </Link>
      </div>
    </div>
  );
};

export default UserDashboard;
