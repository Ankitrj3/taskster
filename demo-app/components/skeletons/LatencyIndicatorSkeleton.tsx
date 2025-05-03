export default function LatencyIndicatorSkeleton() {
  return (
    <div className="inline-flex items-center px-5 py-2.5 bg-slate-800/80 border border-slate-700/50 rounded-full shadow-inner animate-pulse">
      <div className="w-4 h-4 mr-2 bg-slate-700 rounded-full"></div>
      <div className="w-24 h-4 bg-slate-700 rounded"></div>
    </div>
  );
}
