import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // skip strict mode
  reactStrictMode: false,
  output: 'export',  // Enable static exports
  basePath: process.env.NODE_ENV === 'production' ? '/RajPortfolio' : '',  // Updated to match your repository name
  env: {
    googleAnalyticsId: process.env.NODE_ENV === "production" ? process.env.GA_MEASUREMENT_ID : "",
  }
};

export default nextConfig;
