import { socialIconList } from "./socialIconsList.js";

export default function SocialIcon() {
  return (
    <div className="col-auto col-lg-2 d-flex justify-content-end">
      <ul className="social-icons social-icons-light">
        {socialIconList.map((item) => (
          <li className={item.liClass} key={item.name}>
            <a
              href={item.href}
              target="_blank"
              rel="noreferrer"
              data-bs-toggle="tooltip"
              data-bs-placement={item.placement}
              title={item.tooltip}
            >
              <i className={item.icon}></i>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
