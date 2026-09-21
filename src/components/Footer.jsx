import { PROFILE } from "../data.js";

export default function Footer() {
  return (
    <footer>
      <div className="foot-line">
        {PROFILE.email} · {PROFILE.phoneDisplay} · {PROFILE.location}
      </div>
    </footer>
  );
}
