import styles from "./Contact.module.css";
import axiosBase from "../Api/axios.js";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  FaLinkedin,
  FaTelegram,
  FaFacebookF,
  FaEnvelope,
  FaGithub,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setStatus("Sending...");

      const response = await axiosBase.post("/contact", formData);

      if (response.data.success) {
        toast.success("Message sent successfully!!");

        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Server responded with error");
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Failed to send message. Try again.",
      );

      setStatus("Failed to send message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>
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
            Contact
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-dark fw-semibold position-absolute w-100 align-self-center mb-0"
          >
            Contact Me
            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: "80px" }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className={`${styles.headingSeparator} d-block mx-auto mt-2`}
            />
          </motion.p>
        </div>

        <div className={`${styles.row} gy-5`}>
          {/* Contact Info Column */}
          <div className={`${styles.contactColumn} text-center text-md-start`}>
            <div className={styles.contactInfoCard}>
              <h2 className={styles.contactTitle}>Address</h2>
              {/* Address */}
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>
                  <FaMapMarkerAlt />
                </span>
                <span>Debre Birhan, Ethiopia</span>
              </div>

              {/* Phone */}
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>
                  <FaPhoneAlt />
                </span>
                <span>
                  +251 925 637 745 <br />
                  +251 707 648 785
                </span>
              </div>

              {/* Email */}
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>
                  <FaEnvelope title="Email" />
                </span>
                <span>
                  <a
                    href="mailto:berhanumengesha3@gmail.com"
                    className={styles.contactLink}
                  >
                    berhanumengesha3@gmail.com
                  </a>
                </span>
              </div>

              <h2 className={`${styles.socialTitle} mt-4`}>Follow Me</h2>
              <ul className={styles.socialList}>
                <li className={styles.socialItem}>
                  <a
                    href="https://www.linkedin.com/in/berhanu-mengesha/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin title="Linkedin" />
                  </a>
                </li>
                <li className={styles.socialItem}>
                  <a
                    href="https://t.me/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaTelegram
                      title="Telegram"
                      style={{
                        color: "white",
                        background: "#1877F2",
                        width: "60px",
                        height: "40px",
                        borderRadius: "50%",
                        padding: "10px",
                      }}
                    />
                  </a>
                </li>
                <li className={styles.socialItem}>
                  <a
                    href="https://web.facebook.com/birhanu.mengesha.33/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebookF title="Facebook" />
                  </a>
                </li>
                <li className={styles.socialItem}>
                  <a href="mailto:berhanumengesha3@gmail.com">
                    <FaEnvelope title="Email" />
                  </a>
                </li>
                <li className={styles.socialItem}>
                  <a
                    href="https://github.com/Berhan-meng"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub title="Github" />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Form Column */}
          <div className={`${styles.formColumn} ${styles.glassEffect}`}>
            <h2
              className={`${styles.formTitle} mb-4 text-center text-md-start`}
            >
              Send me a note
            </h2>

            <form
              id="contact-form"
              className={styles.contactForm}
              onSubmit={handleSubmit}
            >
              <div className={styles.inputRow}>
                <div className={`${styles.inputField} ${styles.colXl6}`}>
                  <input
                    name="name"
                    type="text"
                    className={styles.formInput}
                    required
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className={`${styles.inputField} ${styles.colXl6}`}>
                  <input
                    name="email"
                    type="email"
                    className={styles.formInput}
                    required
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className={styles.textareaField}>
                <textarea
                  name="message"
                  className={styles.formTextarea}
                  rows="5"
                  required
                  placeholder="Tell me more about your needs..."
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <div className={styles.formActions}>
                <button
                  type="submit"
                  className={styles.submitButton}
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
