import styles from "./Footer.module.css";
import { useState, useEffect } from "react";
import { HiOutlineArrowUp } from "react-icons/hi";

export default function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <footer
        id="footer"
        className={`${styles.footer} ${styles.footerGradient}`}
      >
        <div className={`${styles.footerContainer} container px-lg-5`}>
          <div className={styles.footerRow}>
            {/* Copyright Section */}
            <div className="col-lg-6 text-center text-lg-start">
              <p className={styles.copyright}>
                Copyright © {new Date().getFullYear()}{" "}
                <a href="#" className={styles.copyrightLink}>
                  Berhanu Mengesha
                </a>
                . All Rights Reserved.
              </p>
            </div>

            {/* Footer Navigation */}
            <div className="col-lg-6">
              <ul className={`${styles.footerNav} nav`}>
                <li className={styles.footerNavItem}>
                  <a
                    className={styles.footerNavLink}
                    data-bs-toggle="modal"
                    data-bs-target="#terms-policy"
                    href="#"
                    onClick={(e) => e.preventDefault()}
                  >
                    Terms & Policy
                  </a>
                </li>
                <li className={styles.footerNavItem}>
                  <a
                    className={styles.footerNavLink}
                    data-bs-toggle="modal"
                    data-bs-target="#disclaimer"
                    href="#"
                    onClick={(e) => e.preventDefault()}
                  >
                    Disclaimer
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Optional Additional Info */}
          <div className={styles.footerInfo}>
            <p>Built with React & Bootstrap • Designed for performance</p>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}

      <button
        className={`${styles.backToTop} ${showBackToTop ? styles.visible : ""}`}
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        <HiOutlineArrowUp title="Back to Top" />
      </button>

      {/* Terms & Policy Modal */}
      <div
        className="modal fade"
        id="terms-policy"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className={`modal-content ${styles.modalContent}`}>
            <div className={`modal-header ${styles.modalHeader}`}>
              <h5 className={`modal-title ${styles.modalTitle}`}>
                Terms & Policy
              </h5>
              <button
                type="button"
                className={`btn-close ${styles.modalClose}`}
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className={`modal-body ${styles.modalBody}`}>
              <p>
                Your terms and policy content goes here. This is a placeholder
                for your actual terms and conditions.
              </p>
              <p>
                Include information about privacy, data usage, cookies, and any
                other relevant policies for your website.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Disclaimer Modal */}
      <div
        className="modal fade"
        id="disclaimer"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className={`modal-content ${styles.modalContent}`}>
            <div className={`modal-header ${styles.modalHeader}`}>
              <h5 className={`modal-title ${styles.modalTitle}`}>Disclaimer</h5>
              <button
                type="button"
                className={`btn-close ${styles.modalClose}`}
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className={`modal-body ${styles.modalBody}`}>
              <p>
                This website and all projects showcased within it are created
                strictly for educational, learning, and portfolio demonstration
                purposes.
              </p>
              <p>
                Any projects that resemble existing platforms such as Amazon,
                Netflix, or other well-known services are non-commercial clone
                applications developed only to demonstrate technical skills in
                web app development. No trademarks, brands, or copyrighted
                materials are intended to be misused.
              </p>
              <ul>
                <li>This website does not offer commercial services.</li>
                <li>No real products, services, or subscriptions are sold.</li>
                <li>
                  All logos, brand names, and references belong to their
                  respective owners.
                </li>
                <li>
                  The projects are not affiliated with or endorsed by any
                  third-party companies.
                </li>
              </ul>
              <p>
                The purpose of this website is purely to showcase skills in
                full-stack programming.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
