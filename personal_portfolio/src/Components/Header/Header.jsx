import styles from "./Header.module.css";
import { NavLink, Link } from "react-router-dom";
import profileimg from "../../assets/Birhan.jpg";

export default function Header() {
  return (
    <header id="header" className={`sticky-top ${styles.header}`}>
      <nav className="primary-menu navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link to="/" className={`navbar-brand ${styles.navbarBrand}`}>
            <span className="bg-dark-2 rounded-pill p-2 mb-lg-1 d-lg-inline-block">
              <img
                className={`${styles.profileimg} img-fluid rounded-circle`}
                src={profileimg}
                title="I'm Birhan"
                alt=""
              />
            </span>
            Berhanu Mengesha
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#header-nav"
            aria-controls="header-nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
          <div id="header-nav" className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink
                  to="/"
                  end
                  className={({ isActive }) =>
                    isActive
                      ? `nav-link active ${styles.navLink}`
                      : `nav-link ${styles.navLink}`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive
                      ? `nav-link active ${styles.navLink}`
                      : `nav-link ${styles.navLink}`
                  }
                >
                  About
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/resume"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  Resume
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/services"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  Services
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/projects"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  Portfolio
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/testimonials"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  Testimonials
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
