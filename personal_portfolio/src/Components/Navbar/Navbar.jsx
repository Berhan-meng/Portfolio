// export default function Navbar() {
//   return (
//     <nav style={{ padding: 20, background: "#111", color: "#fff" }}>
//       <a href="#home">Home</a> |<a href="#about"> About</a> |
//       <a href="#services"> Services</a> |<a href="#portfolio"> Portfolio</a> |
//       <a href="#contact"> Contact</a>
//     </nav>
//   );
// }

export default function Navbar() {
  return (
    <header id="header" className="sticky-top">
      <nav className="primary-menu navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a href="#home" className="navbar-brand text-white">
            Berhanu Mengesha
          </a>

          <button
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#header-nav"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <div id="header-nav" className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a href="#home" className="nav-link">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="#about" className="nav-link">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a href="#services" className="nav-link">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a href="#portfolio" className="nav-link">
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a href="#contact" className="nav-link">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

