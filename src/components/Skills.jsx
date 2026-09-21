import { SKILL_GROUPS } from "../data.js";

export default function Skills() {
  return (
    <section>
      <div className="section-head">
        <h2 className="section-title">Skills</h2>
      </div>
      <div className="skill-groups">
        {SKILL_GROUPS.map((g, i) => (
          <div key={i}>
            <p className="skill-group-title">{g.title}</p>
            <div className="skill-chips">
              {g.items.map((it, j) => (
                <span className="chip" key={j}>
                  {it}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
