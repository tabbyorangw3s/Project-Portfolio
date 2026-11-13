import { ArrowDownToLine, ArrowUpRight, X } from "lucide-react";
import { useRef } from "react";

const resumeUrl = "/projects/Resume.png";

export default function ResumeViewer() {
  const dialogRef = useRef(null);

  function closeDialog() {
    dialogRef.current?.close();
  }

  return (
    <>
      <button
        className="resume-trigger"
        type="button"
        onClick={() => {
          if (!dialogRef.current?.open) dialogRef.current?.showModal();
        }}
      >
        See Resume
        <ArrowUpRight size={16} aria-hidden="true" />
      </button>
      <dialog
        ref={dialogRef}
        className="resume-dialog"
        aria-labelledby="resume-dialog-title"
        onCancel={closeDialog}
        onKeyDown={(event) => {
          if (event.key === "Escape") closeDialog();
        }}
        onClick={(event) => {
          if (event.target === dialogRef.current) closeDialog();
        }}
      >
        <div className="resume-dialog-card">
          <div className="resume-dialog-heading">
            <div>
              <p className="resume-eyebrow">A little look at my work</p>
              <h2 id="resume-dialog-title">My Resume</h2>
            </div>
            <button
              className="resume-close"
              type="button"
              aria-label="Close resume preview"
              onClick={closeDialog}
            >
              <X size={20} aria-hidden="true" />
            </button>
          </div>
          <div className="resume-preview">
            <img src={resumeUrl} alt="Resume preview for Sophia Rhyzelle Beloro." />
          </div>
          <div className="resume-dialog-actions">
            <a
              className="resume-action resume-action-save"
              href={resumeUrl}
              download="Sophia-Rhyzelle-Beloro-Resume.png"
            >
              <ArrowDownToLine size={17} aria-hidden="true" />
              Save a copy
            </a>
            <a
              className="resume-action resume-action-open"
              href={resumeUrl}
              target="_blank"
              rel="noreferrer noopener"
            >
              Open full size
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
        </div>
      </dialog>
    </>
  );
}
