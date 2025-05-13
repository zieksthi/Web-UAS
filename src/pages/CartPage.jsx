import React, { useState } from "react";

function CartPage() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Produk 1", price: 50000 },
    { id: 2, name: "Produk 2", price: 75000 },
  ]);

  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  const handleCheckout = () => {
    alert("Proses pembayaran dimulai!");
    // Bisa tambah redirect atau fungsi pembayaran
  };

  return (
    <div className="container my-5">
      <h3>Keranjang Belanja</h3>
      <ul className="list-group mt-3">
        {cartItems.map((item) => (
          <li key={item.id} className="list-group-item d-flex justify-content-between">
            <span>{item.name}</span>
            <span>Rp {item.price.toLocaleString("id-ID")}</span>
          </li>
        ))}
      </ul>
      <div className="mt-3">
        <strong>Total: Rp {total.toLocaleString("id-ID")}</strong>
      </div>
      <button className="btn btn-success mt-3" onClick={handleCheckout}>
        Bayar Sekarang
      </button>
    </div>
  );
}

export default CartPage;
