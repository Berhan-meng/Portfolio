import React from "react";
// import styles from "./TermsAndPrivacy.module.css";
import { Link } from "react-router-dom";

const TermsAndPrivacy = () => {
  const currentDate = new Date().toLocaleDateString();

  return (
    <section style={{ padding: "2rem", maxWidth: "1000px", margin: "0 auto" }}>
      <h1>Terms & Conditions and Privacy Policy</h1>
      <p>
        <strong>Effective Date:</strong> {currentDate}
      </p>

      <hr />

      <h2>1. Acceptance of Terms</h2>
      <p>
        By accessing and using this website, you agree to comply with the
        following terms and conditions. If you do not agree, please discontinue
        using the site.
      </p>

      <h2>2. Purpose of the Website</h2>
      <p>
        This website serves as a personal portfolio to showcase my skills,
        projects, and professional experience. All content is provided for
        informational and educational purposes only.
      </p>

      <h2>3. Intellectual Property</h2>
      <p>
        All original content on this website—including text, design, layout, and
        code—is my personal property unless otherwise stated.
      </p>

      <p>
        Trademarks, logos, and brand names used in project demonstrations remain
        the property of their respective owners.
      </p>

      <h2>4. External Links</h2>
      <p>
        This website may contain links to third-party websites such as GitHub,
        LinkedIn, or other platforms. I am not responsible for the content,
        privacy policies, or practices of those external websites.
      </p>

      <h2>5. Limitation of Liability</h2>
      <p>
        I make no guarantees regarding the accuracy or reliability of
        information provided on this website. Use of the site and its content is
        at your own risk.
      </p>

      <hr />

      <h1>Privacy Policy</h1>

      <h2>1. Information Collection</h2>
      <p>
        This website may collect personal information when you voluntarily
        submit it through the contact form, including:
      </p>

      <ul>
        <li>Your name</li>
        <li>Email address</li>
        <li>Message content</li>
      </ul>

      <h2>2. How Information Is Used</h2>
      <p>Any information you provide will only be used to:</p>

      <ul>
        <li>Respond to your inquiries</li>
        <li>Communicate about potential collaboration</li>
        <li>Provide requested information</li>
      </ul>

      <h2>3. Data Protection</h2>
      <p>Your personal information will:</p>

      <ul>
        <li>Never be sold to third parties</li>
        <li>Never be shared without your consent</li>
        <li>Be used only for direct communication</li>
      </ul>

      <h2>4. Cookies</h2>
      <p>
        This website does not intentionally use cookies to track or collect
        personal user data.
      </p>

      <h2>5. Changes to Policy</h2>
      <p>
        These terms and privacy policies may be updated at any time without
        prior notice.
      </p>

      <hr />

      <h3>Contact Information</h3>
      <p>
        For any questions regarding these terms or privacy practices, please
        contact me through the website <Link style={{textDecoration:"none"}} to="/contact">contact page</Link>.
      </p>

      <p>
        <strong>Website Owner:</strong> Berhanu Mengesha
      </p>
    </section>
  );
};

export default TermsAndPrivacy;
