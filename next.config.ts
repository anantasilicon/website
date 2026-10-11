import type { NextConfig } from "next";
import { PHASE_DEVELOPMENT_SERVER } from "next/constants";
import path from "node:path";
import legal from "./src/config/legal.json";

export default function config(phase: string): NextConfig {
  // The legal pages live in files named `page.legal.tsx`. That extension is only registered when the
  // pages are published (or while running `next dev` for review), so an unpublished production build
  // contains no /privacy or /terms route at all. See docs/legal/README.md.
  const includeLegal = legal.published || phase === PHASE_DEVELOPMENT_SERVER;

  return {
    // Fully static site: no server, no backend. Output goes to ./out
    output: "export",
    // Optional sub-path for hosts like GitHub Pages project sites (e.g. BASE_PATH=/ananta). Empty by default.
    basePath: process.env.BASE_PATH ?? "",
    trailingSlash: true,
    pageExtensions: ["tsx", "ts", "jsx", "js", ...(includeLegal ? ["legal.tsx"] : [])],
    turbopack: {
      root: path.resolve(import.meta.dirname),
      rules: {
        "*.css": {
          loaders: ["@tailwindcss/turbopack"],
          as: "*.css",
        },
      },
    },
  };
}
