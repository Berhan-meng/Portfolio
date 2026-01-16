import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="home" smooth={true} duration={500}>
        Home
      </Link>
      <Link to="about" smooth={true} duration={500}>
        About
      </Link>
      <Link to="services" smooth={true} duration={500}>
        Services
      </Link>
      <Link to="portfolio" smooth={true} duration={500}>
        Portfolio
      </Link>
      <Link to="contact" smooth={true} duration={500}>
        Contact
      </Link>
    </nav>
  );
}
