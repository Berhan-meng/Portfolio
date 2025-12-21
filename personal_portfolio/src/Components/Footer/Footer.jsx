import React from 'react'

export default function Footer() {
  return (
    <footer id="footer" className="section">
      <div className="container px-lg-5">
        <div className="row">
          <div className="col-lg-6 text-center text-lg-start">
            <p className="mb-3 mb-lg-0">
              Copyright © 2022{" "}
              <a href="#" className="fw-500">
                Simone
              </a>
              . All Rights Reserved.
            </p>
          </div>
          <div className="col-lg-6">
            <ul className="nav nav-separator justify-content-center justify-content-lg-end">
              <li className="nav-item">
                {" "}
                <a
                  className="nav-link"
                  data-bs-toggle="modal"
                  data-bs-target="#terms-policy"
                  href="#"
                >
                  Terms & Policy
                </a>
              </li>
              <li className="nav-item">
                {" "}
                <a
                  className="nav-link"
                  data-bs-toggle="modal"
                  data-bs-target="#disclaimer"
                  href="#"
                >
                  Disclaimer
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
