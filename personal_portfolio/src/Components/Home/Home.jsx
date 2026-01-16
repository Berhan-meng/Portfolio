// export default function Home() {
//   return (
//     <section id="home">
//       <h1>Welcome to My Portfolio</h1>
//       <p>I am Berhanu Mengesha – Web Developer</p>
//     </section>
//   );
// }

export default function Home() {
  return (
    <section id="home">
      <div className="hero-wrap">
        <div
          className="hero-bg"
          style={{ backgroundImage: "url('/images/bc1.jpg')" }}
        ></div>

        <div className="hero-content section d-flex min-vh-100">
          <div className="container my-auto text-center">
            <h2 className="text-16 text-white">I'm Berhanu Mengesha</h2>
            <p className="text-light">Based in Debre Birhan, Ethiopia</p>

            <a href="#contact" className="btn btn-primary">
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
