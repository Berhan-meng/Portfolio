import { motion } from "framer-motion";
import Education from "./Education/Education.jsx";
import Experience from "./Experience/Experience.jsx";
import Skills1 from "./Skills/skills1.jsx";
import Skills2 from "./Skills/skills2.jsx";
import styles from "./Resume.module.css"; 

export default function Resume() {
  return (
    <section className={`${styles.section} ${styles.resume}`}>
      <div className={`${styles.container} px-lg-5`}>
        {/* Heading */}
        <div
          className={`${styles.headingWrapper} position-relative d-flex text-center mb-5`}
        >
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.4 }}
            transition={{ duration: 1, delay: 0.2 }}
            className={`${styles.headingBackground} text-uppercase fw-semibold w-100 mb-0`}
          >
            Summary
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-dark fw-semibold position-absolute w-100 align-self-center mb-0"
          >
            Resume
            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: "80px" }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className={`${styles.headingSeparator} border-bottom border-3 border-primary d-block mx-auto mt-2`}
            />
          </motion.p>
        </div>

        {/* Cards & Skills */}
        <div className="row gx-5">
          <Education />
          <Experience />
        </div>
        <div className="row gx-5">
          <Skills2 />
          <Skills1 />
        </div>

        {/* Download CV */}
        <div className="text-center mt-5">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={`rounded-pill shadow-none ${styles.btn}`}
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}
