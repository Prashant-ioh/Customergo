import React, { useState } from "react";
import "./Billing.css";

const products = [
  { id: 1, name: "Coffee", price: 4.3, category: "Coffee", image: "☕" },
  { id: 2, name: "Sandwich", price: 9.0, category: "Snack", image: "🥪" },
  { id: 3, name: "Latte", price: 5.0, category: "Coffee", image: "🍵" },
  { id: 4, name: "Tea", price: 3.5, category: "Tea", image: "🫖" },
];

function PosScreen() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [cart, setCart] = useState({});
  const [search, setSearch] = useState("");
  const [showCart, setShowCart] = useState(false);

  const categories = ["All", "Coffee", "Tea", "Snack", "Other"];

  // Add product to cart
  const addToCart = (product) => {
    setCart((prev) => {
      const newCart = { ...prev };
      if (newCart[product.id]) {
        newCart[product.id].qty += 1;
      } else {
        newCart[product.id] = { ...product, qty: 1 };
      }
      return newCart;
    });
  };

  // Update quantity
  const updateQty = (id, change) => {
    setCart((prev) => {
      const newCart = { ...prev };
      if (newCart[id]) {
        newCart[id].qty += change;
        if (newCart[id].qty <= 0) {
          delete newCart[id]; // remove if qty = 0
        }
      }
      return newCart;
    });
  };

  // Calculate total price
  const totalPrice = Object.values(cart).reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const filteredProducts = products.filter(
    (p) =>
      (selectedCategory === "All" || p.category === selectedCategory) &&
      p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="pos-container">
      {/* Header */}
      <div className="pos-header">
        <h2>Billing / POS Screen</h2>
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Tabs */}
      <div className="pos-tabs">
        {categories.map((cat) => (
          <button
            key={cat}
            className={selectedCategory === cat ? "active" : ""}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="pos-main">
        {/* Product grid */}
        <div className="pos-products">
          {filteredProducts.map((p) => (
            <div key={p.id} className="pos-card" onClick={() => addToCart(p)}>
              <div className="pos-image">{p.image}</div>
              <h4>{p.name}</h4>
              <p>${p.price.toFixed(2)}</p>
            </div>
          ))}
        </div>

        {/* Cart Sidebar */}
        {showCart && (
          <div className="cart-sidebar">
            <h3>Cart</h3>
            {Object.values(cart).length === 0 ? (
              <p>No items added</p>
            ) : (
              <ul>
                {Object.values(cart).map((item) => (
                  <li key={item.id} className="cart-item">
                    <span>{item.name}</span>
                    <div className="cart-controls">
                      <button onClick={() => updateQty(item.id, -1)}>-</button>
                      <span>{item.qty}</span>
                      <button onClick={() => updateQty(item.id, 1)}>+</button>
                    </div>
                    <span>${(item.price * item.qty).toFixed(2)}</span>
                  </li>
                ))}
              </ul>
            )}
            <hr />
            <p>Total: ${totalPrice.toFixed(2)}</p>
            <button className="checkout-btn">Checkout</button>
          </div>
        )}
      </div>

      {/* Footer with toggle button */}
      <div className="pos-footer">
        <p>
          Items: {Object.values(cart).reduce((sum, i) => sum + i.qty, 0)} | Total: $
          {totalPrice.toFixed(2)}
        </p>
        <button onClick={() => setShowCart(!showCart)} className="checkout-btn">
          {showCart ? "Hide Cart" : "View Cart"}
        </button>
      </div>
    </div>
  );
}

export default PosScreen;
