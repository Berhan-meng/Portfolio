import { Routes, Route } from "react-router-dom";
import SharedLayout from "../Components/Layout/Layout.jsx";
import Home from "../Components/Home/Home.jsx";
import About from "../Components/About/About.jsx";
import Services from "../Components/Services/Services.jsx";
import Portfolio from "../Components/Portfolio/Portfolio.jsx";
import Contact from "../Components/Contact/Contact.jsx";
import Resume from "../Components/Resume/Resume.jsx";
import Testimonials from "../Components/Testimoinals/Testimonials.jsx";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/testimonials" element={<Testimonials />} />
      </Route>
    </Routes>
  );
}
