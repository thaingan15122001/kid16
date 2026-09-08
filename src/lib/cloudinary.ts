/**
 * Transforms a Cloudinary URL to request an optimized, appropriately-sized image.
 *
 * Inserts transformation parameters right after `/upload/` in the URL.
 * Uses: w_{width},h_{height},c_fill,g_auto,q_auto,f_auto
 *
 * @param url Original Cloudinary URL (e.g. https://res.cloudinary.com/wsaz946u/image/upload/v.../photo.webp)
 * @param width Target display width in pixels (will be doubled for retina)
 * @param height Target display height in pixels (will be doubled for retina)
 * @returns Transformed Cloudinary URL with optimization parameters
 */
export function cloudinary(url: string, width: number, height: number): string {
  const w = Math.round(width * 2);
  const h = Math.round(height * 2);
  const transform = `w_${w},h_${h},c_fill,g_auto,q_auto,f_auto`;
  return url.replace('/upload/', `/upload/${transform}/`);
}
