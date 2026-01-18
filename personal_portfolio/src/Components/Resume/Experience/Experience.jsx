import { experience } from "./Experience";
import { motion } from "framer-motion";
import styles from "./Experience.module.css"; 

export default function Experience() {
  return (
    <div className="col-md-6">
      <h2 className={`${styles.title} text-6 fw-600 mb-4`}>My Experience</h2>

      {experience.map((item, i) => (
        <motion.div
          key={item.position + i}
          className={`${styles.experienceCard} bg-white border rounded p-4 mb-4 shadow-sm`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.2 }}
          whileHover={{ scale: 1.02 }}
        >
          <p className={`${styles.yearBadge} bg-primary text-2 fw-400`}>{item.year}</p>
          <h3 className={`${styles.position} text-5 mt-2`}>{item.position}</h3>
          <p className={`${styles.organization} text-danger`}>{item.Organization}</p>
          <p className={`${styles.description} mb-0`}>{item.responsibility}</p>
        </motion.div>
      ))}
    </div>
  );
}
