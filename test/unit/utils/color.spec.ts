import { describe, it, expect } from "vitest"
import { normalizeRouteColor } from "src/modules/feed/utils/color"

describe("normalizeRouteColor (unit)", () => {
  it("returns null for null input", () => {
    expect(normalizeRouteColor(null)).toBeNull()
  })

  it("returns null for empty or whitespace-only strings", () => {
    expect(normalizeRouteColor("")).toBeNull()
    expect(normalizeRouteColor("   ")).toBeNull()
  })

  it("returns null for pure black in 6-digit form", () => {
    expect(normalizeRouteColor("000000")).toBeNull()
    expect(normalizeRouteColor("#000000")).toBeNull()
    expect(normalizeRouteColor("  #000000  ")).toBeNull()
  })

  it("does not treat 3-digit #000 as black", () => {
    expect(normalizeRouteColor("#000")).toBe("000")
  })

  it("preserves case for non-black colors", () => {
    expect(normalizeRouteColor("#FFFFFF")).toBe("FFFFFF")
    expect(normalizeRouteColor("#ffffff")).toBe("ffffff")
    expect(normalizeRouteColor(" #12ab34 ")).toBe("12ab34")
  })

  it("strips multiple # characters if present", () => {
    expect(normalizeRouteColor("##00ff00")).toBe("00ff00")
  })

  it("passes through non-hex content (besides removing #)", () => {
    expect(normalizeRouteColor("#GGGGGG")).toBe("GGGGGG")
  })
})
