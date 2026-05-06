const PINS = [
  { top: '12%',  left: '8%',  emoji: '🎷', color: '#E74C3C', label: 'Jazz in the Park',     live: true,  anim: 'float-a', delay: '0s'    },
  { top: '18%',  left: '78%', emoji: '🏀', color: '#E74C3C', label: 'Pickup Basketball',    live: true,  anim: 'float-b', delay: '0.4s'  },
  { top: '55%',  left: '5%',  emoji: '❤️', color: '#FF6B9D', label: 'Act of Kindness',      live: false, anim: 'float-c', delay: '0.8s'  },
  { top: '60%',  left: '82%', emoji: '🎉', color: '#E74C3C', label: 'Block Party',          live: true,  anim: 'float-a', delay: '1.2s'  },
  { top: '75%',  left: '15%', emoji: '♟️', color: '#F39C12', label: 'Chess in the Park',    live: false, anim: 'float-b', delay: '0.6s'  },
  { top: '28%',  left: '88%', emoji: '🤝', color: '#5BAE6E', label: 'Helped a Stranger',    live: false, anim: 'float-c', delay: '1s'    },
  { top: '80%',  left: '72%', emoji: '🎸', color: '#9B59B6', label: 'Street Musician',      live: true,  anim: 'float-a', delay: '0.2s'  },
];

const TICKER_ITEMS = [
  { emoji: '🎷', label: 'Jazz in the Park',      neighborhood: 'Uptown',    time: '4m ago',  live: true  },
  { emoji: '🏀', label: 'Pickup Basketball',     neighborhood: 'West Side', time: '9m ago',  live: true  },
  { emoji: '❤️', label: 'Act of Kindness',       neighborhood: 'Downtown',  time: '14m ago', live: false },
  { emoji: '🎉', label: 'Block Party',           neighborhood: 'East Side', time: '21m ago', live: true  },
  { emoji: '♟️', label: 'Chess in the Park',     neighborhood: 'Midtown',   time: '33m ago', live: false },
  { emoji: '🌮', label: 'Food Truck',            neighborhood: 'NoHo',      time: '41m ago', live: true  },
  { emoji: '🎭', label: 'Street Performer',      neighborhood: 'SoHo',      time: '52m ago', live: true  },
  { emoji: '🤝', label: 'Random Act of Kindness',neighborhood: 'Brooklyn',  time: '1h ago',  live: false },
];

const STEPS = [
  { emoji: '📍', title: 'Pin what you see',    desc: 'Tap a card, snap a photo, post in seconds.' },
  { emoji: '👀', title: 'See what\'s around',  desc: 'Live map shows everything happening near you right now.' },
  { emoji: '🔔', title: 'Get notified',         desc: 'Push alerts when something goes live within 3 miles.' },
];

