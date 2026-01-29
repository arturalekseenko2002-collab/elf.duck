const cache = new Set();

export function preloadImage(src) {
  if (!src || cache.has(src)) return;

  const img = new Image();
  img.src = src;

  if (img.decode) {
    img.decode().catch(() => {});
  }

  cache.add(src);
}