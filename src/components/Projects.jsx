import Signal from "./Signal.jsx";

const PROJECTS = [
  {
    name: "CareerPilot",
    tagline: "Your AI Placement Coach — built, not bought.",
    description:
      "An AI-powered placement command center that turns raw resumes into personalized readiness scores, skill-gap breakdowns, and day-by-day prep roadmaps for dream companies like JP Morgan, Oracle, and Deloitte — powered by Google's Gemini for intelligent, real-time career guidance.",
    image: "/projects/careerpilot.png",
    tags: [
      "Generative AI",
      "MERN Stack",
      "LLM-Powered",
      "Real-Time Analytics",
      "JWT Auth",
    ],
    href: "https://career-pilot-cyan.vercel.app/",
    github: "https://github.com/PRIYANIII/PPCsePPO",
  },

  {
    name: "Portfolio",
    tagline: "A digital space built to showcase my work.",
    description:
      "A modern developer portfolio designed to showcase projects, technical skills, experience, and achievements through a clean, interactive interface with a focus on performance, responsive design, and thoughtful user experience.",
    image: "/projects/image.png",
    tags: [
      "React",
      "Vite",
      "Responsive Design",
      "UI/UX",
      "Frontend",
    ],
    href: "https://portfolio-six-coral-4ssghwsafp.vercel.app/",
    github: "https://github.com/PRIYANIII/portfolio",
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Trace 02</p>
          <h2>Projects</h2>
        </div>

        <div className="projects-grid">
          {PROJECTS.map((p) => (
            <div className="project-card" key={p.name}>
              <div className="project-thumb">
                <img
                  src={p.image}
                  alt={`${p.name} preview`}
                  loading="lazy"
                />
              </div>

              <div className="project-body">
                <div className="project-heading">
                  <h3>{p.name}</h3>

                  <div className="project-links">
                    <a
                      className="project-visit"
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit ↗
                    </a>

                    <a
                      className="project-visit"
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub ↗
                    </a>
                  </div>
                </div>

                <p className="project-tagline">{p.tagline}</p>

                <p className="project-desc">{p.description}</p>

                <div className="chip-row">
                  {p.tags.map((t) => (
                    <span className="chip chip--mono" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <Signal variant="divider" label="deployed" />
      </div>
    </section>
  );
}