export default function HomePage() {
  const doubled = [...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <>
      {/* NAV */}
      <nav style={s.nav}>
        <span style={s.navLogo}>🌱 Neighbor</span>
        <a href="https://testflight.apple.com/join/FJAQTrCq" style={s.navCta}>Join Beta</a>
      </nav>

      {/* HERO */}
      <section style={s.hero}>
        {/* Floating background pins */}
        <div style={s.pinsLayer} className="pins-layer" aria-hidden>
          {PINS.map((pin, i) => (
            <div key={i} className={`pin-${i}`} style={{
              position: 'absolute',
              top: pin.top, left: pin.left,
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
              animation: `${pin.anim} ${3 + i * 0.4}s ease-in-out infinite`,
              animationDelay: pin.delay,
              zIndex: 0,
            }}>
              {pin.live && (
                <div style={{
                  position: 'absolute',
                  width: 52, height: 52, borderRadius: '50%',
                  border: `2px solid ${pin.color}`,
                  top: -8, left: -8,
                  animation: 'pulse-ring 2s ease-out infinite',
                  animationDelay: pin.delay,
                }} />
              )}
              <div style={{
                width: 36, height: 36, borderRadius: '50%',
                backgroundColor: pin.live ? '#fff' : pin.color + '22',
                border: `2.5px solid ${pin.color}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 16,
                boxShadow: '0 4px 16px rgba(0,0,0,0.12)',
              }}>
                {pin.emoji}
              </div>
              <div style={{
                backgroundColor: 'rgba(255,255,255,0.95)',
                borderRadius: 10,
                padding: '3px 8px',
                fontSize: 10, fontWeight: 600, color: '#333',
                whiteSpace: 'nowrap',
                boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
              }}>
                {pin.label}
              </div>
            </div>
          ))}
        </div>

        {/* Hero text */}
        <div style={s.heroContent}>
          <div className="fade-up-1" style={s.livePill}>
            <span style={s.liveDot} />
            Live in NYC
          </div>
          <h1 className="fade-up-2" style={s.heroTitle}>Your city,<br /><span style={{ color: '#E74C3C' }}>live.</span></h1>
          <p className="fade-up-3" style={s.heroSub}>
            Street musicians, pickup games, block parties,<br className="hide-mobile" /> acts of kindness — happening right now, near you.
          </p>
          <a className="fade-up-4" href="https://testflight.apple.com/join/FJAQTrCq" style={s.heroCta}>
            Join the Beta →
          </a>
          <p className="fade-up-4" style={s.heroNote}>iOS · Free · TestFlight</p>
        </div>
      </section>

      {/* TICKER */}
      <div style={s.tickerWrap}>
        <div style={s.tickerTrack}>
          {doubled.map((item, i) => (
            <div key={i} style={s.tickerCard}>
              <span style={s.tickerEmoji}>{item.emoji}</span>
              <div>
                <div style={s.tickerLabel}>{item.label}</div>
                <div style={s.tickerMeta}>📍 {item.neighborhood} · {item.time}</div>
              </div>
              {item.live && <span style={s.tickerLive}>LIVE</span>}
            </div>
          ))}
        </div>
      </div>

      {/* HOW IT WORKS */}
      <section style={s.steps}>
        <p style={s.sectionEyebrow}>How it works</p>
        <h2 style={s.sectionTitle}>Post in seconds.<br />Know in real time.</h2>
        <div style={s.stepsGrid}>
          {STEPS.map((step, i) => (
            <div key={i} style={s.stepCard}>
              <div style={s.stepEmoji}>{step.emoji}</div>
              <h3 style={s.stepTitle}>{step.title}</h3>
              <p style={s.stepDesc}>{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={s.ctaSection}>
        <div style={s.ctaCard}>
          <div style={s.ctaEmoji}>🌱</div>
          <h2 style={s.ctaTitle}>Neighbor is live<br />in New York City.</h2>
          <p style={s.ctaSub}>Be among the first to post. Join the beta on TestFlight.</p>
          <a href="https://testflight.apple.com/join/FJAQTrCq" style={s.ctaBtn}>
            Join the Beta →
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={s.footer}>
        <span style={s.footerLogo}>🌱 Neighbor</span>
        <div style={s.footerLinks}>
          <a href="/privacy" style={s.footerLink}>Privacy</a>
          <a href="/terms" style={s.footerLink}>Terms</a>
        </div>
      </footer>

      <style>{`
        .ticker-track {
          display: flex;
          gap: 12px;
          animation: ticker 32s linear infinite;
          width: max-content;
        }
        @media (prefers-reduced-motion: reduce) {
          .ticker-track { animation: none; }
        }
      `}</style>
    </>
  );
}

const s: Record<string, React.CSSProperties> = {
  // NAV
  nav: {
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    padding: '0 32px', height: 60,
    backgroundColor: 'rgba(250,248,242,0.85)',
    backdropFilter: 'blur(12px)',
    borderBottom: '1px solid rgba(0,0,0,0.06)',
  },
  navLogo: { fontSize: 17, fontWeight: 700, color: '#1A1A1A', letterSpacing: -0.3 },
  navCta: {
    backgroundColor: '#5BAE6E', color: '#fff',
    padding: '8px 20px', borderRadius: 100,
    fontSize: 14, fontWeight: 600, textDecoration: 'none',
  },

  // HERO
  hero: {
    position: 'relative', minHeight: '100vh',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    overflow: 'hidden', paddingTop: 60,
  },
  pinsLayer: {
    position: 'absolute', inset: 0,
    pointerEvents: 'none',
  },
  heroContent: {
    position: 'relative', zIndex: 1,
    textAlign: 'center',
    display: 'flex', flexDirection: 'column', alignItems: 'center',
    padding: '0 24px',
  },
  livePill: {
    display: 'inline-flex', alignItems: 'center', gap: 8,
    backgroundColor: '#fff',
    border: '1px solid rgba(0,0,0,0.08)',
    borderRadius: 100,
    padding: '6px 16px',
    fontSize: 13, fontWeight: 600, color: '#1A1A1A',
    marginBottom: 28,
    boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
  },
  liveDot: {
    width: 8, height: 8, borderRadius: '50%',
    backgroundColor: '#E74C3C',
    boxShadow: '0 0 0 3px rgba(231,76,60,0.2)',
    display: 'inline-block',
  },
  heroTitle: {
    fontSize: 'clamp(56px, 10vw, 96px)',
    fontWeight: 900,
    color: '#1A1A1A',
    letterSpacing: -3,
    lineHeight: 1.0,
    marginBottom: 24,
  },
  heroSub: {
    fontSize: 18, color: '#666', lineHeight: 1.6,
    maxWidth: 480, marginBottom: 36,
  },
  heroCta: {
    display: 'inline-block',
    backgroundColor: '#5BAE6E', color: '#fff',
    padding: '16px 36px', borderRadius: 100,
    fontSize: 17, fontWeight: 700, textDecoration: 'none',
    boxShadow: '0 8px 32px rgba(91,174,110,0.35)',
    marginBottom: 14,
    transition: 'transform 0.15s, box-shadow 0.15s',
  },
  heroNote: { fontSize: 13, color: '#aaa' },

  // TICKER
  tickerWrap: {
    overflow: 'hidden',
    borderTop: '1px solid rgba(0,0,0,0.06)',
    borderBottom: '1px solid rgba(0,0,0,0.06)',
    backgroundColor: '#fff',
    padding: '16px 0',
  },
  tickerTrack: {
    display: 'flex',
    gap: 12,
    animation: 'ticker 32s linear infinite',
    width: 'max-content',
  },
  tickerCard: {
    display: 'flex', alignItems: 'center', gap: 10,
    backgroundColor: '#FAF8F2',
    borderRadius: 14, padding: '10px 16px',
    flexShrink: 0, minWidth: 220,
    border: '1px solid rgba(0,0,0,0.06)',
  },
  tickerEmoji: { fontSize: 22 },
  tickerLabel: { fontSize: 13, fontWeight: 600, color: '#1A1A1A' },
  tickerMeta: { fontSize: 11, color: '#aaa', marginTop: 1 },
  tickerLive: {
    marginLeft: 'auto',
    backgroundColor: '#E74C3C',
    color: '#fff', fontSize: 9, fontWeight: 700,
    padding: '2px 6px', borderRadius: 6,
  },

  // HOW IT WORKS
  steps: {
    padding: '100px 24px',
    textAlign: 'center',
    maxWidth: 960, margin: '0 auto',
  },
  sectionEyebrow: {
    fontSize: 12, fontWeight: 700, letterSpacing: 1.5,
    textTransform: 'uppercase', color: '#5BAE6E',
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 'clamp(32px, 5vw, 52px)',
    fontWeight: 900, letterSpacing: -1.5,
    color: '#1A1A1A', lineHeight: 1.1,
    marginBottom: 56,
  },
  stepsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
    gap: 24,
  },
  stepCard: {
    backgroundColor: '#fff',
    borderRadius: 24, padding: '36px 28px',
    textAlign: 'left',
    border: '1px solid rgba(0,0,0,0.06)',
    boxShadow: '0 4px 24px rgba(0,0,0,0.04)',
  },
  stepEmoji: { fontSize: 36, marginBottom: 16 },
  stepTitle: { fontSize: 18, fontWeight: 700, color: '#1A1A1A', marginBottom: 8 },
  stepDesc: { fontSize: 15, color: '#666', lineHeight: 1.6 },

  // FINAL CTA
  ctaSection: {
    padding: '0 24px 100px',
  },
  ctaCard: {
    maxWidth: 640, margin: '0 auto',
    backgroundColor: '#1A1A1A',
    borderRadius: 32, padding: '64px 48px',
    textAlign: 'center',
  },
  ctaEmoji: { fontSize: 48, marginBottom: 20 },
  ctaTitle: {
    fontSize: 'clamp(28px, 4vw, 44px)',
    fontWeight: 900, color: '#fff',
    letterSpacing: -1.5, lineHeight: 1.1,
    marginBottom: 16,
  },
  ctaSub: { fontSize: 16, color: 'rgba(255,255,255,0.55)', lineHeight: 1.6, marginBottom: 36 },
  ctaBtn: {
    display: 'inline-block',
    backgroundColor: '#5BAE6E', color: '#fff',
    padding: '16px 36px', borderRadius: 100,
    fontSize: 17, fontWeight: 700, textDecoration: 'none',
    boxShadow: '0 8px 32px rgba(91,174,110,0.4)',
  },

  // FOOTER
  footer: {
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    padding: '24px 32px',
    borderTop: '1px solid rgba(0,0,0,0.06)',
  },
  footerLogo: { fontSize: 15, fontWeight: 700, color: '#1A1A1A' },
  footerLinks: { display: 'flex', gap: 24 },
  footerLink: { fontSize: 13, color: '#aaa', textDecoration: 'none' },
};
