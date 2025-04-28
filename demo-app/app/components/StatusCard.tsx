"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { setupHealthCheck } from "@/lib/statusUtils";
import { Card} from "./shared";
import LoadingSpinner from "./LoadingSpinner";
import StatusPill from "./StatusPill";
import Footer from "./Footer";

// Dynamic imports with loading fallbacks
const StatusIndicator = dynamic(() => import("./StatusIndicator"), {
  loading: () => <StatusIndicatorSkeleton />,
  ssr: false,
});

const StatusIndicatorSkeleton = dynamic(
  () => import("./skeletons/StatusIndicatorSkeleton"),
  {
    ssr: true,
  }
);

const LatencyIndicator = dynamic(() => import("./LatencyIndicator"), {
  ssr: false,
});

const ErrorDisplay = dynamic(() => import("./ErrorDisplay"), {
  ssr: false,
});

export default function StatusCard() {
  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [latency, setLatency] = useState<number | null>(null);
  const [lastUpdated, setLastUpdated] = useState<string>("");

  const refreshInterval = 10000; // 10 seconds

  useEffect(() => {
    const cleanup = setupHealthCheck(
      refreshInterval,
      setLoading,
      setLatency,
      setStatus,
      setError,
      setLastUpdated
    );

    return cleanup;
  }, []);

  const handleRetry = () => {
    setLoading(true);
    setError(null);
  };

  const header = status && (
    <div
      className={`
        h-2 w-full 
        ${
          status === "UP"
            ? "bg-emerald-500 animate-pulse"
            : "bg-red-500 animate-pulse"
        }
      `}
    />
  );

  const footer = (
    <Footer lastUpdated={lastUpdated} refreshInterval={refreshInterval} />
  );

  return (
    <Card header={header} footer={footer}>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold text-white">System Status</h1>
        {status && !loading && <StatusPill status={status} />}
      </div>

      {loading && <LoadingSpinner />}

      {error && !loading && (
        <ErrorDisplay errorMessage={error} onRetry={handleRetry} />
      )}

      {status && !loading && !error && (
        <>
          <StatusIndicator status={status} />
          {latency !== null && (
            <div className="text-center">
              <LatencyIndicator latency={latency} />
            </div>
          )}
        </>
      )}
    </Card>
  );
}
