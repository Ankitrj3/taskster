import { NextConfig } from "next";

const config: NextConfig = {
  /* config options here */
  output:
    process.env.NEXT_OUTPUT_STANDALONE === "true" ? "standalone" : undefined,
    unoptimized: true,
};

export default config;
