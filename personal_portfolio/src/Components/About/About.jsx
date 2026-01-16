import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2>About Me</h2>

      <p>
        I am a passionate developer transitioning from Public Health into
        Software Development to build impactful digital solutions.
      </p>
    </motion.section>
  );
}
