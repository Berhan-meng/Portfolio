import Navbar from "../src/Components/Navbar/Navbar.jsx";
import Home from "../src/Components/Home/Home.jsx";
import About from "../src/Components/About/About.jsx";
import Services from "../src/Components/Services/Services.jsx";
import Resume from "../src/Components/Resume/Resume.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Resume />
      {/* <Portfolio /> */}
      {/* <Contact /> */}
      {/* <Footer /> */}
    </>
  );
}
