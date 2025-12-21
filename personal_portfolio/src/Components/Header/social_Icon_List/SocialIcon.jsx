import { socialIconList } from "./socialIcons";

export default function SocialIcon() {
  return (
    <ul className="social-icons social-icons-muted social-icons-sm mt-lg-auto ms-auto ms-lg-0 d-flex">
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
  );
}
