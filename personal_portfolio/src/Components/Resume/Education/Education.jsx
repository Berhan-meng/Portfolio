import { education } from "./Education.js";
import { motion } from "framer-motion";
import styles from "./Education.module.css";

export default function Education() {
  return (
    <div className="col-md-6">
      <h2 className={styles.title}>My Education</h2>

      {education.map((item, i) => (
        <motion.div
          key={item.field + i}
          className={styles.educationCard}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.2 }}
          whileHover={{ scale: 1.02 }}
        >
          <span className={styles.yearBadge}>{item.year}</span>
          <h3 className={styles.field}>{item.field}</h3>
          <p className={styles.institution}>{item.institution}</p>
          <p className={styles.description}>{item.desc}</p>
          <div className={styles.educationIcon}>
            <i className="fas fa-graduation-cap"></i>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
