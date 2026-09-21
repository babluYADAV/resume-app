import { EXPERIENCE } from "../data.js";
import PropTypes from "prop-types";

function RoleEntry({ role }) {
  return (
    <div className="role-entry">
      <div className="role-meta">
        <span className="company">{role.company}</span>
        {role.dates}
      </div>
      <div>
        <p className="role-title">{role.title}</p>
        <p className="project-name">{role.project}</p>
        <ul className="bullets">
          {role.bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
        <div className="tags">
          {role.tags.map((t, i) => (
            <span className="chip" key={i}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

RoleEntry.propTypes = {
  role: PropTypes.shape({
    company: PropTypes.string.isRequired,
    dates: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    project: PropTypes.string.isRequired,
    bullets: PropTypes.arrayOf(PropTypes.string).isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default function Experience() {
  return (
    <section>
      <div className="section-head">
        <h2 className="section-title">Experience</h2>
        <span className="section-count">{EXPERIENCE.length} roles logged</span>
      </div>
      {EXPERIENCE.map((r, i) => (
        <RoleEntry role={r} key={i} />
      ))}
    </section>
  );
}
