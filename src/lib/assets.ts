// Resolves public asset paths with the correct basePath prefix
// Works in both local dev (no prefix) and production GitHub Pages deployment (/bitss-enterprise)
const isProd = process.env.NODE_ENV === "production";
export const basePath = isProd ? "/bitss-enterprise" : "";
export const asset = (path: string) => `${basePath}${path}`;
