const LINKS = [
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="nav">
      <div className="container nav-inner">
        <a href="#top" className="nav-mark">
          <span className="nav-mark-tag">PG</span>
          <span className="nav-mark-sub">// portfolio</span>
        </a>
        <nav className="nav-links">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>
        <a className="nav-cta" href="/resume.pdf" target="_blank" rel="noreferrer">
          Résumé ↗
        </a>
      </div>
    </header>
  );
}
