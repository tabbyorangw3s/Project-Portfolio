export default function SparkleIcon({ size = 40, className = "" }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 48 48"
      aria-hidden="true"
    >
      <path
        fill="#0C0C0C"
        d="M24 1.2c.6 8.8 3.4 14.2 8.6 18.2C37.6 22.8 44.2 23.4 46.8 24c-2.6.6-9.2 1.2-14.2 4.6-5.2 4-8 9.4-8.6 18.2-.6-8.8-3.4-14.2-8.6-18.2C10.4 25.2 3.8 24.6 1.2 24c2.6-.6 9.2-1.2 14.2-4.6C20.6 15.4 23.4 10 24 1.2z"
      />
    </svg>
  );
}
