export default function HomePage() {
  return (
    <main style={styles.container}>
      <div style={styles.card}>
        <div style={styles.emoji}>🌱</div>
        <h1 style={styles.title}>Neighbor</h1>
        <p style={styles.tagline}>Your city, live.</p>
        <p style={styles.description}>
          Street musicians, pickup games, block parties, acts of kindness —
          happening right now, near you.
        </p>
        <a
          href="https://testflight.apple.com/join/FJAQTrCq"
          style={styles.button}
        >
          Join the Beta →
        </a>
        <p style={styles.betaNote}>Available on iOS via TestFlight</p>
      </div>
    </main>
  );
}

const styles: Record<string, React.CSSProperties> = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '24px',
    backgroundColor: '#FAF8F2',
  },
  card: {
    maxWidth: 400,
    width: '100%',
    textAlign: 'center',
  },
  emoji: {
    fontSize: 72,
    marginBottom: 16,
    lineHeight: 1,
  },
  title: {
    fontSize: 42,
    fontWeight: 800,
    color: '#1A1A1A',
    margin: '0 0 8px',
    letterSpacing: -1,
  },
  tagline: {
    fontSize: 18,
    color: '#666',
    margin: '0 0 24px',
  },
  description: {
    fontSize: 16,
    color: '#444',
    lineHeight: 1.6,
    margin: '0 0 36px',
  },
  button: {
    display: 'inline-block',
    backgroundColor: '#5BAE6E',
    color: '#fff',
    padding: '16px 32px',
    borderRadius: 16,
    fontSize: 17,
    fontWeight: 700,
    textDecoration: 'none',
    marginBottom: 12,
  },
  betaNote: {
    fontSize: 13,
    color: '#999',
    margin: 0,
  },
};
