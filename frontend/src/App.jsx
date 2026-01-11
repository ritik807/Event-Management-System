import { Routes, Route } from "react-router-dom";
import Navbar from "./common/Navbar";
import Footer from "./common/Footer";
import ProtectedRoute from "./common/ProtectedRoute";
import Index from "./index/Index";
import AdminLogin from "./auth/AdminLogin";
import VendorLogin from "./auth/VendorLogin";
import UserLogin from "./auth/UserLogin";

import AdminSignup from "./auth/AdminSignup";
import VendorSignup from "./auth/VendorSignup";
import UserSignup from "./auth/UserSignup";
import AdminDashboard from "./admin/AdminDashboard";
import MaintainUser from "./admin/MaintainUser";
import MaintainVendor from "./admin/MaintainVendor";
import Reports from "./admin/Reports";

import VendorDashboard from "./vendor/VendorDashboard";
import AddItem from "./vendor/AddItem";
import VendorPage from "./vendor/VendorPage";
import UpdateItem from "./vendor/UpdateItem";
import UserDashboard from "./user/UserDashboard";
import ProductList from "./user/ProductList";
import Cart from "./user/Cart";
import Checkout from "./user/Checkout";
import Success from "./user/Success";
import OrderStatus from "./user/OrderStatus";
import RequestItem from "./user/RequestItem";
import AddMembership from "./admin/AddMembership";
import UpdateMembership from "./admin/UpdateMembership";


export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Index />} />

        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/vendor-login" element={<VendorLogin />} />
        <Route path="/user-login" element={<UserLogin />} />

        <Route path="/admin-signup" element={<AdminSignup />} />
        <Route path="/vendor-signup" element={<VendorSignup />} />
        <Route path="/user-signup" element={<UserSignup />} />

        <Route
          path="/admin"
          element={
            <ProtectedRoute allowedRoles={["ADMIN"]}>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/users"
          element={
            <ProtectedRoute allowedRoles={["ADMIN"]}>
              <MaintainUser />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/vendors"
          element={
            <ProtectedRoute allowedRoles={["ADMIN"]}>
              <MaintainVendor />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/reports"
          element={
            <ProtectedRoute allowedRoles={["ADMIN"]}>
              <Reports />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/membership/add"
          element={
            <ProtectedRoute allowedRoles={["ADMIN"]}>
              <AddMembership />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/membership/update/:id"
          element={
            <ProtectedRoute allowedRoles={["ADMIN"]}>
              <UpdateMembership />
            </ProtectedRoute>
          }
        />



        <Route
          path="/vendor"
          element={
            <ProtectedRoute allowedRoles={["VENDOR"]}>
              <VendorDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/vendor/add"
          element={
            <ProtectedRoute allowedRoles={["VENDOR"]}>
              <AddItem />
            </ProtectedRoute>
          }
        />
        <Route
          path="/vendor/products"
          element={
            <ProtectedRoute allowedRoles={["VENDOR"]}>
              <VendorPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/vendor/update/:id"
          element={
            <ProtectedRoute allowedRoles={["VENDOR"]}>
              <UpdateItem />
            </ProtectedRoute>
          }
        />


        <Route
          path="/user"
          element={
            <ProtectedRoute allowedRoles={["USER"]}>
              <UserDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/user/products"
          element={
            <ProtectedRoute allowedRoles={["USER"]}>
              <ProductList />
            </ProtectedRoute>
          }
        />
        <Route
          path="/user/cart"
          element={
            <ProtectedRoute allowedRoles={["USER"]}>
              <Cart />
            </ProtectedRoute>
          }
        />
        <Route
          path="/user/checkout"
          element={
            <ProtectedRoute allowedRoles={["USER"]}>
              <Checkout />
            </ProtectedRoute>
          }
        />
        <Route
          path="/user/success"
          element={
            <ProtectedRoute allowedRoles={["USER"]}>
              <Success />
            </ProtectedRoute>
          }
        />
        <Route
          path="/user/orders"
          element={
            <ProtectedRoute allowedRoles={["USER"]}>
              <OrderStatus />
            </ProtectedRoute>
          }
        />
        <Route
          path="/user/requests"
          element={
            <ProtectedRoute allowedRoles={["USER"]}>
              <RequestItem />
            </ProtectedRoute>
          }
        />
      </Routes>

      <Footer />
    </>
  );
}
