// export default function Portfolio() {
//   return (
//     <section id="portfolio">
//       <h2>Projects</h2>
//       <a
//         href="https://berhan-meng.github.io/Netflix-clone-2025/"
//         target="_blank"
//       >
//         Netflix Clone Project
//       </a>
//     </section>
//   );
// }

export default function Portfolio() {
  return (
    <section id="portfolio" className="section bg-dark-2">
      <div className="container">
        <h2 className="text-white">My Work</h2>

        <div className="row">
          <div className="col-md-4">
            <a
              href="https://berhan-meng.github.io/Netflix-clone-2025/"
              target="_blank"
            >
              <img
                className="img-fluid"
                src="https://images.fastcompany.com/image/upload/f_webp,q_auto,c_fit/wp-cms-2/2024/04/p-1-91108938-netflix-reasserts-dominance-new-model.jpg"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
