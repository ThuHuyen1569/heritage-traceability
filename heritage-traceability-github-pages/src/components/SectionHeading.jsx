export default function SectionHeading({ number, eyebrow, title, intro, light = false }) {
  return <header className={`section-heading ${light ? 'light' : ''}`}>
    <div className="section-index">{number}</div>
    <div>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {intro && <p className="section-intro">{intro}</p>}
    </div>
  </header>
}
