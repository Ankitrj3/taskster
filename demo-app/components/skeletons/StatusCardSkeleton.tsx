import StatusIndicatorSkeleton from "./StatusIndicatorSkeleton";

export default function StatusCardSkeleton() {
  return (
    <div className="w-full max-w-md backdrop-blur-lg bg-slate-900/80 border border-slate-700/50 rounded-3xl shadow-xl overflow-hidden">
      {/* Skeleton for border */}
      <div className="h-2 w-full bg-slate-700/50 animate-pulse" />

      <div className="p-8">
        <div className="flex items-center justify-between mb-8">
          {/* Skeleton for title */}
          <div className="h-8 w-32 bg-slate-700/50 rounded-md animate-pulse"></div>

          {/* Skeleton for status pill */}
          <div className="h-6 w-20 bg-slate-700/50 rounded-full animate-pulse"></div>
        </div>

        {/* Status indicator skeleton */}
        <StatusIndicatorSkeleton />

        {/* Latency indicator skeleton */}
        <div className="text-center">
          <div className="inline-flex items-center px-5 py-2.5 bg-slate-800/80 border border-slate-700/50 rounded-full shadow-inner animate-pulse">
            <div className="w-4 h-4 mr-2 bg-slate-700 rounded-full"></div>
            <div className="w-24 h-4 bg-slate-700 rounded"></div>
          </div>
        </div>
      </div>

      {/* Footer skeleton */}
      <div className="px-6 py-4 bg-slate-800/50 border-t border-slate-700/50">
        <div className="flex items-center justify-between">
          <div className="h-4 w-40 bg-slate-700/50 rounded animate-pulse"></div>
          <div className="h-4 w-24 bg-slate-700/50 rounded animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}
