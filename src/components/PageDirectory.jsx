import { ArrowUpRight, Compass, Code2, Mail, Trophy } from "lucide-react";

const destinations = [
  {
    id: "work",
    number: "02",
    label: "Build & explore",
    title: "Work & skills",
    description: "Projects, programming languages, and tools.",
    icon: Code2,
    tone: "pink",
  },
  {
    id: "journey",
    number: "03",
    label: "The path so far",
    title: "My journey",
    description: "Education, experience, and what shaped me.",
    icon: Compass,
    tone: "yellow",
  },
  {
    id: "highlights",
    number: "04",
    label: "Little victories",
    title: "Highlights",
    description: "Achievements and my learning notebook.",
    icon: Trophy,
    tone: "blue",
  },
  {
    id: "contact",
    number: "05",
    label: "Say hello",
    title: "Contact & resume",
    description: "Let’s connect, or take a look at my resume.",
    icon: Mail,
    tone: "pink",
  },
];

export default function PageDirectory() {
  return (
    <section className="page-directory" aria-labelledby="page-directory-title">
      <div className="page-directory-intro">
        <span className="directory-kicker">A little map of my world</span>
        <h2 id="page-directory-title">Where would you like to go?</h2>
        <p>Pick a page and explore what I’ve been up to.</p>
      </div>
      <nav className="page-choice-grid" aria-label="Explore portfolio pages">
        {destinations.map((destination) => {
          const Icon = destination.icon;
          return (
            <a
              key={destination.id}
              className={`page-choice-card choice-${destination.tone}`}
              href={`#${destination.id}`}
            >
              <span className="page-choice-icon" aria-hidden="true">
                <Icon size={22} strokeWidth={1.8} />
              </span>
              <span className="page-choice-copy">
                <span className="page-choice-meta">
                  <span>{destination.label}</span>
                  <span>{destination.number}</span>
                </span>
                <strong>{destination.title}</strong>
                <span className="page-choice-description">{destination.description}</span>
              </span>
              <ArrowUpRight className="page-choice-arrow" size={20} aria-hidden="true" />
            </a>
          );
        })}
      </nav>
    </section>
  );
}
