# 🎯 Event Management System (MERN Stack)

A full-stack **Event Management System** built using the **MERN Stack**
(MongoDB, Express.js, React.js, Node.js).

This project supports **multiple user roles** such as **Admin, Vendor, and User**
and provides role-based dashboards and functionalities for managing events, products, and requests.

---

## 📌 Project Overview

The Event Management System is designed to manage events and related services in a structured and secure way.

### What this project does:
- Allows users to **Signup & Login**
- Provides **role-based dashboards**
- Admin can manage users, vendors, and requests
- Vendors can add and manage items/products
- Users can browse products, manage cart, checkout, and send requests
- Secure authentication using JWT
- Clean frontend architecture using React + Vite

This project is suitable for:
- College / University Final Projects
- Client Projects
- MERN Stack Practice
- Resume / Portfolio Projects

---

## 🚀 Features

### 👤 Authentication
- Login & Signup
- JWT-based Authentication
- Global Auth State using React Context API
- Protected Routes

### 🧑‍💼 Admin Module
- Admin Dashboard
- Maintain Users
- Maintain Vendors
- Manage User Requests

### 🏪 Vendor Module
- Vendor Dashboard
- Add Items / Products
- Manage Products

### 🙋 User Module
- User Dashboard
- View Products
- Add to Cart
- Checkout
- Send Requests

### 🌐 Common Features
- Navbar & Footer
- Centralized API Service
- Modular Component Structure
- Error Handling & Not Found Page

---

## 🛠 Tech Stack

### Frontend
- React.js
- Vite
- JavaScript (ES6+)
- React Context API
- Axios
- HTML5
- TailwindCSS

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT (JSON Web Token)
- bcrypt.js
- dotenv
- cors

---

## 📂 Complete Project Folder Structure

```bash
Event-Management-System/
│
├── frontend/
│   ├── public/
│   │   └── index.html
│   │
│   ├── src/
│   │   ├── assets/
│   │   │   
│   │   │
│   │   ├── components/
│   │   │   ├── common/
│   │   │   │   ├── Navbar.jsx
│   │   │   │   └── Footer.jsx
│   │   │   │
│   │   │   ├── admin/
│   │   │   │   ├── AdminDashboard.jsx
│   │   │   │   ├── MaintainUsers.jsx
│   │   │   │   ├── MaintainVendors.jsx
│   │   │   │   └── ManageRequests.jsx
│   │   │   │
│   │   │   ├── vendor/
│   │   │   │   ├── VendorDashboard.jsx
│   │   │   │   ├── AddItem.jsx
│   │   │   │   └── ManageProducts.jsx
│   │   │   │
│   │   │   ├── user/
│   │   │   │   ├── UserDashboard.jsx
│   │   │   │   ├── Products.jsx
│   │   │   │   ├── Cart.jsx
│   │   │   │   ├── Checkout.jsx
│   │   │   │   └── Requests.jsx
│   │
│   │   ├── pages/
│   │   │   ├── Login.jsx
│   │   │   ├── Signup.jsx
│   │   │ 
│   │
│   │   ├── services/
│   │   │   └── api.js
│   │
│   │   ├── context/
│   │   │   └── AuthContext.jsx
│   │
│   │   ├── App.jsx
│   │   └── main.jsx
│
├── backend/
│   ├── config/
│   │   └── db.js
│   │
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── server.js
│   └── package.json
│
├── .gitignore
└── README.md
