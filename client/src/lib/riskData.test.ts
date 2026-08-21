import { describe, expect, it } from "vitest";
import { countyRisks, riskStyles } from "./riskData";

describe("county election-risk data", () => {
  it("provides interactive regional context across several Kenyan storylines", () => {
    expect(countyRisks.length).toBeGreaterThanOrEqual(7);
    expect(countyRisks.map(item => item.county)).toEqual(
      expect.arrayContaining(["Nairobi", "Murang'a", "Homa Bay", "Samburu", "Siaya"]),
    );
    countyRisks.forEach(item => {
      expect(item.lat).toBeGreaterThan(-5);
      expect(item.lat).toBeLessThan(6);
      expect(item.lng).toBeGreaterThan(33);
      expect(item.lng).toBeLessThan(43);
      expect(riskStyles[item.level].label).toBeTruthy();
    });
  });
});
