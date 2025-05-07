const products = [
{ id: 1, name: "Sepatu Sneakers", price: 250000, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1nxNZjzs-f1gJJRvRAWZ_JMJKFlS9EDXSeLjrWmn3b9DfNwMoSA&s=10&ec=72940544" },
{ id: 2, name: "Jaket Hoodie", price: 200000, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT19Cd2AehCY7kvqOBLmclurg1EXtMkKXkMbgKvgTAF_31RnIT4Vw&s=10&ec=72940544" },
{ id: 3, name: "Tas Ransel", price: 180000, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYYfuEIXzFH0RxZ-bABlL6XaenoMGHsOiUfAYOA-3sSZExCIweLw&s=10&ec=72940544" },
{ id: 4, name: "Jam Tangan", price: 300000, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-JLDTp5C_KdVTumJKUlOnkPeqrhv8pi-gFjmtNkaf7E6iZtdudw&s=10&ec=72940544" },
{ id: 5, name: "Kacamata Stylish", price: 150000, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOrlNtwkPgkW7y9750lKU4vLmYRHymzhvvrVxQRtXzJ8M86IsRgA&s=10&ec=72940544" },
];

let cart = JSON.parse(localStorage.getItem('cart')) || [];

function displayProducts() {
  const productList = document.getElementById("product-list");
  if (!productList) return;
  productList.innerHTML = "";
  products.forEach(product => {
    const col = document.createElement("div");
    col.className = "col-md-4 mb-4";
    col.innerHTML = `
      <div class="card product-card">
        <img src="${product.img}" class="card-img-top" alt="${product.name}">
        <div class="card-body">
          <h5 class="card-title">${product.name}</h5>
          <p class="card-text">Rp ${product.price.toLocaleString()}</p>
          <div class="d-flex justify-content-between">
            <button class="btn btn-danger" onclick="removeProduct(${product.id})"><i class="fas fa-trash"></i></button>
            <button class="btn btn-primary" onclick="addToCart(${product.id})">Tambah ke Keranjang</button>
          </div>
        </div>
      </div>
    `;
    productList.appendChild(col);
  });
}

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  cart.push(product);
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCart();
}

function removeProduct(productId) {
  alert("Produk telah dihapus dari tampilan sementara. Ini fitur placeholder.");
}

function updateCart() {
  const cartCount = document.getElementById("cart-count");
  if (cartCount) cartCount.textContent = cart.length;

  const cartItems = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");
  if (!cartItems || !cartTotal) return;

  cartItems.innerHTML = "";
  let total = 0;
  cart.forEach(item => {
    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-center";
    li.innerHTML = `${item.name} <span>Rp ${item.price.toLocaleString()}</span>`;
    cartItems.appendChild(li);
    total += item.price;
  });
  cartTotal.textContent = total.toLocaleString();
}

function checkout() {
  if (cart.length === 0) return alert("Keranjang kosong!");
  alert("Pembayaran berhasil. Terima kasih telah berbelanja!");
  cart = [];
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCart();
}

document.addEventListener("DOMContentLoaded", () => {
  displayProducts();
  updateCart();
});