export function CursorDoodle({ className = "" }) {
  return (
    <svg
      className={className}
      width="34"
      height="38"
      viewBox="0 0 34 38"
      aria-hidden="true"
    >
      <path
        d="M6 3.5 28 20.5 16.8 21.8 22.5 34.2 16.8 36.6 11 23.8 6 28.2z"
        fill="#0C0C0C"
      />
    </svg>
  );
}

export function ScissorsDoodle({ className = "" }) {
  return (
    <svg
      className={className}
      width="46"
      height="46"
      viewBox="0 0 46 46"
      aria-hidden="true"
    >
      <circle cx="12" cy="14" r="6" fill="none" stroke="#0C0C0C" strokeWidth="1.6" />
      <circle cx="12" cy="32" r="6" fill="none" stroke="#0C0C0C" strokeWidth="1.6" />
      <path
        d="M16.5 17.5 38 8M16.5 28.5 38 38"
        fill="none"
        stroke="#0C0C0C"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M33 8.5h6M33 37.5h6"
        stroke="#0C0C0C"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function PenDoodle({ className = "" }) {
  return (
    <svg
      className={className}
      width="54"
      height="28"
      viewBox="0 0 54 28"
      aria-hidden="true"
    >
      <path
        d="M4 20c8-1 12-8 20-8 6 0 8 3 14 2l8-6-3 8-7 2c-6 1-8 6-16 6S10 22 4 20z"
        fill="none"
        stroke="#0C0C0C"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M38 8l6-4 4 5-6 3" fill="none" stroke="#0C0C0C" strokeWidth="1.6" />
    </svg>
  );
}

export function PencilIcon() {
  return (
    <svg width="120" height="120" viewBox="0 0 120 120" aria-hidden="true">
      <g transform="rotate(-4 60 60)" stroke="#0C0C0C" strokeWidth="3.5" strokeLinejoin="round">
        <rect x="22" y="18" width="76" height="62" rx="11" fill="#fff" />
        <rect x="29" y="25" width="62" height="45" rx="6" fill="#9DD8F7" strokeWidth="2.5" />
        <path d="m49 39-8 7 8 7m22-14 8 7-8 7m-6-12-7 16" fill="none" strokeWidth="3.5" strokeLinecap="round" />
        <path d="M15 88q45 10 90 0l7 10q1 4-5 4H13q-6 0-5-4z" fill="#FFE58A" />
      </g>
      <circle cx="52" cy="57" r="2" fill="#FFC9F0" />
      <circle cx="68" cy="57" r="2" fill="#FFC9F0" />
      <path d="M53 65q7 6 14 0" fill="none" stroke="#0C0C0C" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M99 24q2 8 10 10-8 2-10 10-2-8-10-10 8-2 10-10" fill="#FFC9F0" stroke="#0C0C0C" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}

export function EyeIcon() {
  return (
    <svg width="120" height="120" viewBox="0 0 120 120" aria-hidden="true">
      <rect x="18" y="22" width="84" height="72" rx="11" fill="#fff" stroke="#0C0C0C" strokeWidth="3.5" />
      <path d="M19 39h82" stroke="#0C0C0C" strokeWidth="3" />
      <circle cx="29" cy="31" r="3" fill="#FFC9F0" />
      <circle cx="39" cy="31" r="3" fill="#FFE58A" />
      <circle cx="49" cy="31" r="3" fill="#9DD8F7" />
      <rect x="29" y="50" width="26" height="32" rx="5" fill="#FFC9F0" stroke="#0C0C0C" strokeWidth="2.5" />
      <rect x="63" y="50" width="27" height="12" rx="4" fill="#FFE58A" stroke="#0C0C0C" strokeWidth="2.5" />
      <path d="M66 72h21m-21 8h14" stroke="#9DD8F7" strokeWidth="4" strokeLinecap="round" />
      <path d="m91 82 15 16-6 1-3 8-6-16z" fill="#fff" stroke="#0C0C0C" strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M44 104q16 8 32 0" fill="none" stroke="#0C0C0C" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

export function PhoneIcon() {
  return (
    <svg width="120" height="120" viewBox="0 0 120 120" aria-hidden="true">
      <g transform="rotate(7 60 60)">
        <rect x="36" y="11" width="50" height="96" rx="13" fill="#fff" stroke="#0C0C0C" strokeWidth="3.5" />
        <rect x="42" y="27" width="38" height="63" rx="7" fill="#9DD8F7" stroke="#0C0C0C" strokeWidth="2.5" />
        <path d="M52 18h18" stroke="#0C0C0C" strokeWidth="3" strokeLinecap="round" />
        <circle cx="61" cy="99" r="2.5" fill="#0C0C0C" />
        <circle cx="53" cy="53" r="3" fill="#0C0C0C" />
        <circle cx="69" cy="53" r="3" fill="#0C0C0C" />
        <path d="M53 63q8 8 16 0" fill="none" stroke="#0C0C0C" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="49" cy="61" r="3" fill="#FFC9F0" />
        <circle cx="73" cy="61" r="3" fill="#FFC9F0" />
      </g>
      <path d="M24 28q2 8 10 10-8 2-10 10-2-8-10-10 8-2 10-10" fill="#FFE58A" stroke="#0C0C0C" strokeWidth="2" strokeLinejoin="round" />
      <path d="M96 76q2 6 8 8-6 2-8 8-2-6-8-8 6-2 8-8" fill="#FFC9F0" stroke="#0C0C0C" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}
