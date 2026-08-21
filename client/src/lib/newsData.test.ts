import { describe, expect, it } from "vitest";
import { liveStreams, storylines, topVideos } from "./newsData";

describe("Kenya Pulse editorial content", () => {
  it("ships exactly three fully specified recommended videos", () => {
    expect(topVideos).toHaveLength(3);
    topVideos.forEach(video => {
      expect(video.title).toBeTruthy();
      expect(video.publisher).toBeTruthy();
      expect(video.runtime).toMatch(/^\d{1,2}:\d{2}$/);
      expect(video.views).toMatch(/views$/);
      expect(video.href).toMatch(/^https:\/\/www\.youtube\.com\/watch\?v=/);
    });
  });

  it("preserves the required storyline and live-stream labels", () => {
    expect(storylines.map(storyline => storyline.label)).toEqual([
      "Ndindi Nyoro",
      "political violence/ICC",
      "Samburu helicopter crash",
      "health/public services",
      "Gachagua/Ng'eno",
    ]);
    expect(liveStreams.map(stream => stream.name)).toEqual([
      "K24TV Live",
      "NTV Kenya Live",
      "KTN News Kenya Live",
    ]);
  });
});
