import { Icon } from "./shared";

interface FooterProps {
  readonly lastUpdated: string;
  readonly refreshInterval: number;
}

export default function Footer({ lastUpdated, refreshInterval }: FooterProps) {
  return (
    <div className="bg-slate-800/80 backdrop-blur-md px-8 py-4 border-t border-slate-700/50">
      <div className="flex justify-between items-center text-slate-400 text-xs">
        <div className="flex items-center">
          <Icon name="clock" size="sm" className="mr-1" />
          Auto-refreshes every {refreshInterval / 1000}s
        </div>
        <div className="flex items-center">
          <Icon name="info" size="sm" className="mr-1" />
          Updated: {lastUpdated}
        </div>
      </div>
    </div>
  );
}
