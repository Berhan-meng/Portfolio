
import Accordion from "./Accordion/Accordion.jsx";
import Profile from "./Profile/Profile.jsx";
import SocialIcon from "./social_Icon_List/socialIcon.jsx";

export default function Nav() {
  return (
    <nav className="primary-menu navbar navbar-expand-lg navbar-dark bg-transparent border-bottom-0">
      <div className="container-fluid position-relative g-lg-4">
        <Profile />
        <Accordion />
        <SocialIcon />
      </div>
    </nav>
  );
}
