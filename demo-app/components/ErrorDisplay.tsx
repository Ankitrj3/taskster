import { Button, Icon } from "./shared";

interface ErrorDisplayProps {
  readonly errorMessage: string;
  readonly onRetry?: () => void;
}

export default function ErrorDisplay({
  errorMessage,
  onRetry,
}: ErrorDisplayProps) {
  return (
    <div className="bg-slate-800/80 rounded-2xl p-6 shadow-inner border border-slate-700/70">
      <div className="flex items-start">
        <div className="flex-shrink-0 mr-4">
          <div className="w-10 h-10 rounded-full bg-red-900/60 flex items-center justify-center border border-red-800">
            <Icon name="info" size="lg" className="text-red-400" />
          </div>
        </div>
        <div>
          <h3 className="text-red-300 font-semibold text-lg">
            Connection Error
          </h3>
          <p className="text-red-400 mt-1">{errorMessage}</p>
          {onRetry && (
            <Button onClick={onRetry} variant="secondary" className="mt-4">
              Try Again
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
