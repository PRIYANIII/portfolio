const SOCIALS = [
  { label: "Email", href: "mailto:jainpriyani272@gmail.com" },
  { label: "Phone", href: "tel:+919320373110" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/priyani-gulgulia-58539b219/" },
  { label: "GitHub", href: "https://github.com/priyaniii" },
  { label: "LeetCode", href: "https://leetcode.com/u/jainpriyani272/" },
  { label: "GeeksforGeeks", href: "https://www.geeksforgeeks.org/user/jainpriytro3/" },
  { label: "Codolio", href: "https://codolio.com/profile/priyanijain" },
];

export default function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="container footer-inner">
        <div>
          <p className="eyebrow">End of transmission</p>
          <h2 className="footer-title">Let's build something.</h2>
          <p className="footer-desc">
            Open to internships and full-stack roles where engineering fundamentals
            meet product work.
          </p>
        </div>

        <div className="footer-links">
          {SOCIALS.map((s) => (
            <a key={s.label} href={s.href} className="footer-link">
              <span>{s.label}</span>
              <span className="footer-link-arrow">→</span>
            </a>
          ))}
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Priyani Gulgulia</span>
        <span className="footer-bottom-mono">TSEC · Mumbai</span>
      </div>
    </footer>
  );
}
