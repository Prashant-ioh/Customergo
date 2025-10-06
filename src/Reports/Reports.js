import React, { useState } from "react";
import "./Reports.css";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const Reports = () => {
  const [salesData] = useState([
    { name: "Jan", sales: 40 },
    { name: "Feb", sales: 35 },
    { name: "Mar", sales: 50 },
    { name: "Apr", sales: 45 },
    { name: "May", sales: 70 },
    { name: "Jun", sales: 60 },
    { name: "Jul", sales: 55 },
  ]);

  const [products] = useState([
    { product: "Coffee", sales: 120 },
    { product: "Tea", sales: 90 },
    { product: "Sandwich", sales: 70 },
    { product: "Notebook", sales: 50 },
  ]);

  return (
    <div className="reports-container">
      <div className="header">
        <h2>Reports</h2>
        <button className="export-btn">Export</button>
      </div>

      {/* Filters */}
      <div className="filters">
        <input type="date" placeholder="From" />
        <input type="date" placeholder="To" />
        <select>
          <option>Payment Type</option>
          <option>Cash</option>
          <option>Card</option>
          <option>UPI</option>
        </select>
      </div>

      {/* Sales Chart */}
      <div className="card">
        <h3>Sales</h3>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={salesData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="sales" fill="#f97316" barSize={40} radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Top-Selling Products */}
      <div className="card">
        <h3>Top-Selling Products</h3>
        <table className="reports-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Sales</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p, idx) => (
              <tr key={idx}>
                <td>{p.product}</td>
                <td>{p.sales}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Reports;
