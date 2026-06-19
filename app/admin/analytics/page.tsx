import { redirect } from 'next/navigation';

const API_URL = process.env.API_URL ?? 'http://localhost:5000/api';
const ANALYTICS_ADMIN_SECRET = process.env.ANALYTICS_ADMIN_SECRET ?? '';

interface DashboardData {
  dau: number;
  mau: number;
  totalEventsToday: number;
  totalEvents7d: number;
  topEvents: { event: string; count: number }[];
  dauSeries: { date: string; dau: number }[];
  eventSeries: { date: string; count: number }[];
}

async function fetchDashboard(): Promise<DashboardData | null> {
  try {
    const res = await fetch(`${API_URL}/analytics/dashboard`, {
      headers: { 'x-analytics-secret': ANALYTICS_ADMIN_SECRET },
      next: { revalidate: 60 },
    });
    if (!res.ok) return null;
    const json = await res.json();
    return json.data as DashboardData;
  } catch {
    return null;
  }
}

// --- Inline SVG mini line chart ---
function LineChart({
  series,
  valueKey,
  color,
}: {
  series: { date: string; [key: string]: string | number }[];
  valueKey: string;
  color: string;
}) {
  if (series.length === 0) return <div className="text-sm text-gray-500">No data</div>;

  const values = series.map((d) => Number(d[valueKey]));
  const max = Math.max(...values, 1);
  const W = 280;
  const H = 64;
  const pad = 4;

  const points = series.map((d, i) => {
    const x = pad + (i / Math.max(series.length - 1, 1)) * (W - pad * 2);
    const y = H - pad - (Number(d[valueKey]) / max) * (H - pad * 2);
    return `${x},${y}`;
  });

  const polyline = points.join(' ');
  const areaClose = `${W - pad},${H - pad} ${pad},${H - pad}`;

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full" style={{ height: H }}>
      <defs>
        <linearGradient id={`grad-${color.replace('#', '')}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.25" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <polygon
        points={`${polyline} ${areaClose}`}
        fill={`url(#grad-${color.replace('#', '')})`}
      />
      <polyline points={polyline} fill="none" stroke={color} strokeWidth="2" strokeLinejoin="round" />
      {series.map((d, i) => {
        const [x, y] = points[i].split(',').map(Number);
        return (
          <circle key={d.date} cx={x} cy={y} r="3" fill={color} />
        );
      })}
    </svg>
  );
}

// --- Horizontal bar chart ---
function BarChart({ data }: { data: { event: string; count: number }[] }) {
  if (data.length === 0) return <div className="text-sm text-gray-500">No events yet</div>;
  const max = data[0].count;
  return (
    <div className="space-y-2">
      {data.map((item) => (
        <div key={item.event} className="flex items-center gap-3">
          <span
            className="text-xs font-mono text-gray-300 shrink-0"
            style={{ width: 180, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}
          >
            {item.event}
          </span>
          <div className="flex-1 h-5 bg-gray-800 rounded overflow-hidden">
            <div
              className="h-full rounded"
              style={{
                width: `${(item.count / max) * 100}%`,
                background: '#22d3ee',
                minWidth: 4,
              }}
            />
          </div>
          <span className="text-xs text-gray-400 w-10 text-right">{item.count}</span>
        </div>
      ))}
    </div>
  );
}

// --- Metric card ---
function MetricCard({
  label,
  value,
  sub,
}: {
  label: string;
  value: string | number;
  sub?: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 flex flex-col gap-1">
      <span className="text-xs font-semibold uppercase tracking-widest text-gray-400">{label}</span>
      <span className="text-4xl font-bold text-white">{value}</span>
      {sub && <span className="text-xs text-gray-500">{sub}</span>}
    </div>
  );
}

// --- Date label row ---
function DateLabels({ series }: { series: { date: string }[] }) {
  if (series.length === 0) return null;
  return (
    <div className="flex justify-between mt-1 px-1">
      {series.map((d) => (
        <span key={d.date} className="text-[10px] text-gray-600">
          {new Date(d.date).toLocaleDateString('en', { month: 'short', day: 'numeric' })}
        </span>
      ))}
    </div>
  );
}

interface PageProps {
  searchParams: Promise<{ key?: string }>;
}

export default async function AnalyticsDashboardPage({ searchParams }: PageProps) {
  const params = await searchParams;

  if (!ANALYTICS_ADMIN_SECRET || params.key !== ANALYTICS_ADMIN_SECRET) {
    redirect('/');
  }

  const data = await fetchDashboard();

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white p-6 md:p-10">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Spendly Analytics</h1>
          <p className="text-sm text-gray-500 mt-1">Internal dashboard · auto-refreshes every 60s</p>
        </div>

        {!data ? (
          <div className="rounded-2xl border border-red-500/30 bg-red-500/10 p-6 text-red-400">
            Failed to load analytics. Check that the API is reachable and{' '}
            <code className="font-mono">ANALYTICS_ADMIN_SECRET</code> is set.
          </div>
        ) : (
          <>
            {/* Metrics row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <MetricCard label="DAU" value={data.dau} sub="unique users today" />
              <MetricCard label="MAU" value={data.mau} sub="unique users (30d)" />
              <MetricCard label="Events today" value={data.totalEventsToday} />
              <MetricCard label="Events (7d)" value={data.totalEvents7d} />
            </div>

            {/* Charts row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Events over time */}
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h2 className="text-sm font-semibold text-gray-300 mb-4">Events per day (7d)</h2>
                <LineChart series={data.eventSeries} valueKey="count" color="#22d3ee" />
                <DateLabels series={data.eventSeries} />
              </div>

              {/* DAU over time */}
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h2 className="text-sm font-semibold text-gray-300 mb-4">DAU (7d)</h2>
                <LineChart series={data.dauSeries} valueKey="dau" color="#a78bfa" />
                <DateLabels series={data.dauSeries} />
              </div>
            </div>

            {/* Top events */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h2 className="text-sm font-semibold text-gray-300 mb-4">Top events (7d)</h2>
              <BarChart data={data.topEvents} />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
