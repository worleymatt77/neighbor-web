'use client';

export default function OpenInApp({ postId }: { postId: string }) {
  function handleOpen() {
    // Try to open the app via deep link
    window.location.href = `neighbor://post/${postId}`;
    // After 1.5s, if we're still here, go to TestFlight
    setTimeout(() => {
      window.location.href = 'https://testflight.apple.com/join/FJAQTrCq';
    }, 1500);
  }

  return (
    <button onClick={handleOpen} style={styles.button}>
      Open in Neighbor →
    </button>
  );
}

const styles: Record<string, React.CSSProperties> = {
  button: {
    width: '100%',
    backgroundColor: '#5BAE6E',
    color: '#fff',
    border: 'none',
    padding: '16px 24px',
    borderRadius: 16,
    fontSize: 17,
    fontWeight: 700,
    cursor: 'pointer',
    display: 'block',
  },
};
