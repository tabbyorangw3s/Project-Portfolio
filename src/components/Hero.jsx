import DecorativeArrow from "./DecorativeArrow";
import { profile } from "../data/profile";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-left">
        <div className="identity">
          <img src="/avatar.png" alt="" width="100" height="100" />
          <DecorativeArrow />
          <span className="name-mark">Hi, I'm Sophia!</span>
        </div>
        <h1 id="page-title-home" tabIndex="-1">{profile.heroTitle}</h1>
      </div>
      <div className="hero-right">
        <p>{profile.heroIntro}</p>
        <a className="btn" href="#work">
          {profile.heroButton}
        </a>
      </div>
    </section>
  );
}
