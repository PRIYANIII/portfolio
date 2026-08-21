import Signal from "./Signal.jsx";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero-inner">
        <p className="eyebrow"> Mumbai, IN</p>
        <h1 className="hero-title">
          Priyani Gulgulia
        </h1>
        <p className="hero-role">
          building on the web.
        </p>
        <p className="hero-desc">
          
        </p>

        <div className="hero-actions">
          <a className="btn btn--primary" href="#experience">
            View experience
          </a>
          <a className="btn btn--ghost" href="mailto:jainpriyani272@gmail.com">
            jainpriyani272@gmail.com
          </a>
        </div>

        

        <div className="hero-meta">
          <span>CGPA 8.99</span>
          <span className="dot" />
          <span>TSEC, Class of 2027</span>
          <span className="dot" />
          <span>+91 93203 73110</span>
        </div>
      </div>
    </section>
  );
}
