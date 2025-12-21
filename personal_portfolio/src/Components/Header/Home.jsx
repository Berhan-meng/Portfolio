
export default function Home() {
  return (
    <section id="home">
      <div className="hero-wrap">
        <div className="hero-mask opacity-8 bg-dark"></div>
        <div
          className="hero-bg parallax"
          style={{ backgroundImage: "url('images/intro-bg.jpg')" }}
        ></div>
        <div className="hero-content section d-flex min-vh-100">
          <div className="container my-auto">
            <div className="row">
              <div className="col-12 text-center">
                <div className="typed-strings">
                  <p>I'm Simone Olivia</p>
                  <p>I'm a Freelancer.</p>
                  <p>I'm a Photographer.</p>
                  <p>I'm a Designer.</p>
                </div>
                <p className="text-7 fw-500 text-white mb-2 mb-md-3">Welcome</p>
                <h2 className="text-16 fw-600 text-white mb-2 mb-md-3">
                  <span className="typed"></span>
                </h2>
                <p className="text-5 text-light mb-4">
                  based in Los Angeles, California.
                </p>
                <a
                  href="#contact"
                  className="btn btn-outline-primary rounded-pill shadow-none smooth-scroll mt-2"
                >
                  Hire Me
                </a>
              </div>
            </div>
          </div>
          <a
            href="#about"
            className="scroll-down-arrow text-white smooth-scroll"
          >
            <span className="animated">
              <i className="fa fa-chevron-down"></i>
            </span>
          </a>{" "}
        </div>
      </div>
    </section>
  );
}
