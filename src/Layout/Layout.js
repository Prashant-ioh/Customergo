import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./Layout.css";

function Layout() {
  return (
    <div className="layout-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2 className="logo">Billing System</h2>
        <ul>
          <li>
            <Link to="/dashboard">📊 Dashboard</Link>
          </li>
          <li>
            <Link to="/products">📦 Products</Link>
          </li>
          <li>
            <Link to="/billing">💳 Billing</Link>
          </li>
          <li>
            <Link to="/orders">📋 Orders</Link>
          </li>
          <li>
            <Link to="/reports">📑 Reports</Link>
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <Outlet /> {/* this will render Dashboard or Products */}
      </main>
    </div>
  );
}

export default Layout;
