import { headerNavList } from "./headerNav.js";

export default function HeaderNav() {
  return (
    <div
      id="header-nav"
      className="collapse navbar-collapse justify-content-center"
    >
      <ul className="navbar-nav text-lg-center my-lg-auto py-lg-3">
        {headerNavList.map((item) => (
          <li className="nav-item" key={item.link}>
            <a className="nav-link smooth-scroll" href={item.link}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
