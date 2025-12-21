import { headerList } from "./headerList.js";

export default function HeaderList() {
  return (
    <ul className="navbar-nav text-lg-center my-lg-auto py-lg-3">
      {headerList.map((item) => (
        <li className="nav-item" key={item.link}>
          <a className="nav-link smooth-scroll" href={item.link}>
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );
}
