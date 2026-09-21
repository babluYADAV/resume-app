import { FEATURED_PROJECT } from "../data.js";

export default function FeaturedProject() {
  return (
    <section>
      <div className="section-head">
        <h2 className="section-title">Independent project</h2>
      </div>
      <div className="highlight-panel">
        <p className="highlight-title">{FEATURED_PROJECT.title}</p>
        <p className="highlight-desc">{FEATURED_PROJECT.description}</p>
        <div className="tags">
          {FEATURED_PROJECT.tags.map((t, i) => (
            <span className="chip" key={i}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
