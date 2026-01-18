import styles from "./Testimonials.module.css";
import { motion } from "framer-motion";
import testimonials from "./Testimonials.js";

export default function Testimonials() {

  return (
    <section id="testimonial" className={styles.section}>
      <div className="container px-lg-5">
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
            Testimonials
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-dark fw-semibold position-absolute w-100 align-self-center mb-0"
          >
            What Clients Say
            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: "80px" }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className={`${styles.headingSeparator} d-block mx-auto mt-2`}
            />
          </motion.p>
        </div>
        {/* Heading end */}

        <div className="row">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="col-lg-6 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={styles.testimonialCard}>
                <div className={styles.clientInfo}>
                  <img
                    className={styles.clientImage}
                    src={testimonial.image}
                    alt={testimonial.name}
                  />
                  <div className={styles.clientDetails}>
                    <strong className={styles.clientName}>
                      {testimonial.name}
                    </strong>
                    <span className={styles.clientRole}>
                      {testimonial.role}
                    </span>
                  </div>
                </div>
                <p className={styles.testimonialText}>{testimonial.text}</p>
                <div className={styles.stars}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <i key={i} className={`fas fa-star ${styles.starIcon}`}></i>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
