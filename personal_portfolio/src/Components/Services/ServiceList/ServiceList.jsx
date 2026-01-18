import { serviceList } from "./ServiceList.js";
import styles from "./ServiceList.module.css";
import { FaProjectDiagram } from "react-icons/fa";
export default function ServiceList() {
  return (
    <div className={styles.servicesContainer}>
      <div className={styles.serviceRow}>
        <div className={styles.serviceGrid}>
          <div className={styles.serviceRow}>
            {serviceList.map((item, i) => {
              return (
                <div
                  key={i}
                  className={styles.serviceItem}
                  // style={{ '--item-index': i } as React.CSSProperties}
                >
                  <div className={styles.featuredBox}>
                    <div className={styles.featuredBoxIcon}>
                      <FaProjectDiagram className={item.iconClassName} />
                    </div>
                    <h3 className={styles.serviceTitle}>{item.service}</h3>
                    <p className={styles.serviceDescription}>{item.desc}</p>

                    {/* Optional elements */}
                    {/* <span className={styles.serviceBadge}>Premium</span> */}
                    <span className={styles.serviceNumber}>{String(i + 1).padStart(2, '0')}</span> 
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
