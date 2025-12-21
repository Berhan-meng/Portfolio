import React from "react";
import HeaderNav from "../HeaderList/HeaderNav.jsx";

export default function Accordion() {
  return (
    <div className="col col-lg-8 navbar-accordion">
      <button
        className="navbar-toggler ms-auto"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#header-nav"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <HeaderNav />
    </div>
  );
}
