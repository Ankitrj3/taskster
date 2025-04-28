interface StatusPillProps {
  readonly status: string;
}

export default function StatusPill({ status }: StatusPillProps) {
  const isUp = status === "UP";

  return (
    <div
      className={`py-1.5 px-4 rounded-full text-xs font-medium animate-pulse ${
        isUp ? "status-pill-up" : "status-pill-down"
      }`}
    >
      <div className="flex items-center">
        <div
          className={
            isUp ? "status-indicator-dot-up" : "status-indicator-dot-down"
          }
        ></div>
        {status}
      </div>
    </div>
  );
}
