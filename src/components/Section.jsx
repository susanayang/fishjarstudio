export default function Section({ title, children }) {
  return (
    <section className="section">
      {title ? <h2 className="section-title">{title}</h2> : null}
      <div className="section-body">{children}</div>
    </section>
  );
}
