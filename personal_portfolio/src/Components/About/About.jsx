// export default function About() {
//   return (
//     <section id="about">
//       <h2>About Me</h2>
//       <p>Public health professional transitioning to software development.</p>
//     </section>
//   );
// }

export default function About() {
  return (
    <section id="about" className="section bg-dark-1">
      <div className="container">
        <h2 className="text-white">About Me</h2>

        <p className="text-white-50">
          I'm Berhanu Mengesha, Public Health Professional and Web Developer...
        </p>

        <a href="/Berhanu_Mengesha_CV.pdf" download className="btn btn-primary">
          Download CV
        </a>
      </div>
    </section>
  );
}

