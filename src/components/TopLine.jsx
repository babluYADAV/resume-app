import { useTheme } from "../hooks/useTheme.js";

export default function TopLine() {
  const [theme, setTheme] = useTheme();
  const cycle = () =>
    setTheme(theme === "dark" ? "light" : theme === "light" ? null : "dark");
  const label = theme === "dark" ? "dark" : theme === "light" ? "light" : "system";

  return (
    <div className="topline">
      <div className="topline-inner">
        <span>
          <span className="dot"></span>resume.app — shivram-yadav
        </span>
        <button className="theme-btn" onClick={cycle} aria-label="Toggle color theme">
          theme: {label}
        </button>
      </div>
    </div>
  );
}
