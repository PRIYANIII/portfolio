const STATS = [
  { value: "280+", label: "Problems solved", detail: "Combined across LeetCode & GeeksforGeeks" },
  { value: "160+", label: "Institute rank", detail: "Across coding platforms at TSEC" },
  { value: "Top 5", label: "Syntecxathon 2024", detail: "National College Hackathon" },
];

export default function Stats() {
  return (
    <section id="stats" className="stats">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Trace 03</p>
          <h2>Problem solving</h2>
        </div>
        <div className="stats-grid">
          {STATS.map((s) => (
            <div className="stat-card" key={s.label}>
              <p className="stat-value">{s.value}</p>
              <p className="stat-label">{s.label}</p>
              <p className="stat-detail">{s.detail}</p>
            </div>
          ))}
        </div>
        <div className="stats-links">
          <a href="#" className="stats-link">LeetCode profile ↗</a>
          <a href="#" className="stats-link">GeeksforGeeks profile ↗</a>
        </div>
      </div>
    </section>
  );
}
