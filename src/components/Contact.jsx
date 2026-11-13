import { useState } from "react";
import { profile } from "../data/profile";
import SectionBlock from "./SectionBlock";
import { ScissorsDoodle } from "./Doodles";

export default function Contact() {
  const [notice, setNotice] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();
    const subject = encodeURIComponent(`Project note from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setNotice("Opening your email app with this message.");
  }

  return (
    <SectionBlock
      id="contact"
      labelledBy="contact-title"
      title="Contact Me"
      text="Have a project idea or want to connect? Just say hi!"
      doodle={<ScissorsDoodle className="intro-doodle" />}
    >
      <form className="contact-form" onSubmit={handleSubmit}>
        <label className="field">
          <span className="field-label label-pink">Name</span>
          <input name="name" type="text" required placeholder="Your name" autoComplete="name" />
        </label>
        <label className="field">
          <span className="field-label label-yellow">Your email</span>
          <input
            name="email"
            type="email"
            required
            placeholder="you@email.com"
            autoComplete="email"
          />
        </label>
        <label className="field">
          <span className="field-label label-blue">About Project</span>
          <input
            name="message"
            type="text"
            required
            placeholder="I want to message you about…"
            autoComplete="off"
          />
        </label>
        <div className="form-actions">
          <button className="btn" type="submit">
            Send Message
          </button>
          <p className="form-note" role="status">
            {notice || (
              <>
                I build with dedication.
                <br />
                Thank you for messaging me.
              </>
            )}
          </p>
        </div>
      </form>
    </SectionBlock>
  );
}
