import { motion } from "framer-motion";
import Featured from "./Featured/Featured.jsx";
import styles from "./About.module.css";

export default function About() {
  return (
    <motion.section
      id="about"
      className={styles.section}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
    >
      <div className={`${styles.container} px-lg-5`}>
        {/* ===== Heading Section ===== */}
        <div
          className={`${styles.headingWrapper} position-relative d-flex text-center mb-5`}
        >
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.4 }}
            transition={{ duration: 1, delay: 0.2 }}
            className={`${styles.headingBackground} text-uppercase fw-semibold w-100 mb-0`}
          >
            About Me
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-dark fw-semibold position-absolute w-100 align-self-center mb-0"
          >
            Know Me More
            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: "80px" }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className={`${styles.headingSeparator} border-bottom border-3 border-primary d-block mx-auto mt-2`}
            />
          </motion.p>
        </div>

        <div className="row gy-5">
          {/* ===== Left Column - About Text ===== */}
          <motion.div
            className="col-lg-7 col-xl-8 text-center text-lg-start"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className={`${styles.mainHeading} fw-semibold mb-4`}>
              I'm <span className="text-primary">Berhanu Mengesha,</span> a{" "}
              <motion.span
                className={styles.highlight}
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                Full Stack Developer
              </motion.span>
            </h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className={styles.description}
            >
              I'm a passionate developer with a unique background in{" "}
              <strong>Public Health</strong>, transitioning into software
              development to build impactful digital solutions that solve
              real-world problems. My journey combines technical expertise with
              a deep understanding of user needs.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className={styles.description}
            >
              I specialize in creating responsive, accessible, and performant
              web applications using modern technologies like React, Node.js,
              and cloud platforms. My healthcare background gives me a unique
              perspective on creating user-centered applications that make a
              difference in people's lives.
            </motion.p>
          </motion.div>

          {/* ===== Right Column - Personal Info ===== */}
          <motion.div
            className="col-lg-5 col-xl-4"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="ps-lg-4">
              <ul className="list-unstyled">
                <motion.li
                  className="mb-3"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                >
                  <span className="fw-semibold me-2 text-primary">Name:</span>
                  Berhanu Mengesha
                </motion.li>

                <motion.li
                  className="mb-3"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.6 }}
                >
                  <span className="fw-semibold me-2 text-primary">Email:</span>
                  <a
                    href="mailto:contact@berhanu.dev"
                    className={styles.emailLink}
                  >
                    contact@berhanu.dev
                  </a>
                </motion.li>

                <motion.li
                  className="mb-3"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.7 }}
                >
                  <span className="fw-semibold me-2 text-primary">
                    Experience:
                  </span>
                  2+ Years
                </motion.li>

                <motion.li
                  className="mb-4"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.8 }}
                >
                  <span className="fw-semibold me-2 text-primary">From:</span>
                  Addis Ababa, Ethiopia
                </motion.li>
              </ul>

              <div className="d-flex flex-wrap gap-2">
                <motion.a
                  href="/resume.pdf"
                  className={`${styles.downloadBtn} btn btn-primary rounded-pill`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  download
                >
                  <i className="fas fa-download me-2"></i>
                  Download CV
                </motion.a>

                <motion.a
                  href="#contact"
                  className={`${styles.contactBtn} btn btn-outline-primary rounded-pill`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className="fas fa-envelope me-2"></i>
                  Contact Me
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ===== Featured Section ===== */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <Featured />
        </motion.div>
      </div>
    </motion.section>
  );
}
