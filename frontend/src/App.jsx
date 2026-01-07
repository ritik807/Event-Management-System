import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";

import AdminDashboard from "./components/admin/AdminDashboard.jsx";
import MaintainUsers from "./components/admin/MaintainUsers.jsx";
import MaintainVendors from "./components/admin/MaintainVendors.jsx";
import ManageRequests from "./components/admin/ManageRequests.jsx";

import VendorDashboard from "./components/vendor/VendorDashboard.jsx";
import AddItem from "./components/vendor/AddItem.jsx";
import ManageProducts from "./components/vendor/ManageProducts.jsx";

import UserDashboard from "./components/user/UserDashboard.jsx";
import Products from "./components/user/Products.jsx";
import Cart from "./components/user/Cart.jsx";
import Checkout from "./components/user/Checkout.jsx";
import Requests from "./components/user/Requests.jsx";

import Navbar from "./components/common/Navbar.jsx";
import Footer from "./components/common/Footer.jsx";
import ProtectedRoute from "./components/common/ProtectedRoute.jsx";

function App() {
  return (
    <AuthProvider>
      
      <BrowserRouter>
        <Navbar /> 
        <Routes>
         
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          
          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute role="admin">
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/users"
            element={
              <ProtectedRoute role="admin">
                <MaintainUsers />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/vendors"
            element={
              <ProtectedRoute role="admin">
                <MaintainVendors />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/requests"
            element={
              <ProtectedRoute role="admin">
                <ManageRequests />
              </ProtectedRoute>
            }
          />

         
          <Route
            path="/vendor/dashboard"
            element={
              <ProtectedRoute role="vendor">
                <VendorDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/vendor/add-item"
            element={
              <ProtectedRoute role="vendor">
                <AddItem />
              </ProtectedRoute>
            }
          />
          <Route
            path="/vendor/products"
            element={
              <ProtectedRoute role="vendor">
                <ManageProducts />
              </ProtectedRoute>
            }
          />

        
          <Route
            path="/user/dashboard"
            element={
              <ProtectedRoute role="user">
                <UserDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/user/products"
            element={
              <ProtectedRoute role="user">
                <Products />
              </ProtectedRoute>
            }
          />
          <Route
            path="/user/cart"
            element={
              <ProtectedRoute role="user">
                <Cart />
              </ProtectedRoute>
            }
          />
          <Route
            path="/user/checkout"
            element={
              <ProtectedRoute role="user">
                <Checkout />
              </ProtectedRoute>
            }
          />
          <Route
            path="/user/requests"
            element={
              <ProtectedRoute role="user">
                <Requests />
              </ProtectedRoute>
            }
          />
        </Routes>
        <Footer /> 
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
