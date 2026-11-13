export default function SectionBlock({
  id,
  title,
  text,
  doodle,
  children,
  labelledBy,
}) {
  return (
    <section className="split" id={id} aria-labelledby={labelledBy}>
      <div className="section-intro">
        <h2 id={labelledBy}>{title}</h2>
        {doodle}
        <p>{text}</p>
      </div>
      <div className="section-body">{children}</div>
    </section>
  );
}
