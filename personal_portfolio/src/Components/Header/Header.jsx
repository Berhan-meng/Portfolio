import { useState } from "react";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";
import profileimg from "../../assets/Birhan.jpg";

export default function Header() {
  const [showDisclaimer, setShowDisclaimer] = useState(false);

  return (
    <>
      <header className={`sticky-top ${styles.header} header`}>
        <nav className="primary-menu navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <div
              className={`navbar-brand ${styles.navbarBrand}`}
              onClick={() => setShowDisclaimer(true)}
              style={{ cursor: "pointer" }}
            >
              <span className="bg-dark-2 rounded-pill p-2 mb-lg-1 d-lg-inline-block">
                <img
                  className={`${styles.profileimg} img-fluid rounded-circle`}
                  src={profileimg}
                  title="I'm Berhanu"
                  alt="Profile"
                />
              </span>
              Berhanu Mengesha
            </div>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#header-nav"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div id="header-nav" className="collapse navbar-collapse">
              <ul className="navbar-nav ms-auto">
                {[
                  ["Home", "/"],
                  ["About", "/about"],
                  ["Resume", "/resume"],
                  ["Services", "/services"],
                  ["Portfolio", "/projects"],
                  ["Testimonials", "/testimonials"],
                  ["Contact", "/contact"],
                ].map(([label, path]) => (
                  <li className="nav-item" key={path}>
                    <NavLink
                      to={path}
                      end
                      className={({ isActive }) =>
                        isActive ? "nav-link active" : "nav-link"
                      }
                    >
                      {label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </header>

      {/* ===== MODAL ===== */}
      {showDisclaimer && (
        <div
          className={styles.modalOverlay}
          onClick={() => setShowDisclaimer(false)}
        >
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={profileimg}
              className="img-fluid rounded-circle mb-3"
              width="120"
              alt=""
            />

            <h3> I'M Berhanu Mengesha</h3>
            <p>
              I’m Berhanu Mengesha, a Full Stack Developer with a strong
              foundation in Public Health and Project Management. I transitioned
              into software development with a clear goal to build practical
              digital solutions that address real-world challenges, especially
              in the healthcare sector.
            </p>

            <button
              className="btn btn-dark"
              onClick={() => setShowDisclaimer(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
