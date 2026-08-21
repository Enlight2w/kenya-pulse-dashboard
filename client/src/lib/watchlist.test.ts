import { describe, expect, it } from "vitest";
import { parseSavedIds, toggleSavedId } from "./watchlist";

describe("saved story watchlist helpers", () => {
  it("adds and removes a saved item predictably", () => {
    expect(toggleSavedId([], "video-icc")).toEqual(["video-icc"]);
    expect(toggleSavedId(["video-icc", "story-nyoro"], "video-icc")).toEqual([
      "story-nyoro",
    ]);
  });

  it("reads only valid saved-story arrays from storage", () => {
    expect(parseSavedIds('["video-icc","story-nyoro"]')).toEqual([
      "video-icc",
      "story-nyoro",
    ]);
    expect(parseSavedIds('{"id":"video-icc"}')).toEqual([]);
    expect(parseSavedIds("not-json")).toEqual([]);
  });
});
