import React, { useState } from "react";
import "./Products.css";

function Products() {
  const [products, setProducts] = useState([
    { id: 1, name: "Coffee", cares: "2 pcs", price: "$6.00" },
    { id: 2, name: "Tea", cares: "3 pcs", price: "$5.00" },
    { id: 3, name: "Sandwich", cares: "5 pcs", price: "$9.00" },
    { id: 4, name: "Notebook", cares: "8 pcs", price: "$5.00" },
  ]);

  // Add product (dummy for now)
  const addProduct = () => {
    const newProduct = {
      id: products.length + 1,
      name: "New Product",
      cares: "1 pcs",
      price: "$1.00",
    };
    setProducts([...products, newProduct]);
  };

  // Delete product
  const deleteProduct = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  // Edit product (for demo just alert)
  const editProduct = (id) => {
    const product = products.find((p) => p.id === id);
    alert(`Edit ${product.name}`);
  };

  return (
    <div className="products-container">
      <div className="products-header">
        <h2>Products</h2>
        <button className="add-btn" onClick={addProduct}>
          Add Product
        </button>
      </div>

      <table className="products-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Cares</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id}>
              <td>{p.name}</td>
              <td>{p.cares}</td>
              <td>{p.price}</td>
              <td>
                <button
                  className="edit-btn"
                  onClick={() => editProduct(p.id)}
                >
                  ✏️
                </button>
                <button
                  className="delete-btn"
                  onClick={() => deleteProduct(p.id)}
                >
                  🗑️
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Products;
