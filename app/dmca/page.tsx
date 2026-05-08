export const metadata = {
  title: 'DMCA Policy — Neighbor',
};

export default function DMCAPolicy() {
  return (
    <main style={styles.page}>
      <div style={styles.container}>
        <h1 style={styles.h1}>DMCA Policy</h1>
        <p style={styles.updated}>Last updated: May 8, 2026</p>

        <p style={styles.p}>
          Neighbor respects the intellectual property rights of others and expects users of our platform to do the same. In accordance with the Digital Millennium Copyright Act of 1998 (DMCA), we will respond promptly to claims of copyright infringement that are reported to our designated copyright agent.
        </p>

        <h2 style={styles.h2}>Reporting Copyright Infringement</h2>
        <p style={styles.p}>
          If you believe that content on Neighbor infringes your copyright, please send a written notice to our designated agent that includes all of the following:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>A physical or electronic signature of the copyright owner or a person authorized to act on their behalf</li>
          <li style={styles.li}>Identification of the copyrighted work you believe has been infringed</li>
          <li style={styles.li}>Identification of the material you believe is infringing, with enough detail for us to locate it (e.g., a link or screenshot)</li>
          <li style={styles.li}>Your contact information — name, address, telephone number, and email address</li>
          <li style={styles.li}>A statement that you have a good-faith belief that the use of the material is not authorized by the copyright owner, its agent, or the law</li>
          <li style={styles.li}>A statement that the information in your notice is accurate and, under penalty of perjury, that you are the copyright owner or authorized to act on their behalf</li>
        </ul>

        <h2 style={styles.h2}>Designated Copyright Agent</h2>
        <p style={styles.p}>
          Send DMCA notices to our designated agent at:
        </p>
        <p style={styles.p}>
          <strong>Email:</strong> <a href="mailto:hello@getneighbor.app" style={styles.a}>hello@getneighbor.app</a><br />
          <strong>Subject line:</strong> DMCA Takedown Notice
        </p>
        <p style={styles.p}>
          We will review your notice and respond within a reasonable time. If we determine the claim is valid, we will remove or disable access to the infringing content and notify the user who posted it.
        </p>

        <h2 style={styles.h2}>Counter-Notice</h2>
        <p style={styles.p}>
          If content you posted was removed in response to a DMCA notice and you believe it was removed in error, you may submit a counter-notice to our designated agent. Your counter-notice must include:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>Your physical or electronic signature</li>
          <li style={styles.li}>Identification of the content that was removed and where it appeared before removal</li>
          <li style={styles.li}>A statement under penalty of perjury that you have a good-faith belief the content was removed by mistake or misidentification</li>
          <li style={styles.li}>Your name, address, and telephone number</li>
          <li style={styles.li}>A statement consenting to jurisdiction in the federal district court where your address is located</li>
        </ul>
        <p style={styles.p}>
          Upon receipt of a valid counter-notice, we will forward it to the original complainant. If the complainant does not file a court action within 10–14 business days, the content may be restored.
        </p>

        <h2 style={styles.h2}>Repeat Infringers</h2>
        <p style={styles.p}>
          Neighbor will terminate the accounts of users who are found to be repeat infringers in appropriate circumstances.
        </p>

        <h2 style={styles.h2}>Good Faith</h2>
        <p style={styles.p}>
          Please note that under 17 U.S.C. § 512(f), any person who knowingly materially misrepresents that material is infringing may be subject to liability. If you are unsure whether content on our platform infringes your copyright, consult a lawyer before filing a notice.
        </p>

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
