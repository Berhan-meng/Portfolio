import React from "react";
import styles from "./header.module.css"

export default function Header() {
  return (
    <header id="header" className={styles.sticky-top}>
      {/* <!-- Navbar --> */}
      <nav className={`${styles.primary_menu} ${styles.navbar} ${styles.navbar_expand_lg} ${styles.navbar_dark} ${styles.bg_dark} ${styles.border_bottom_0}`}>
        <div className="container-fluid position-relative h-100 flex-lg-column ps-3 px-lg-3 pt-lg-3 pb-lg-2">
          {/* <Logo >  */}
          <a href="index.html" className="mb-lg-auto mt-lg-4">
            <span className="bg-dark-2 rounded-pill p-2 mb-lg-1 d-none d-lg-inline-block">
              <img
                className="img-fluid rounded-pill d-block"
                src="images/profile.jpg"
                title="I'm Simone"
                alt=""
              />
            </span>
            <h1 className="text-5 text-white text-center mb-0 d-lg-block">
              Simone Olivia
            </h1>
          </a>
          {/* <!-- Logo End --> */}

          <div
            id="header-nav"
            className="collapse navbar-collapse w-100 my-lg-auto"
          >
            <ul className="navbar-nav text-lg-center my-lg-auto py-lg-3">
              <li className="nav-item">
                <a className="nav-link smooth-scroll active" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link smooth-scroll" href="#about">
                  About Me
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link smooth-scroll" href="#services">
                  What I Do
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link smooth-scroll" href="#resume">
                  Resume
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link smooth-scroll" href="#portfolio">
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link smooth-scroll" href="#testimonial">
                  Testimonial
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link smooth-scroll" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <ul className="social-icons social-icons-muted social-icons-sm mt-lg-auto ms-auto ms-lg-0 d-flex">
            <li className="social-icons-facebook">
              <a
                data-bs-toggle="tooltip"
                title="Facebook"
                href="http://www.facebook.com/"
                target="_blank"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li className="social-icons-twitter">
              <a
                data-bs-toggle="tooltip"
                title="Twitter"
                href="http://www.twitter.com/"
                target="_blank"
              >
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li className="social-icons-dribbble">
              <a
                data-bs-toggle="tooltip"
                title="Dribbble"
                data-bs-placement="top"
                href="http://www.dribbble.com/"
                target="_blank"
              >
                <i className="fab fa-dribbble"></i>
              </a>
            </li>
            <li className="social-icons-github">
              <a
                data-bs-toggle="tooltip"
                title="GitHub"
                data-bs-placement="top"
                href="http://www.google.com/"
                target="_blank"
              >
                <i className="fab fa-github"></i>
              </a>
            </li>
          </ul>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#header-nav"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>
      {/* <!-- Navbar End -->  */}
    </header>
  );
}
