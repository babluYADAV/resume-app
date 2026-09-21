import { EDUCATION } from "../data.js";

export default function Education() {
  return (
    <section>
      <div className="section-head">
        <h2 className="section-title">Education</h2>
      </div>
      {EDUCATION.map((e, i) => (
        <div className="edu-row" key={i}>
          <div>
            <div className="edu-school">{e.school}</div>
            <div className="edu-degree">{e.degree}</div>
          </div>
          <div className="edu-date">{e.date}</div>
        </div>
      ))}
    </section>
  );
}
