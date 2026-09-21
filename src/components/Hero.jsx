import StatusPanel from "./StatusPanel.jsx";
import { PROFILE } from "../data.js";

export default function Hero() {
  return (
    <div className="hero">
      <div>
        <h1 className="name">{PROFILE.name}</h1>
        <p className="role">{PROFILE.role}</p>
        <p className="lede">{PROFILE.lede}</p>
        <div className="contact-row">
          <a className="contact-pill" href={`mailto:${PROFILE.email}`}>
            ✉ {PROFILE.email}
          </a>
          <a className="contact-pill" href={`tel:${PROFILE.phone}`}>
            ☎ {PROFILE.phoneDisplay}
          </a>
          <span className="contact-pill">📍 {PROFILE.location}</span>
        </div>
      </div>
      <StatusPanel />
    </div>
  );
}
