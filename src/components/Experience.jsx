import Signal from "./Signal.jsx";

const ROLES = [
  {
    period: "Aug 2025 — Mar 2026",
    title: "Technical Head",
    org: "Scom, Electroverse.comm-TSEC",
    points: [
      "Leads the technical team responsible for building and maintaining web platforms and infrastructure for the committee's events.",
      "Built and deployed the committee's live website, electroverse-comm.in.",
    ],
    active: true,
  },
  {
    period: "Jul 2024 — Jul 2025",
    title: "Technical Team Member",
    org: "Jcom, Electroverse.comm-TSEC",
    points: [
      "Contributed to building and maintaining the Electroverse.comm-TSEC website end-to-end, owning the committee's technical requirements.",
      "Provided real-time technical support to participants during Tech-a-thon 2025, resolving issues under live event conditions.",
    ],
    active: false,
  },
];

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Trace 01</p>
          <h2>Experience</h2>
        </div>

        <ol className="timeline">
          {ROLES.map((role) => (
            <li className="timeline-item" key={role.title}>
              <div className="timeline-marker">
                <span className={role.active ? "node node--active" : "node"} />
                <span className="timeline-rail" />
              </div>
              <div className="timeline-content">
                <p className="timeline-period">{role.period}</p>
                <h3 className="timeline-title">{role.title}</h3>
                <p className="timeline-org">{role.org}</p>
                <ul className="timeline-points">
                  {role.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>

        <Signal variant="divider" label="continuity" />
      </div>
    </section>
  );
}
