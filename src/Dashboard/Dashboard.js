import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import "./Dashboard.css";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function Dashboard() {
  // Dummy chart data
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Sales",
        data: [50, 100, 150, 120, 180, 220, 200],
        borderColor: "#4e73df",
        backgroundColor: "rgba(78, 115, 223, 0.2)",
      },
    ],
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      {/* <aside className="sidebar">
        <h2 className="logo">Billing System</h2>
        <ul>
          <li>📊 Dashboard</li>
          <li>📦 Products</li>
          <li>💳 Billing</li>
          <li>📋 Orders</li>
          <li>📑 Reports</li>
        </ul>
      </aside> */}

      {/* Main content */}
      <main className="main-content">
        <header className="dashboard-header">
          <h2>Dashboard</h2>
          <div className="user-info">
            <img
              src="https://via.placeholder.com/40"
              alt="user"
              className="user-img"
            />
            <span>John Doe</span>
          </div>
        </header>

        {/* Cards */}
        <section className="cards">
          <div className="card">
            <h3>Today's Sales</h3>
            <p>$1,250</p>
          </div>
          <div className="card">
            <h3>Orders</h3>
            <p>23</p>
          </div>
          <div className="card">
            <h3>Top Product</h3>
            <p>Coffee</p>
          </div>
        </section>

        {/* Chart */}
        <section className="chart-section">
          <h3>Sales</h3>
          <Line data={data} />
        </section>
      </main>
    </div>
  );
}

export default Dashboard;
