import { Bookmark, BookmarkCheck, ExternalLink, Trash2 } from "lucide-react";

export type WatchlistEntry = {
  id: string;
  title: string;
  meta: string;
  href?: string;
};

type SavedStoryTrayProps = {
  items: WatchlistEntry[];
  onRemove: (id: string) => void;
};

export default function SavedStoryTray({ items, onRemove }: SavedStoryTrayProps) {
  return (
    <section id="saved-stories" className="scroll-mt-8 border-y border-[#1c1e21]/10 bg-[#fbf9f4]">
      <div className="mx-auto max-w-[1440px] px-5 py-5 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-4 md:flex-row md:items-center">
          <div className="flex shrink-0 items-center gap-3 md:w-[230px]">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#e8dbc3] text-[#855a29]">
              {items.length ? <BookmarkCheck className="h-4 w-4" /> : <Bookmark className="h-4 w-4" />}
            </span>
            <span>
              <span className="block font-sans text-[10px] font-bold uppercase tracking-[0.18em] text-[#8f6130]">Saved desk</span>
              <span className="mt-1 block font-display text-[19px] leading-none tracking-[-0.025em] text-[#242526]">{items.length} {items.length === 1 ? "story" : "stories"} held</span>
            </span>
          </div>
          {items.length ? (
            <div className="flex min-w-0 flex-1 gap-3 overflow-x-auto pb-1 md:pb-0">
              {items.map(item => (
                <div key={item.id} className="group flex min-w-[236px] items-center gap-2 rounded-xl border border-[#1c1e21]/10 bg-white px-3 py-2.5">
                  <span className="min-w-0 flex-1">
                    <span className="line-clamp-1 block font-sans text-[12px] font-semibold text-[#252629]">{item.title}</span>
                    <span className="mt-1 block font-sans text-[9px] font-bold uppercase tracking-[0.12em] text-[#7b776f]">{item.meta}</span>
                  </span>
                  {item.href ? (
                    <a href={item.href} target="_blank" rel="noreferrer" className="rounded-md p-1 text-[#9e6c32] transition-colors hover:bg-[#f4ead9]" aria-label={`Open ${item.title}`}>
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  ) : null}
                  <button type="button" onClick={() => onRemove(item.id)} className="rounded-md p-1 text-[#8f8980] transition-colors hover:bg-[#f7e3dd] hover:text-[#a5503e]" aria-label={`Remove ${item.title} from saved stories`}>
                    <Trash2 className="h-3.5 w-3.5" />
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <p className="font-sans text-[12px] leading-5 text-[#706c64]">Bookmark any recommendation or storyline to keep it here for later viewing. Your saved desk stays available on this browser.</p>
          )}
        </div>
      </div>
    </section>
  );
}
