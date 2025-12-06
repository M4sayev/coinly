import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    rules: {
      "*.svg": {
        loaders: ["@svgr/webpack"],
        condition: {
          all: [{ not: { path: "*.url.svg" } }, { not: "foreign" }],
        },
        as: "*.js",
      },
    },
  },
};

export default nextConfig;
