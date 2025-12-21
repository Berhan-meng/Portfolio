import "./header.css";
import Nav from "./Nav/nav/Nav.jsx";

export default function Header() {
  return (
    <header id="header" className="sticky-top-slide">
      {/* <!-- Navbar --> */}
      <Nav />
      {/* <!-- Navbar End -->  */}
    </header>
  );
}
