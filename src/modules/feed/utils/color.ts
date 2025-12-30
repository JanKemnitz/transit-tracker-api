export function normalizeRouteColor(color: string | null): string | null {
  // strip '#', trim, and treat pure black as no color
  const cleaned = (color ?? "").replaceAll("#", "").trim()
  if (!cleaned) return null
  return cleaned.toLowerCase() === "000000" ? null : cleaned
}