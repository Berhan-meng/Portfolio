import styles from "./Portfolio.module.css";
import { motion } from "framer-motion";
import { projects } from "./Projects.js";

export default function Portfolio() {
  return (
    <section id="portfolio" className={`section bg-light ${styles.portfolio}`}>
      <div className="container">
        {/* ===== Heading ===== */}
        <div
          className={`${styles.headingWrapper} position-relative d-flex text-center mb-5`}
        >
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.4 }}
            transition={{ duration: 1, delay: 0.2 }}
            className={`${styles.headingBackground} text-uppercase fw-semibold w-100 mb-0`}
          >
            Portfolio
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-dark fw-semibold position-absolute w-100 align-self-center mb-0"
          >
            My Works
            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: "80px" }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className={`${styles.headingSeparator} border-bottom border-3 border-primary d-block mx-auto mt-2`}
            />
          </motion.p>
        </div>

        {/* ===== Portfolio Grid ===== */}
        <div className="row g-4">
          {projects.map((project, idx) => (
            <div key={idx} className="col-sm-6 col-lg-4">
              <motion.div
                className={styles.portfolioBox}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className={styles.portfolioImg}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="img-fluid d-block rounded portfolio_img"
                  />
                  <div className={styles.portfolioOverlay}>
                    <a
                      className="stretched-link"
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    ></a>
                    <div className={styles.portfolioOverlayDetails}>
                      <h5 className="text-white fw-400">{project.title}</h5>
                      <span className="text-light">{project.category}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
