// Resolves public asset paths with the correct basePath prefix.
// Only GitHub Pages deployments need the /bitss-enterprise prefix.
// Vercel and local dev use the root path.
const isGitHubPages = process.env.DEPLOY_TARGET === 'github';
export const basePath = isGitHubPages ? '/bitss-enterprise' : '';
export const asset = (path: string) => `${basePath}${path}`;
