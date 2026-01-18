import { skills1 } from "./skills.js";
import { motion } from "framer-motion";
import styles from "./Skills.module.css"; 

export default function Skills1() {
  return (
    <div className={`col-md-6 ${styles.skillsContainer}`}>
      {skills1.map((skill, i) => (
        <div key={skill.name} className={styles.skillItem}>
          <div className={styles.skillHeader}>
            <span className={styles.skillName}>{skill.name}</span>
            <span className={styles.skillLevel}>{skill.level}%</span>
          </div>

          <div className={styles.progressContainer}>
            <motion.div
              className={styles.progressBar}
              role="progressbar"
              initial={{ width: 0 }}
              animate={{ width: `${skill.level}%` }}
              transition={{ duration: 1, delay: i * 0.2 }}
              aria-valuenow={skill.level}
              aria-valuemin={0}
              aria-valuemax={100}
            ></motion.div>
          </div>
        </div>
      ))}
    </div>
  );
}
