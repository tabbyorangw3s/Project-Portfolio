export default function PageHeading({ id, number, title, text }) {
  return (
    <div className="page-heading" id={id} tabIndex="-1">
      <span className="page-heading-number" aria-hidden="true">{number}</span>
      <div>
        <p className="page-heading-eyebrow">Sophia’s portfolio</p>
        <h1 id={`page-title-${id}`} tabIndex="-1">{title}</h1>
        <p className="page-heading-text">{text}</p>
      </div>
    </div>
  );
}
