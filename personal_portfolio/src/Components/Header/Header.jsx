import "./header.css";
import HeaderList from "./HeaderList/HeaderList.jsx";
import SocialIcon from "./social_Icon_List/socialIcon.jsx";

export default function Header() {
  return (
    <header id="header" className="sticky - top">
      {/* <!-- Navbar --> */}
      <nav
        className="primary_menu navbar navbar_expand_lg navbar_dark bg_dark border_bottom_0"
      >
        <div
          className="container-fluid position-relative h-100 flex-lg-column ps-3 px-lg-3 pt-lg-3 pb-lg-2"
        >
          {/* <Logo >  */}
          <a href="index.html" className={`mb-lg-auto mt-lg-4`}>
            <span
              className={`bg-dark-2 rounded-pill p-2 mb-lg-1 d-none d-lg-inline-block`}
            >
              <img
                className={`img-fluid rounded-pill d-block`}
                src="images/profile.jpg"
                title="I'm Simone"
                alt=""
              />
            </span>
            <h1 className={`text-5 text-white text-center mb-0 d-lg-block`}>
              Berhanu Mengesha
            </h1>
          </a>
          {/* <!-- Logo End --> */}

          <div
            id="header-nav"
            className={`collapse navbar-collapse w-100 my-lg-auto`}
          >
            <HeaderList />
          </div>
          <SocialIcon />
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
