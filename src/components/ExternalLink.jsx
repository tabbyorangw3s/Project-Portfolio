export default function ExternalLink({
  href,
  className = "",
  children,
  label,
}) {
  const ready = typeof href === "string" && /^https?:\/\//.test(href);
  if (!ready) {
    return (
      <a
        href="#contact"
        className={className}
        aria-label={label}
        title="Add the URL in the data file"
        onClick={(event) => event.preventDefault()}
      >
        {children}
      </a>
    );
  }

  return (
    <a
      className={className}
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
    >
      {children}
    </a>
  );
}
