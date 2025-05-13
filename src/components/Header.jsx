import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow">
        <div className="container-fluid">
          {/* Logo Brand */}
          <Link className="navbar-brand fw-bold d-flex align-items-center" to="/">
            🛠️ <span className="ms-2">JLD Tools</span>
          </Link>

          {/* Toggle untuk mobile */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
            aria-controls="navbarContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar Content */}
          <div className="collapse navbar-collapse" id="navbarContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {/* Dropdown Kategori */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="kategoriDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Kategori
                </a>
                <ul className="dropdown-menu" aria-labelledby="kategoriDropdown">
                  <li><Link className="dropdown-item" to="/kategori/Drill">Drill</Link></li>
                  <li><Link className="dropdown-item" to="/kategori/Wrench">Wrench</Link></li>
                  <li><Link className="dropdown-item" to="/kategori/Saw">Saw</Link></li>
                  <li><Link className="dropdown-item" to="/kategori/Hammer">Hammer</Link></li>
                  <li><Link className="dropdown-item" to="/kategori/Grinder">Grinder</Link></li>
                  <li><Link className="dropdown-item" to="/kategori/Shears">Shears</Link></li>
                  <li><Link className="dropdown-item" to="/kategori/Lawn Mower">Lawn Mower</Link></li>
                </ul>
              </li>

              {/* Shortcut navigasi lainnya */}
              <li className="nav-item">
                <Link className="nav-link" to="/">Beranda</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/tentang">Tentang Kami</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/kontak">Kontak</Link>
              </li>
            </ul>

            {/* Search bar */}
            <form className="d-flex me-3" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Cari produk..."
                aria-label="Search"
              />
              <button className="btn btn-outline-light" type="submit">Cari</button>
            </form>

            {/* Cart & Login Buttons */}
            <div className="d-flex">
              <Link className="btn btn-outline-light me-2" to="/cart">🛒 Cart</Link>
              <Link className="btn btn-outline-light" to="/login">🔑 Login</Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
