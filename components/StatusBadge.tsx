interface StatusBadgeProps {
  status: 'approved' | 'pending' | 'rejected' | 'removed' | 'archived' | string;
}

export default function StatusBadge({ status }: StatusBadgeProps) {
  const normalized = status.toLowerCase();

  const styles: Record<string, string> = {
    approved: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    pending: 'bg-amber-100 text-amber-800 border-amber-200',
    rejected: 'bg-rose-100 text-rose-800 border-rose-200',
    removed: 'bg-rose-100 text-rose-800 border-rose-200',
    archived: 'bg-slate-100 text-slate-700 border-slate-200',
  };

  const currentStyle = styles[normalized] || 'bg-slate-100 text-slate-700 border-slate-200';

  return (
    <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold capitalize ${currentStyle}`}>
      {status}
    </span>
  );
}