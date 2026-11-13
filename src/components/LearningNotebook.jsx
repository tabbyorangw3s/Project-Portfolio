import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionBlock from "./SectionBlock";
import SparkleIcon from "./SparkleIcon";

const pages = [
  {
    id: "learning-now",
    label: "Current notes",
    title: "What I'm learning now",
    tone: "pink",
    entries: [
      {
        title: "Rust",
        status: "Exploring",
        detail: "Exploring the language and learning its fundamentals.",
      },
      {
        title: "Java",
        status: "Practicing",
        detail: "Practicing more to strengthen my skills.",
      },
    ],
  },
  {
    id: "learning-next",
    label: "On my horizon",
    title: "Fields I want to explore",
    tone: "blue",
    entries: [
      {
        title: "Software Engineering",
        status: "On my list",
        detail: "A field I plan to explore further.",
      },
      {
        title: "Artificial Intelligence",
        status: "On my list",
        detail: "Another area I hope to learn more about.",
      },
    ],
  },
];

export default function LearningNotebook() {
  const [pageIndex, setPageIndex] = useState(0);
  const [direction, setDirection] = useState("forward");
  const page = pages[pageIndex];

  function turnPage(nextIndex) {
    setDirection(nextIndex > pageIndex ? "forward" : "backward");
    setPageIndex(nextIndex);
  }

  return (
    <SectionBlock
      id="learning"
      labelledBy="learning-title"
      title="My Learning Notebook"
      text="Turn the page to see what I'm practicing and the fields I hope to explore next."
      doodle={<SparkleIcon size={28} className="intro-doodle" />}
    >
      <div className="learning-notebook">
        <div className="notebook-binding" aria-hidden="true" />
        <article
          key={page.id}
          className={`notebook-page page-turn-${direction}`}
          aria-live="polite"
        >
          <div className="notebook-page-heading">
            <span className={`notebook-stamp notebook-stamp-${page.tone}`}>
              {page.label}
            </span>
          </div>
          <h3>{page.title}</h3>
          <ul className="notebook-notes">
            {page.entries.map((entry) => (
              <li key={entry.title}>
                <div className="notebook-note-heading">
                  <span className="notebook-topic">{entry.title}</span>
                  <span className="notebook-status">{entry.status}</span>
                </div>
                <p>{entry.detail}</p>
              </li>
            ))}
          </ul>
          <SparkleIcon size={24} className="notebook-sparkle" aria-hidden="true" />
        </article>
        <div className="notebook-controls" role="group" aria-label="Notebook pages">
          <button
            type="button"
            className="notebook-control"
            onClick={() => turnPage(pageIndex - 1)}
            disabled={pageIndex === 0}
          >
            <ChevronLeft size={17} aria-hidden="true" />
            Previous
          </button>
          <span className="notebook-page-total">
            {pageIndex + 1} <span aria-hidden="true">/</span> {pages.length}
          </span>
          <button
            type="button"
            className="notebook-control"
            onClick={() => turnPage(pageIndex + 1)}
            disabled={pageIndex === pages.length - 1}
          >
            Next page
            <ChevronRight size={17} aria-hidden="true" />
          </button>
        </div>
      </div>
    </SectionBlock>
  );
}
