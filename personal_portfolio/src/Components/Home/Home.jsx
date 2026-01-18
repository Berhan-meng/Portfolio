import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import heroImage from "../../assets/bc1.jpg";
import { HiOutlineArrowSmDown } from "react-icons/hi";

const MotionLink = motion.create(Link);

export default function Home() {
  return (
    <section className={styles.home} aria-label="Hero Section">
      <div className={styles.heroWrap}>
        {/* ===== Background Overlay ===== */}
        <div className={styles.heroMask} aria-hidden="true" />

        {/* ===== Background Image ===== */}
        <div
          className={styles.heroBg}
          style={{
            backgroundImage: `url(${heroImage})`,
          }}
          role="img"
          aria-label="Background image showing workspace setup"
        />

        {/* ===== Main Content ===== */}
        <div className={`${styles.heroContent} d-flex min-vh-100`}>
          <div className="container my-auto">
            <div className="row">
              <div className="col-12 text-center">
                {/* Welcome Text */}
                <motion.p
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className={`${styles.welcomeText} mb-2 mb-md-3`}
                >
                  Welcome
                </motion.p>

                {/* Main Heading */}
                <motion.h1
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="fw-semibold text-white mb-2 mb-md-3"
                >
                  Hello, I'm{" "}
                  <span className="text-primary">Berhanu Mengesha</span>
                </motion.h1>

                {/* Typed Animation */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className={styles.typedContainer}
                >
                  <ReactTyped
                    strings={[
                      "Frontend Developer",
                      "React Developer",
                      "Full Stack Developer",
                      "Public Health Professional",
                    ]}
                    typeSpeed={60}
                    backSpeed={40}
                    loop
                    className="text-light"
                  />
                </motion.div>

                {/* Location Text */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="text-light mb-4"
                >
                  Based in Addis Ababa, Ethiopia.
                </motion.p>

                {/* Main CTA Button */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="mt-3"
                >
                  <Link to="/contact" className={styles.btnPrimary}>
                    Hire Me
                  </Link>
                </motion.div>

                {/* Secondary Buttons */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1 }}
                  className="mt-4 d-flex flex-wrap justify-content-center gap-3"
                >
                  <Link to="/projects" className={styles.btnOutlineLight}>
                    View Projects
                  </Link>

                  <Link
                    to="/resume.pdf" className={styles.btnOutlineLight}
                    // className={styles.btnOutlinePrimary}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Download Resume PDF"
                  >
                    Download CV
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>

          {/* ===== Scroll Down Arrow ===== */}
          <MotionLink
            to="/about"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className={styles.scrollDownArrow}
            aria-label="Go to About Page"
          >
            <span className={styles.animated}>
             <HiOutlineArrowSmDown title="Back to Top" />
            </span>
          </MotionLink>
        </div>
      </div>
    </section>
  );
}
