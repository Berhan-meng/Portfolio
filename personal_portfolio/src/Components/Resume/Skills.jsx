import { skills } from "./skills.js";

export default function Skills() {
  return (
    <div className="col-md-6">
      {skills.map((skill) => (
        <div key={skill.name}>
          <p className="text-dark fw-500 text-start mb-2">
            {skill.name}
            <span className="float-end">{skill.level}%</span>
          </p>

          <div className="progress progress-sm mb-4">
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: `${skill.level}%` }}
              aria-valuenow={skill.level}
              aria-valuemin={0}
              aria-valuemax={100}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
}
