import { Link } from "react-router-dom";

const VendorDashboard = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Vendor Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link
          to="/vendor/add-item"
          className="p-6 bg-green-100 rounded hover:bg-green-200 text-center"
        >
          Add Item
        </Link>
        <Link
          to="/vendor/products"
          className="p-6 bg-blue-100 rounded hover:bg-blue-200 text-center"
        >
          Manage Products
        </Link>
      </div>
    </div>
  );
};

export default VendorDashboard;
