import { useEffect, useRef, useState } from "react";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import FeaturedProjects from "./components/FeaturedProjects";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import LearningNotebook from "./components/LearningNotebook";
import Navbar from "./components/Navbar";
import PageDirectory from "./components/PageDirectory";
import PageHeading from "./components/PageHeading";
import ResumeViewer from "./components/ResumeViewer";
import Skills from "./components/Skills";
import WhatIDo from "./components/WhatIDo";

const ambientSparkles = [
  { left: "12%", top: "3%", tone: "yellow", size: 28, duration: "4.8s", delay: "-1.2s" },
  { left: "92%", top: "7%", tone: "blue", size: 38, duration: "5.7s", delay: "-3s" },
  { left: "27%", top: "11%", tone: "pink", size: 20, duration: "4.3s", delay: "-2s" },
  { left: "79%", top: "16%", tone: "yellow", size: 32, duration: "6.2s", delay: "-4s" },
  { left: "6%", top: "21%", tone: "blue", size: 35, duration: "5s", delay: "-2.6s" },
  { left: "94%", top: "26%", tone: "pink", size: 23, duration: "5.4s", delay: "-3.5s" },
  { left: "34%", top: "30%", tone: "yellow", size: 31, duration: "6.4s", delay: "-1.8s" },
  { left: "86%", top: "36%", tone: "pink", size: 37, duration: "4.9s", delay: "-2.8s" },
  { left: "10%", top: "41%", tone: "blue", size: 25, duration: "5.8s", delay: "-4.1s" },
  { left: "73%", top: "46%", tone: "pink", size: 36, duration: "6.1s", delay: "-1.5s" },
  { left: "3%", top: "51%", tone: "yellow", size: 26, duration: "4.6s", delay: "-3.2s" },
  { left: "91%", top: "56%", tone: "blue", size: 33, duration: "5.5s", delay: "-2.2s" },
  { left: "24%", top: "61%", tone: "pink", size: 22, duration: "6.3s", delay: "-4.4s" },
  { left: "96%", top: "66%", tone: "yellow", size: 35, duration: "5.1s", delay: "-1.9s" },
  { left: "8%", top: "71%", tone: "pink", size: 30, duration: "4.7s", delay: "-3.6s" },
  { left: "83%", top: "76%", tone: "yellow", size: 22, duration: "6.5s", delay: "-2.4s" },
  { left: "37%", top: "81%", tone: "blue", size: 36, duration: "5.2s", delay: "-4.6s" },
  { left: "93%", top: "86%", tone: "pink", size: 26, duration: "5.9s", delay: "-1.7s" },
  { left: "14%", top: "91%", tone: "blue", size: 23, duration: "4.5s", delay: "-3.8s" },
  { left: "82%", top: "96%", tone: "yellow", size: 36, duration: "6.6s", delay: "-2.7s" },
];

const themeStorageKey = "sophia-portfolio-theme";
const pageIds = ["home", "work", "journey", "highlights", "contact"];
const pageAliases = {
  top: "home",
  projects: "work",
  skills: "work",
  education: "journey",
  experience: "journey",
  achievements: "highlights",
  notebook: "highlights",
};

function getPageFromHash() {
  const hash = window.location.hash.slice(1);
  const page = pageAliases[hash] || hash;
  return pageIds.includes(page) ? page : "home";
}

export default function App() {
  const [theme, setTheme] = useState(() =>
    window.localStorage.getItem(themeStorageKey) === "dark" ? "dark" : "light",
  );
  const [activePage, setActivePage] = useState(getPageFromHash);
  const previousHash = useRef(window.location.hash);

  useEffect(() => {
    window.localStorage.setItem(themeStorageKey, theme);
  }, [theme]);

  useEffect(() => {
    function handleHashChange() {
      setActivePage(getPageFromHash());
    }

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (previousHash.current !== window.location.hash) {
      document.getElementById(`page-title-${activePage}`)?.focus({ preventScroll: true });
    }
    previousHash.current = window.location.hash;
    const pageTitles = {
      home: "Home",
      work: "Work & Skills",
      journey: "My Journey",
      highlights: "Highlights",
      contact: "Contact",
    };
    document.title = `${pageTitles[activePage]} — Sophia Rhyzelle Beloro`;
  }, [activePage]);

  useEffect(() => {
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    ) {
      return;
    }

    const revealTargets = document.querySelectorAll(
      ".frame main > section, .frame .project-card, .frame .note",
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -24px 0px" },
    );

    revealTargets.forEach((target, index) => {
      target.classList.add("scroll-reveal");
      target.style.setProperty("--reveal-delay", `${(index % 4) * 90}ms`);
      observer.observe(target);
    });

    return () => {
      observer.disconnect();
      revealTargets.forEach((target) => {
        target.classList.remove("scroll-reveal", "is-visible");
        target.style.removeProperty("--reveal-delay");
      });
    };
  }, [activePage]);

  return (
    <div className="page" data-theme={theme}>
      <div className="ambient-sparkles" aria-hidden="true">
        {ambientSparkles.map((sparkle, index) => (
          <svg
            key={index}
            className={`ambient-sparkle sparkle-${sparkle.tone}`}
            width={sparkle.size}
            height={sparkle.size}
            viewBox="0 0 64 64"
            style={{
              left: sparkle.left,
              top: sparkle.top,
              animationDuration: sparkle.duration,
              animationDelay: sparkle.delay,
            }}
            aria-hidden="true"
          >
            <path d="M32 2 C36 23 41 28 62 32 C41 36 36 41 32 62 C28 41 23 36 2 32 C23 28 28 23 32 2Z" />
          </svg>
        ))}
      </div>
      <div className="frame">
        <Navbar
          theme={theme}
          activePage={activePage}
          onToggleTheme={() =>
            setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"))
          }
        />
        <main key={activePage} className="page-view-transition">
          {activePage === "home" && (
            <>
              <Hero />
              <WhatIDo />
              <PageDirectory />
            </>
          )}
          {activePage === "work" && (
            <>
              <PageHeading
                id="work"
                number="02"
                title="Work & Skills"
                text="Projects I’ve built, plus the languages and tools I use to bring ideas to life."
              />
              <FeaturedProjects />
              <Skills />
            </>
          )}
          {activePage === "journey" && (
            <>
              <PageHeading
                id="journey"
                number="03"
                title="My Journey"
                text="The education, experiences, and people shaping my path in technology."
              />
              <Education />
              <Experience />
            </>
          )}
          {activePage === "highlights" && (
            <>
              <PageHeading
                id="highlights"
                number="04"
                title="Highlights"
                text="A few proud moments, and a peek at what I’m learning right now."
              />
              <Achievements />
              <LearningNotebook />
            </>
          )}
          {activePage === "contact" && (
            <>
              <PageHeading
                id="contact"
                number="05"
                title="Let’s Connect"
                text="Have an idea or want to work together? I’d love to hear from you."
              />
              <Contact />
              <section className="resume-section" aria-labelledby="resume-section-title">
                <div>
                  <p className="resume-eyebrow">A little look at my work</p>
                  <h2 id="resume-section-title">Want the quick version?</h2>
                  <p className="resume-section-text">
                    Preview my resume or save a copy for later.
                  </p>
                </div>
                <ResumeViewer />
              </section>
            </>
          )}
        </main>
        <Footer />
      </div>
    </div>
  );
}
