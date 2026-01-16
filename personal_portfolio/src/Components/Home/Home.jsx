import { motion } from "framer-motion";
import Typed from "react-typed";

export default function Home() {
  return (
    <section id="home" style={{ padding: "100px", textAlign: "center" }}>
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hello, I'm Berhanu Mengesha
      </motion.h1>

      <Typed
        strings={[
          "Frontend Developer",
          "React Developer",
          "Public Health Professional",
        ]}
        typeSpeed={60}
        backSpeed={40}
        loop
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        style={{ marginTop: 20 }}
      >
        <a href="#contact" className="btn">
          Hire Me
        </a>
      </motion.div>
    </section>
  );
}
