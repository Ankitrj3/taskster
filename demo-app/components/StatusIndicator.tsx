import { Icon } from "./shared";

interface StatusIndicatorProps {
  readonly status: string;
}

export default function StatusIndicator({ status }: StatusIndicatorProps) {
  const isUp = status === "UP";

  return (
    <div className="text-center py-8">
      <div
        className={`
          mx-auto h-36 w-36 rounded-full mb-8 flex items-center justify-center
          ${
            isUp
              ? "bg-emerald-500/20 border-4 border-emerald-500/50 text-emerald-400"
              : "bg-red-500/20 border-4 border-red-500/50 text-red-400"
          }
        `}
      >
        <Icon name={isUp ? "check" : "x"} size="lg" className="h-16 w-16" />
      </div>

      <h2
        className={`text-2xl font-bold mb-3 ${
          isUp ? "text-emerald-400" : "text-red-400"
        }`}
      >
        {isUp ? "System is Running" : "System is Down"}
      </h2>

      <p className="text-slate-400 max-w-xs mx-auto mb-8">
        {isUp
          ? "All services are operating normally."
          : "We are experiencing some issues. Our team has been notified."}
      </p>
    </div>
  );
}
