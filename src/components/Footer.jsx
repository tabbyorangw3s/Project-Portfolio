import { socialLinks } from "../data/social";
import ExternalLink from "./ExternalLink";
import SparkleIcon from "./SparkleIcon";
import { Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-row">
        <div className="footer-brand-stack">
          <a className="brand brand-small" href="#top">
            <SparkleIcon size={28} />
            <span>Sophia Rhyzelle</span>
          </a>
          <p className="copyright">Copyright, Sophia Rhyzelle Beloro 2026</p>
        </div>
        <div className="footer-links">
          {socialLinks.map((link) => (
            <ExternalLink key={link.label} href={link.href} label={link.label}>
              {link.label}
            </ExternalLink>
          ))}
        </div>
        <div className="footer-contact-links" aria-label="Contact Sophia">
          <a className="contact-icon-link" href="tel:+639926636407" aria-label="Call Sophia">
            <Phone size={19} aria-hidden="true" />
            <span className="contact-popover" role="tooltip">+63 992 663 6407</span>
          </a>
          <a
            className="contact-icon-link"
            href="mailto:sophiarhyzellemain@gmail.com"
            aria-label="Email Sophia"
          >
            <Mail size={19} aria-hidden="true" />
            <span className="contact-popover" role="tooltip">sophiarhyzellemain@gmail.com</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
