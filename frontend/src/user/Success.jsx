import { Link } from "react-router-dom";

export default function Success() {
  return (
    <div className="p-6 text-center">
      <h1 className="text-2xl font-bold text-green-600">Order Successful</h1>
      <Link to="/user/orders" className="block mt-4 text-blue-600">
        View Orders
      </Link>
    </div>
  );
}
