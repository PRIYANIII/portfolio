const SCHOOLS = [
  {
    period: "2023 — 2027",
    school: "Thadomal Shahani Engineering College",
    course: "B.Tech, Electronics and Telecommunication Engineering",
    detail: "CGPA 8.99 · Mumbai, Maharashtra",
  },
  {
    period: "2021 — 2023",
    school: "Sardar Vallabhbhai Patel Vidyalaya and Jr. College",
    course: "Science, Junior College",
    detail: "Mumbai, Maharashtra",
  },
];

const COURSEWORK = [
  "Computer Networks",
  "Database Management Systems",
  "SQL",
  "Data Structures & Algorithms",
];

export default function Education() {
  return (
    <section id="education">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Trace 04</p>
          <h2>Education</h2>
        </div>

        <div className="edu-grid">
          {SCHOOLS.map((s) => (
            <div className="edu-card" key={s.school}>
              <p className="edu-period">{s.period}</p>
              <h3>{s.school}</h3>
              <p className="edu-course">{s.course}</p>
              <p className="edu-detail">{s.detail}</p>
            </div>
          ))}
        </div>

        <div className="coursework">
          <p className="coursework-label">Relevant coursework</p>
          <div className="chip-row">
            {COURSEWORK.map((c) => (
              <span className="chip chip--mono" key={c}>
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
