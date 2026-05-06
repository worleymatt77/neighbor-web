import { createClient } from '@supabase/supabase-js';
import type { Metadata } from 'next';
import OpenInApp from './OpenInApp';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
);

const CATEGORY_EMOJIS: Record<string, string> = {
  attraction: '📍',
  random_kindness: '❤️',
  helped_stranger: '🤝',
  community_gesture: '✊',
  other: '📍',
};

function getEmoji(category: string, tag: string | null): string {
  if (tag) {
    const tagEmojis: Record<string, string> = {
      'Street Musician': '🎵', 'Pickup Basketball': '🏀', 'Block Party': '🎉',
      'Farmers Market': '🥦', 'Chess in the Park': '♟️', 'Street Fair': '🎪',
      'Group Run': '🏃', 'Street Performer': '🎭', 'Jazz in the Park': '🎷',
    };
    if (tagEmojis[tag]) return tagEmojis[tag];
  }
  return CATEGORY_EMOJIS[category] ?? '📍';
}

type Report = {
  id: string;
  category: string;
  tag: string | null;
  description: string;
  photo_url: string | null;
  neighborhood: string | null;
  created_at: string;
  is_live: boolean;
};

async function getReport(id: string): Promise<Report | null> {
  const { data } = await supabase
    .from('reports')
    .select('id, category, tag, description, photo_url, neighborhood, created_at, is_live')
    .eq('id', id)
    .neq('hidden', true)
    .single();
  return data as Report | null;
}

function timeAgo(dateStr: string): string {
  const diff = Date.now() - new Date(dateStr).getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return 'just now';
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs}h ago`;
  return `${Math.floor(hrs / 24)}d ago`;
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const report = await getReport(id);
  if (!report) {
    return { title: 'Neighbor — Your city, live.' };
  }

  const emoji = getEmoji(report.category, report.tag);
  const label = report.tag ?? report.category.replace('_', ' ');
  const location = report.neighborhood ? ` in ${report.neighborhood}` : ' nearby';
  const title = `${emoji} ${label}${location}`;
  const description = report.description;
  const image = report.photo_url ?? 'https://getneighbor.app/og-default.png';

  return {
    title: `${title} · Neighbor`,
    description,
    openGraph: {
      title: `${title} · Neighbor`,
      description,
      url: `https://getneighbor.app/post/${id}`,
      siteName: 'Neighbor',
      images: [{ url: image, width: 1200, height: 630 }],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} · Neighbor`,
      description,
      images: [image],
    },
  };
}

export default async function PostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const report = await getReport(id);

  if (!report) {
    return (
      <main style={styles.container}>
        <div style={styles.card}>
          <div style={styles.emoji}>🌱</div>
          <h1 style={styles.title}>Post not found</h1>
          <p style={styles.meta}>This post may have been removed.</p>
          <a href="/" style={styles.link}>← Back to Neighbor</a>
        </div>
      </main>
    );
  }

  const emoji = getEmoji(report.category, report.tag);
  const label = report.tag ?? report.category.replace('_', ' ');
  const location = report.neighborhood ?? 'Nearby';

  return (
    <main style={styles.container}>
      <div style={styles.card}>
        {/* Header */}
        <a href="/" style={styles.brand}>🌱 Neighbor</a>

        {/* Post card */}
        <div style={styles.post}>
          {report.is_live && (
            <div style={styles.liveBadge}>🔴 LIVE</div>
          )}

          <div style={styles.postHeader}>
            <span style={styles.postEmoji}>{emoji}</span>
            <div>
              <div style={styles.postLabel}>{label}</div>
              <div style={styles.postMeta}>📍 {location} · {timeAgo(report.created_at)}</div>
            </div>
          </div>

          {report.photo_url && (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={report.photo_url} alt={label} style={styles.photo} />
          )}

          <p style={styles.description}>{report.description}</p>
        </div>

        {/* CTA */}
        <OpenInApp postId={id} />

        <p style={styles.footerNote}>
          See what&apos;s happening near you on Neighbor
        </p>
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
    maxWidth: 420,
    width: '100%',
    textAlign: 'center',
  },
  brand: {
    display: 'block',
    fontSize: 18,
    fontWeight: 700,
    color: '#5BAE6E',
    textDecoration: 'none',
    marginBottom: 24,
  },
  post: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    textAlign: 'left',
    marginBottom: 20,
    boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
  },
  liveBadge: {
    display: 'inline-block',
    backgroundColor: '#E74C3C',
    color: '#fff',
    fontSize: 11,
    fontWeight: 700,
    padding: '3px 8px',
    borderRadius: 8,
    marginBottom: 12,
  },
  postHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    marginBottom: 12,
  },
  postEmoji: { fontSize: 36 },
  postLabel: { fontSize: 17, fontWeight: 700, color: '#1A1A1A' },
  postMeta: { fontSize: 13, color: '#999', marginTop: 2 },
  photo: {
    width: '100%',
    borderRadius: 12,
    marginBottom: 12,
    display: 'block',
    objectFit: 'cover',
    maxHeight: 300,
  },
  description: {
    fontSize: 15,
    color: '#333',
    lineHeight: 1.6,
    margin: 0,
  },
  emoji: { fontSize: 48, marginBottom: 12 },
  title: { fontSize: 28, fontWeight: 800, color: '#1A1A1A', margin: '0 0 8px' },
  meta: { fontSize: 15, color: '#666', marginBottom: 24 },
  link: { color: '#5BAE6E', fontSize: 15, fontWeight: 600 },
  footerNote: {
    fontSize: 13,
    color: '#aaa',
    marginTop: 16,
  },
};
