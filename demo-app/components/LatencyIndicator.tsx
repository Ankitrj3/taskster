import { Icon } from "./shared";

interface LatencyIndicatorProps {
  readonly latency: number;
}

export default function LatencyIndicator({ latency }: LatencyIndicatorProps) {
  return (
    <div className="inline-flex items-center px-5 py-2.5 bg-slate-800 border border-slate-700 rounded-full shadow-inner">
      <Icon name="clock" className="mr-2 text-slate-400" />
      <span className="text-sm font-medium text-slate-300">
        Latency: <span className="text-white font-semibold">{latency}ms</span>
      </span>
    </div>
  );
}
