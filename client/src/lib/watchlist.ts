export const WATCHLIST_STORAGE_KEY = "kenya-pulse-saved-stories";

export function toggleSavedId(currentIds: string[], id: string) {
  return currentIds.includes(id)
    ? currentIds.filter(savedId => savedId !== id)
    : [...currentIds, id];
}

export function parseSavedIds(serialized: string | null) {
  if (!serialized) return [];

  try {
    const parsed = JSON.parse(serialized);
    return Array.isArray(parsed) && parsed.every(item => typeof item === "string")
      ? parsed
      : [];
  } catch {
    return [];
  }
}
