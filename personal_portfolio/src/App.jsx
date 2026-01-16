import Navbar from "../src/Components/Navbar/Navbar.jsx";
import Home from "../src/Components/Home/Home.jsx";
import About from "../src/Components/About/About.jsx";
import Services from "../src/Components/Services/Services.jsx";
import Resume from "../src/Components/Resume/Resume.jsx";
import Portfolio from "../src/Components/Portfolio/Portfolio.jsx";
import Contact from "../src/Components/Contact/Contact.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Resume />
      <Portfolio />
      <Contact />
      {/* <Footer /> */}
    </>
  );
}
