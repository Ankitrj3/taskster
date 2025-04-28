import { fetchHealthStatus } from "./api";

/**
 * Format time consistently
 */
export const formatTime = (date: Date): string => {
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";
  const formattedHours = hours % 12 || 12;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

  return `${formattedHours}:${formattedMinutes} ${ampm}`;
};

/**
 * Check system health status with retry mechanism
 */
export const checkHealth = async (
  setLoading: (loading: boolean) => void,
  setLatency: (latency: number | null) => void,
  setStatus: (status: string | null) => void,
  setError: (error: string | null) => void,
  setLastUpdated: (time: string) => void,
  retryCount: number = 0,
  maxRetries: number = 3
): Promise<void> => {
  try {
    setLoading(true);
    const startTime = performance.now();
    const data = await fetchHealthStatus();
    const endTime = performance.now();

    setLatency(Math.round(endTime - startTime));
    setStatus(data.data.status);
    setError(null);
    setLastUpdated(formatTime(new Date()));
  } catch {
    // Don't show error in console
    if (retryCount < maxRetries) {
      // Retry after a delay
      await new Promise((resolve) =>
        setTimeout(resolve, 1000 * (retryCount + 1))
      );
      return checkHealth(
        setLoading,
        setLatency,
        setStatus,
        setError,
        setLastUpdated,
        retryCount + 1,
        maxRetries
      );
    }

    // Only set error state after all retries are exhausted
    setError("Connection error. Retrying...");
    setStatus(null);
    setLatency(null);
    setLastUpdated(formatTime(new Date()));
  } finally {
    setLoading(false);
  }
};

/**
 * Setup recurring health checks
 */
export const setupHealthCheck = (
  refreshInterval: number,
  setLoading: (loading: boolean) => void,
  setLatency: (latency: number | null) => void,
  setStatus: (status: string | null) => void,
  setError: (error: string | null) => void,
  setLastUpdated: (time: string) => void
) => {
  // Set initial time
  setLastUpdated(formatTime(new Date()));

  // Check health immediately
  checkHealth(setLoading, setLatency, setStatus, setError, setLastUpdated);

  // Setup interval for recurring checks
  const interval = setInterval(
    () =>
      checkHealth(setLoading, setLatency, setStatus, setError, setLastUpdated),
    refreshInterval
  );

  // Return cleanup function
  return () => clearInterval(interval);
};
