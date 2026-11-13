import { Moon, Sun } from "lucide-react";
import SparkleIcon from "./SparkleIcon";
import ResumeViewer from "./ResumeViewer";

export default function Navbar({ theme, onToggleTheme }) {
  const isDark = theme === "dark";
  const toggleLabel = isDark ? "Switch to light mode" : "Switch to dark mode";

  return (
    <header className="site-header">
      <div className="header-row">
        <div className="pink-dash" aria-hidden="true" />
        <a className="brand" href="#top" aria-label="Sophia Rhyzelle, back to top">
          <SparkleIcon size={42} />
          <span>Sophia Rhyzelle</span>
        </a>
        <nav className="nav-links" aria-label="Primary">
          <a href="#projects">Portfolio</a>
          <a href="#contact">Hire Me</a>
          <ResumeViewer />
          <button
            className="theme-toggle"
            type="button"
            onClick={onToggleTheme}
            aria-label={toggleLabel}
            aria-pressed={isDark}
            title={toggleLabel}
          >
            {isDark ? <Sun size={17} aria-hidden="true" /> : <Moon size={17} aria-hidden="true" />}
            <span>{isDark ? "Light mode" : "Dark mode"}</span>
          </button>
        </nav>
      </div>
    </header>
  );
}
