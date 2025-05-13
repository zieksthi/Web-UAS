import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaPhone, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-dark text-light pt-5 pb-4">
      <div className="container text-center">
        <div className="row justify-content-center">
          {/* Kolom Tentang Kami */}
          <div className="col-md-3 col-sm-6 mb-4">
            <h5 className="text-warning mb-3">Tentang Kami</h5>
            <p style={{ fontSize: "14px" }}>
              Kami adalah toko online terpercaya yang menyediakan berbagai macam kebutuhan dengan harga terbaik.
            </p>
          </div>

          {/* Kolom Kontak */}
          <div className="col-md-3 col-sm-6 mb-4">
            <h5 className="text-warning mb-3">Kontak</h5>
            <p className="mb-1">
              <FaPhone className="me-2" /> +62 812 3456 7890
            </p>
            <p>
              <FaEnvelope className="me-2" /> JLD Tools@gmail.com
            </p>
          </div>

          {/* Kolom Ikuti Kami */}
          <div className="col-md-3 col-sm-6 mb-4">
            <h5 className="text-warning mb-3">Ikuti Kami</h5>
            <div className="d-flex justify-content-center gap-3">
              <a href="#" className="text-light" aria-label="Facebook">
                <FaFacebook size={28} />
              </a>
              <a href="#" className="text-light" aria-label="Twitter">
                <FaTwitter size={28} />
              </a>
              <a href="#" className="text-light" aria-label="Instagram">
                <FaInstagram size={28} />
              </a>
            </div>
          </div>
        </div>

        <hr className="border-secondary my-4" />

        {/* Bagian Bawah */}
        <div className="row justify-content-center">
          <div className="col-auto">
            <p className="mb-1" style={{ fontSize: "13px" }}>
              © {new Date().getFullYear()} JLD Tools. All Rights Reserved.
            </p>
            <p className="mb-0" style={{ fontSize: "13px" }}>
              Dibuat dengan ❤️ oleh Tim Dev
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
