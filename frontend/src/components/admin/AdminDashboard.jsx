import { Link } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link to="/admin/users" className="p-6 bg-blue-100 rounded hover:bg-blue-200 text-center" >
          Manage Users
        </Link>
        <Link to="/admin/vendors" className="p-6 bg-green-100 rounded hover:bg-green-200 text-center">
          Manage Vendors
        </Link>
        <Link to="/admin/requests" className="p-6 bg-yellow-100 rounded hover:bg-yellow-200 text-center">
          Manage Requests
        </Link>
      </div>
    </div>
  );
};

export default AdminDashboard;
