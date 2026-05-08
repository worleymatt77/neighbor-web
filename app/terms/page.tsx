export const metadata = {
  title: 'Terms of Service — Neighbor',
};

export default function TermsOfService() {
  return (
    <main style={styles.page}>
      <div style={styles.container}>
        <h1 style={styles.h1}>Terms of Service</h1>
        <p style={styles.updated}>Last updated: May 8, 2026</p>

        <p style={styles.p}>
          Welcome to Neighbor. By using our app or website, you agree to these Terms of Service. Please read them.
        </p>

        <h2 style={styles.h2}>Using Neighbor</h2>
        <p style={styles.p}>Neighbor is a platform for sharing real-time, positive local happenings — street musicians, pickup games, acts of kindness, and community moments. You must be at least 13 years old to use Neighbor.</p>

        <h2 style={styles.h2}>Your Content</h2>
        <p style={styles.p}>You own the content you post. By posting, you grant Neighbor a non-exclusive license to display and distribute that content within the app and for promotional purposes (e.g., sharing a screenshot of a post on our social channels).</p>
        <p style={styles.p}>You are responsible for what you post. Do not post content that:</p>
        <ul style={styles.ul}>
          <li style={styles.li}>Is illegal, harmful, threatening, or harassing</li>
          <li style={styles.li}>Contains nudity, graphic violence, or explicit material</li>
          <li style={styles.li}>Is spam or deliberately false or misleading</li>
          <li style={styles.li}>Violates someone else's privacy or intellectual property</li>
          <li style={styles.li}>Depicts minors in any inappropriate context</li>
        </ul>

        <h2 style={styles.h2}>Content Moderation</h2>
        <p style={styles.p}>We review flagged posts using automated tools and human judgment. We may remove any content that violates these Terms without notice. Repeated violations may result in account termination.</p>

        <h2 style={styles.h2}>Location</h2>
        <p style={styles.p}>Posts are pinned to a location. By posting, you understand that the approximate location of that post will be visible to other users. Do not post content that reveals private addresses or locations in ways that could endanger someone.</p>

        <h2 style={styles.h2}>Account</h2>
        <p style={styles.p}>You are responsible for maintaining the security of your account. Do not share your credentials. Notify us immediately at <a href="mailto:hello@getneighbor.app" style={styles.a}>hello@getneighbor.app</a> if you suspect unauthorized access.</p>

        <h2 style={styles.h2}>Availability</h2>
        <p style={styles.p}>We do our best to keep Neighbor running, but we can't guarantee uninterrupted service. We may modify or discontinue features at any time.</p>

        <h2 style={styles.h2}>Limitation of Liability</h2>
        <p style={styles.p}>Neighbor is provided "as is." To the fullest extent permitted by law, we are not liable for any indirect, incidental, or consequential damages arising from your use of the app.</p>

        <h2 style={styles.h2}>Changes to These Terms</h2>
        <p style={styles.p}>We may update these Terms as the app evolves. Continued use of Neighbor after changes means you accept the updated Terms.</p>

        <h2 style={styles.h2}>Contact</h2>
        <p style={styles.p}>Questions? Email us at <a href="mailto:hello@getneighbor.app" style={styles.a}>hello@getneighbor.app</a>.</p>

        <div style={styles.footer}>
          <a href="/" style={styles.a}>← Back to Neighbor</a>
        </div>
      </div>
    </main>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: { backgroundColor: '#FAF8F2', minHeight: '100vh', padding: '0 16px' },
  container: { maxWidth: 680, margin: '0 auto', padding: '60px 0 80px' },
  h1: { fontSize: 32, fontWeight: 800, color: '#1A2E1C', marginBottom: 8, letterSpacing: -0.5 },
  h2: { fontSize: 18, fontWeight: 700, color: '#1A2E1C', marginTop: 36, marginBottom: 8 },
  updated: { fontSize: 13, color: '#9AA89C', marginBottom: 32 },
  p: { fontSize: 15, color: '#5A6B5C', lineHeight: '1.7', marginBottom: 12 },
  ul: { paddingLeft: 20, marginBottom: 12 },
  li: { fontSize: 15, color: '#5A6B5C', lineHeight: '1.7', marginBottom: 6 },
  a: { color: '#16A34A', textDecoration: 'none' },
  footer: { marginTop: 60, paddingTop: 24, borderTop: '1px solid #E4EDE6' },
};
