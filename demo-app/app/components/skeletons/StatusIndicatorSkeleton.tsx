export default function StatusIndicatorSkeleton() {
  return (
    <div className="text-center py-8">
      {/* Skeleton for the large status indicator */}
      <div className="mx-auto h-36 w-36 rounded-full mb-8 animate-pulse bg-slate-700/50"></div>

      {/* Skeleton for title */}
      <div className="h-10 w-64 bg-slate-700/50 rounded-lg mb-3 mx-auto animate-pulse"></div>

      {/* Skeleton for description */}
      <div className="space-y-2 max-w-xs mx-auto mb-8">
        <div className="h-4 bg-slate-700/40 rounded animate-pulse"></div>
        <div className="h-4 bg-slate-700/40 rounded animate-pulse"></div>
      </div>
    </div>
  );
}
