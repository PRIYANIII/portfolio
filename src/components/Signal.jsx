export default function Signal({ variant = "divider", label }) {
  if (variant === "hero") {
    return (
      <div className="signal signal--hero" aria-hidden="true">
        <svg viewBox="0 0 900 160" preserveAspectRatio="none" width="100%" height="100%">
          <line x1="0" y1="80" x2="900" y2="80" className="signal-baseline" />
          <path
            className="signal-trace signal-trace--ghost"
            d="M0,80 L60,80 L90,80 L110,30 L130,130 L150,80 L210,80 L240,80 L260,20 L280,140 L300,80 L360,80 L390,80 L410,45 L430,115 L450,80 L510,80 L540,80 L560,15 L580,145 L600,80 L660,80 L690,80 L710,50 L730,110 L750,80 L810,80 L840,80 L860,25 L880,135 L900,80"
          />
          <path
            className="signal-trace signal-trace--main"
            d="M0,80 L60,80 L90,80 L110,30 L130,130 L150,80 L210,80 L240,80 L260,20 L280,140 L300,80 L360,80 L390,80 L410,45 L430,115 L450,80 L510,80 L540,80 L560,15 L580,145 L600,80 L660,80 L690,80 L710,50 L730,110 L750,80 L810,80 L840,80 L860,25 L880,135 L900,80"
          />
        </svg>
      </div>
    );
  }

  return (
    <div className="signal signal--divider">
      <svg viewBox="0 0 400 32" preserveAspectRatio="none" width="100%" height="32">
        <path
          className="signal-trace signal-trace--divider"
          d="M0,16 L40,16 L54,16 L62,4 L70,28 L78,16 L130,16 L144,16 L152,4 L160,28 L168,16 L220,16 L234,16 L242,4 L250,28 L258,16 L310,16 L324,16 L332,4 L340,28 L348,16 L400,16"
        />
      </svg>
      {label && <span className="signal-label">{label}</span>}
    </div>
  );
}
