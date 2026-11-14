import { Moon, Sun } from "lucide-react";
import SparkleIcon from "./SparkleIcon";

const pages = [
  { id: "home", label: "Home" },
  { id: "work", label: "Work" },
  { id: "journey", label: "Journey" },
  { id: "highlights", label: "Highlights" },
  { id: "contact", label: "Contact" },
];

export default function Navbar({ theme, activePage, onToggleTheme }) {
  const isDark = theme === "dark";
  const toggleLabel = isDark ? "Switch to light mode" : "Switch to dark mode";

  return (
    <header className="site-header">
      <div className="header-row">
        <div className="pink-dash" aria-hidden="true" />
        <a className="brand" href="#home" aria-label="Sophia Rhyzelle, home">
          <SparkleIcon size={42} />
          <span>Sophia Rhyzelle</span>
        </a>
        <nav className="nav-links" aria-label="Primary">
          {pages.map((page) => (
            <a
              key={page.id}
              href={`#${page.id}`}
              aria-current={activePage === page.id ? "page" : undefined}
            >
              {page.label}
            </a>
          ))}
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
