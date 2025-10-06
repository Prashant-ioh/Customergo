import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login/Login";
import Layout from "./Layout/Layout";
import Dashboard from "./Dashboard/Dashboard";
import Products from "./Products/Products";
import Billing from "./Billing/Billing";
import Orders from "./Orders/Orders";
import Reports from "./Reports/Reports";

function App() {
  return (
    <Router>
      <Routes>
        {/* Login */}
        <Route path="/" element={<Login />} />

        {/* Layout wrapper for Dashboard + Products */}
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/products" element={<Products />} />
          <Route path="/billing" element={<Billing />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/reports" element={<Reports />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
