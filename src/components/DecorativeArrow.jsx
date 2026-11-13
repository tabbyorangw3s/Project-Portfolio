export default function DecorativeArrow({ className = "", flip = false }) {
  return (
    <svg
      className={`doodle-arrow ${className}`}
      width="92"
      height="42"
      viewBox="0 0 92 42"
      aria-hidden="true"
      style={flip ? { transform: "scaleX(-1)" } : undefined}
    >
      <path
        d="M4 30C16 32 22 18 34 16c10-1.6 16 6 26 5 8-.6 14-6 22-8"
        fill="none"
        stroke="#0C0C0C"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M70 6.5c6 2 10 5 14 7.2-6 1.2-9 4.6-12 8.2"
        fill="none"
        stroke="#0C0C0C"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
