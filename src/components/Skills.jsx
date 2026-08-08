const GROUPS = [
  {
    label: "Languages",
    tag: "LANG",
    items: ["Java", "Python", "C++", "C", "SQL"],
  },
  {
    label: "Core CS",
    tag: "CORE",
    items: [
      "Data Structures",
      "Algorithms",
      "OOP",
      "Operating Systems",
      "Computer Networks",
      "DBMS",
      "Problem Solving",
    ],
  },
  {
    label: "Web Technologies",
    tag: "WEB",
    items: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "HTML5",
      "CSS3",
      "JavaScript",
      "Bootstrap",
      "Tailwind CSS",
      "EJS",
    ],
  },
  {
    label: "Tools & Platforms",
    tag: "TOOLS",
    items: ["Git", "GitHub", "VS Code", "Material-UI"],
  },
];

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Trace 02</p>
          <h2>Skills</h2>
        </div>

        <div className="skills-grid">
          {GROUPS.map((g) => (
            <div className="skill-card" key={g.label}>
              <div className="skill-card-head">
                <span className="skill-tag">{g.tag}</span>
                <h3>{g.label}</h3>
              </div>
              <div className="chip-row">
                {g.items.map((item) => (
                  <span className="chip" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
