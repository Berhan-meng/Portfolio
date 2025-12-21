import { experience } from "./Experience";

export default function Experience() {
  return (
    <div className="col-md-6">
      <h2 className="text-6 fw-600 mb-4">My Experience</h2>

      {experience.map((item, i) => {
        return (
          <div key={i} className="bg-white border rounded p-4 mb-4">
            <p className="badge bg-primary text-2 fw-400">{item.year}</p>
            <h3 className="text-5">{item.position}</h3>
            <p className="text-danger">{item.Organization}t</p>
            <p className="mb-0">{item.responsibility}</p>
          </div>
        );
      })}
    </div>
  );
}
