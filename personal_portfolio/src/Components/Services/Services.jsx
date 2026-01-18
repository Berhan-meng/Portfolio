import SectionWrapper from "../SectionWrapper/SectionWraper";
import styles from "./Services.module.css";
import ServiceList from "./ServiceList/ServiceList.jsx";
import { motion } from "framer-motion";

export default function Services() {
  return (
    <SectionWrapper>
      <section id="services" className="section bg-light">
        <div className="container px-lg-5">
          {/* <!-- Heading --> */}
          <div
            className={`${styles.headingWrapper} position-relative d-flex text-center mb-5`}
          >
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.4 }}
              transition={{ duration: 1, delay: 0.2 }}
              className={`${styles.headingBackground} text-uppercase fw-semibold w-100 mb-0`}
            >
              Services
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-dark fw-semibold position-absolute w-100 align-self-center mb-0"
            >
              What I Do
              <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: "80px" }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className={`${styles.headingSeparator} border-bottom border-3 border-primary d-block mx-auto mt-2`}
              />
            </motion.p>
          </div>
          {/* <!-- Heading end--> */}
          <ServiceList />
        </div>
      </section>
    </SectionWrapper>
  );
}