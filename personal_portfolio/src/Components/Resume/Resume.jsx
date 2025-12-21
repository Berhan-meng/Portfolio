import Education from "./Education/Education.jsx";
import Experience from "./Experience/Experience.jsx";
import Skills from "./Skills.jsx";

export default function Resume() {
  return (
    <section id="resume" className="section">
      <div className="container px-lg-5">
        {/* <!-- Heading --> */}
        <div className="position-relative d-flex text-center mb-5">
          <h2 className="text-24 text-light opacity-4 text-uppercase fw-600 w-100 mb-0">
            Summary
          </h2>
          <p className="text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0">
            Resume
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto"></span>{" "}
          </p>
        </div>
        {/* <!-- Heading end--> */}

        <div className="row gx-5">
          {/* <!-- My Education --> */}
          <Education />

          {/* <!-- My Experience --> */}
          <Experience />
        </div>
        {/* <!-- My Skills --> */}
        <h2 className="text-6 fw-600 mt-4 mb-4">My Skills</h2>
        <div className="row gx-5">
          <div className="col-md-6">
            <p className="text-dark fw-500 text-start mb-2">
              Web Design <span className="float-end">65%</span>
            </p>
            <div className="progress progress-sm mb-4">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: "65%" }}
                aria-valuenow={65}
                aria-valuemin={0}
                aria-valuemax={100}
              ></div>
            </div>
            <p className="text-dark fw-500 text-start mb-2">
              HTML/CSS <span className="float-end">95%</span>
            </p>
            <div className="progress progress-sm mb-4">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: "95%" }}
                aria-valuenow={95}
                aria-valuemin={0}
                aria-valuemax={100}
              ></div>
            </div>
            <p className="text-dark fw-500 text-start mb-2">
              JavaScript <span className="float-end">80%</span>
            </p>
            <div className="progress progress-sm mb-4">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: "80%" }}
                aria-valuenow={80}
                aria-valuemin={0}
                aria-valuemax={100}
              ></div>
            </div>
          </div>
          <Skills />
        </div>
        <div className="text-center mt-5">
          <a
            href="#"
            className="btn btn-outline-secondary rounded-pill shadow-none"
          >
            Download CV{" "}
            <span className="ms-1">
              <i className="fas fa-download"></i>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
