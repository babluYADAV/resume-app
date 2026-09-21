import { useCountUp } from "../hooks/useCountUp.js";

export default function StatusPanel() {
  const years = useCountUp(8, 900);
  const companies = useCountUp(6, 900);

  return (
    <div className="panel">
      <div className="panel-head">
        <span>
          <span className="dot"></span>profile status
        </span>
        <span>live</span>
      </div>
      <div className="panel-body">
        <div>
          <div className="metric-label">years in industry</div>
          <div className="metric-value accent">{years}</div>
        </div>
        <div>
          <div className="metric-label">companies</div>
          <div className="metric-value">{companies}</div>
        </div>
        <div>
          <div className="metric-label">primary stack</div>
          <div className="metric-value" style={{ fontSize: "16px" }}>
            React / TS
          </div>
        </div>
        <div>
          <div className="metric-label">domains</div>
          <div className="metric-value" style={{ fontSize: "16px" }}>
            Fintech, travel
          </div>
        </div>
      </div>
      <div className="panel-foot">
        Frontend-leaning full-stack engineer — credit card platforms, in-flight
        connectivity, micro-frontends and internal tooling.
      </div>
    </div>
  );
}
