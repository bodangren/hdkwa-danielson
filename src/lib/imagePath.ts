/**
 * Returns a public asset path that respects Next.js `basePath`.
 * Use this for any image or asset in `public/` referenced by string path.
 */
export function publicPath(path: string): string {
  const base = process.env.__NEXT_ROUTER_BASEPATH ?? '';
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${base}${cleanPath}`;
}
