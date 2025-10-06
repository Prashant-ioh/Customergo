import React from "react";
import "./Orders.css";

const Orders = () => {
  const orders = [
    { id: "1072", date: "19-6-24", customer: "Jotian", total: "$6.00" },
    { id: "1043", date: "19-01-21", customer: "Heward", total: "$5.00" },
    { id: "1020", date: "17-01-33", customer: "Josce", total: "$2.30" },
    { id: "1059", date: "18-05-23", customer: "Powed", total: "$6.00" },
  ];

  const topProducts = [
    { product: "OCad", sold: "1,012" },
    { product: "Cashmer", sold: "$12" },
  ];

  return (
    <div className="orders-container">
      <h2>Orders</h2>

      {/* Orders Table */}
      <div className="card">
        <h3>Cart</h3>
        <table className="orders-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Date</th>
              <th>Customer</th>
              <th>Total Amount</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index}>
                <td>{order.id}</td>
                <td>{order.date}</td>
                <td>{order.customer}</td>
                <td>{order.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Top Products */}
      <div className="card">
        <h3>Top-Selling Products</h3>
        <table className="products-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Sales</th>
            </tr>
          </thead>
          <tbody>
            {topProducts.map((item, index) => (
              <tr key={index}>
                <td>{item.product}</td>
                <td>{item.sold}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
