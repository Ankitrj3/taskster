// API base URL
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8080";

// Generic API response type
export interface ApiResponse<T> {
  status: string;
  message: string;
  data: T;
  timestamp: string;
}

// Health data type
export interface HealthData {
  status: string;
  service: string;
  version: string;
  components: {
    application: string;
    database: string;
    cache: string;
  };
}

// Fetch health status
export async function fetchHealthStatus(): Promise<ApiResponse<HealthData>> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/v1/health`);

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching health status:", error);
    throw error;
  }
}
