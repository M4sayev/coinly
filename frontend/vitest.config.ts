import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";
import tsconfigPaths from "vite-tsconfig-paths";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [react(), tsconfigPaths(), svgr({ include: "**/*.svg" })],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./test/setupTests.ts",
    include: ["**/*.test.{ts,tsx}"],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./"),
    },
  },
  cacheDir: ".vitest_cache",
});
