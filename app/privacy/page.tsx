export const metadata = {
  title: 'Privacy Policy — Neighbor',
};

export default function PrivacyPolicy() {
  return (
    <main style={styles.page}>
      <div style={styles.container}>
        <h1 style={styles.h1}>Privacy Policy</h1>
        <p style={styles.updated}>Last updated: May 8, 2026</p>

        <p style={styles.p}>
          Neighbor ("we," "our," or "us") is a hyperlocal app for sharing what's happening around you in real time. This Privacy Policy explains what information we collect, how we use it, and your rights.
        </p>

        <h2 style={styles.h2}>Information We Collect</h2>
        <p style={styles.p}><strong>Account information.</strong> When you sign up, we collect your email address.</p>
        <p style={styles.p}><strong>Posts and content.</strong> Photos, descriptions, tags, and location data you submit when posting a report.</p>
        <p style={styles.p}><strong>Location.</strong> We collect your approximate location when you open the app to show you nearby posts and send geofenced notifications. We store your last known location to power push notifications. We do not continuously track your location in the background.</p>
        <p style={styles.p}><strong>Usage data.</strong> Basic analytics such as which features you use, crash reports, and device type. We do not sell this data.</p>
        <p style={styles.p}><strong>Push notification token.</strong> Your device's push token, used to send you nearby activity alerts and comment notifications.</p>

        <h2 style={styles.h2}>How We Use Your Information</h2>
        <ul style={styles.ul}>
          <li style={styles.li}>To show your posts on the map and feed</li>
          <li style={styles.li}>To send push notifications about nearby activity and comments on your posts</li>
          <li style={styles.li}>To maintain your profile, streak, and badges</li>
          <li style={styles.li}>To review flagged content for policy violations</li>
          <li style={styles.li}>To improve the app</li>
        </ul>

        <h2 style={styles.h2}>Content Moderation</h2>
        <p style={styles.p}>
          Posts that receive multiple flags are reviewed automatically using AI. Flagged photos and descriptions may be analyzed to determine whether they violate our community guidelines. Content found to be in violation is removed.
        </p>

        <h2 style={styles.h2}>Sharing Your Information</h2>
        <p style={styles.p}>We do not sell your personal information. We share data only as follows:</p>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>Supabase</strong> — our backend database and storage provider</li>
          <li style={styles.li}><strong>Expo</strong> — our app platform and push notification infrastructure</li>
          <li style={styles.li}><strong>Anthropic</strong> — AI-assisted content moderation (flagged content only)</li>
          <li style={styles.li}><strong>Law enforcement</strong> — if required by law or to protect safety</li>
        </ul>

        <h2 style={styles.h2}>Your Rights</h2>
        <p style={styles.p}>You can delete your account and all associated data at any time from Settings → Delete Account. You can also contact us at <a href="mailto:hello@getneighbor.app" style={styles.a}>hello@getneighbor.app</a> to request data deletion or a copy of your data.</p>

        <h2 style={styles.h2}>Data Retention</h2>
        <p style={styles.p}>Posts are stored until you delete them or delete your account. Location data in push tokens is updated on each app open and is not retained after account deletion.</p>

        <h2 style={styles.h2}>Children's Privacy</h2>
        <p style={styles.p}>Neighbor is not directed at children under 13. We do not knowingly collect information from children under 13.</p>

        <h2 style={styles.h2}>Changes to This Policy</h2>
        <p style={styles.p}>We may update this policy as the app evolves. We'll note the date of the last update at the top of this page.</p>

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
