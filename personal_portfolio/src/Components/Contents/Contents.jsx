import Home from "../Home/Home";
import About from "../About/About";
import Services from "../Services/Services";
import Resume from "../Resume/Resume";
import Mywork from "../MyWork/Mywork";
import Testimonials from "../Testimonials/Testimonials";
import Contact from "../Contact/Contact";

export default function Contents() {
  return (
    <div id="content" role="main">
      <Home />
      <About />
      <Services />
      <Resume />
      <Mywork />
      <Testimonials />
      <Contact />
    </div>
  );
}
