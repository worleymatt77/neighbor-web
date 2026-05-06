import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Neighbor — Your city, live.',
  description: 'Street musicians, pickup games, block parties, acts of kindness — happening right now, near you.',
  openGraph: {
    title: 'Neighbor — Your city, live.',
    description: 'Street musicians, pickup games, block parties, acts of kindness — happening right now, near you.',
    url: 'https://getneighbor.app',
    siteName: 'Neighbor',
    images: [{ url: 'https://getneighbor.app/og-default.png', width: 1200, height: 630 }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Neighbor — Your city, live.',
    description: 'Street musicians, pickup games, block parties, acts of kindness — happening right now, near you.',
    images: ['https://getneighbor.app/og-default.png'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif', backgroundColor: '#FAF8F2' }}>
        {children}
      </body>
    </html>
  );
}
