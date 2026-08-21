import {
  ArrowDownRight,
  ArrowUpRight,
  CircleDot,
  Clock3,
  Menu,
  Play,
  Radio,
  ShieldCheck,
  Sparkles,
  Volume2,
} from "lucide-react";
import { useState } from "react";
import { deepDiveLinks, liveStreams, storylines, topVideos } from "@/lib/newsData";

const navItems = [
  { label: "Dashboard", target: "dashboard" },
  { label: "Watchlist", target: "watchlist" },
  { label: "Live desk", target: "live-desk" },
  { label: "2027 file", target: "deep-dive" },
];

function scrollToSection(target: string) {
  document.getElementById(target)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f7f4ee] text-[#181a1d] selection:bg-[#b68243] selection:text-white">
      <header className="relative overflow-hidden bg-[#121518] text-white">
        <div className="header-mesh" aria-hidden="true" />
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="flex h-[76px] items-center justify-between border-b border-white/10">
            <button
              type="button"
              onClick={() => scrollToSection("top")}
              className="group flex items-center gap-3 text-left"
              aria-label="Back to Kenya Pulse top"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#c99b59]/70 text-[#eac481] transition-transform duration-200 group-hover:rotate-12">
                <CircleDot className="h-4 w-4" />
              </span>
              <span>
                <span className="block font-display text-[20px] leading-none tracking-[-0.03em]">Kenya Pulse</span>
                <span className="mt-1 block font-sans text-[9px] font-semibold uppercase tracking-[0.23em] text-white/45">Editorial intelligence</span>
              </span>
            </button>

            <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
              {navItems.map(item => (
                <button
                  type="button"
                  key={item.target}
                  onClick={() => scrollToSection(item.target)}
                  className="font-sans text-[11px] font-semibold uppercase tracking-[0.16em] text-white/55 transition-colors hover:text-[#efc886]"
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <span className="hidden items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-2 font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-white/70 sm:flex">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#d4a758]" />
                Nairobi desk
              </span>
              <button
                type="button"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:border-[#d4a758] hover:text-[#eac481] lg:hidden"
                onClick={() => setMenuOpen(value => !value)}
                aria-label="Toggle menu"
                aria-expanded={menuOpen}
              >
                <Menu className="h-4 w-4" />
              </button>
            </div>
          </div>

          {menuOpen ? (
            <nav className="grid gap-1 py-5 lg:hidden" aria-label="Mobile navigation">
              {navItems.map(item => (
                <button
                  type="button"
                  key={item.target}
                  onClick={() => {
                    setMenuOpen(false);
                    scrollToSection(item.target);
                  }}
                  className="rounded-xl px-3 py-3 text-left font-sans text-xs font-semibold uppercase tracking-[0.16em] text-white/70 hover:bg-white/8 hover:text-[#efc886]"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          ) : null}

          <div id="top" className="grid gap-10 py-14 md:py-20 lg:grid-cols-[1.28fr_0.72fr] lg:gap-16 lg:py-24">
            <div className="max-w-4xl">
              <div className="mb-7 flex items-center gap-3 font-sans text-[10px] font-semibold uppercase tracking-[0.22em] text-[#eac481]">
                <span className="h-px w-9 bg-[#d4a758]" />
                Kenya 2027 election watch
              </div>
              <h1 className="max-w-4xl font-display text-[clamp(3rem,7vw,6.7rem)] leading-[0.9] tracking-[-0.052em] text-balance">
                The election is still ahead. The stakes are already here.
              </h1>
              <p className="mt-8 max-w-2xl font-sans text-[16px] leading-7 text-white/65 md:text-[18px] md:leading-8">
                A considered read on Kenya’s emerging 2027 cycle: shifting alliances, political violence, renewed ICC scrutiny, and the public-service pressures shaping the national mood.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => scrollToSection("dashboard")}
                  className="group inline-flex items-center gap-3 rounded-full bg-[#d7ac69] px-5 py-3 font-sans text-[11px] font-bold uppercase tracking-[0.16em] text-[#1a1916] transition-all hover:bg-[#f0ce93]"
                >
                  Explore the brief
                  <ArrowDownRight className="h-4 w-4 transition-transform group-hover:translate-y-0.5 group-hover:translate-x-0.5" />
                </button>
                <span className="font-sans text-[11px] uppercase tracking-[0.16em] text-white/40">Updated editorial snapshot</span>
              </div>
            </div>

            <aside className="self-end border-l border-white/15 pl-6 sm:pl-8 lg:pb-2" aria-label="Current editorial focus">
              <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-[#eac481]">The pulse, right now</p>
              <p className="mt-4 font-display text-[25px] leading-[1.05] tracking-[-0.035em] text-white md:text-[30px]">
                The political-violence and accountability story is now the campaign story.
              </p>
              <div className="mt-6 flex items-center gap-2 text-white/50">
                <Clock3 className="h-3.5 w-3.5" />
                <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.14em]">Current feed review · 21 Aug 2026</span>
              </div>
            </aside>
          </div>
        </div>
      </header>

      <main>
        <section className="border-b border-[#1c1e21]/10 bg-[#eee8dc]">
          <div className="mx-auto flex max-w-[1440px] items-center gap-4 overflow-hidden px-5 py-3 sm:px-8 lg:px-12">
            <span className="inline-flex shrink-0 items-center gap-2 font-sans text-[10px] font-bold uppercase tracking-[0.18em] text-[#9a6933]">
              <Sparkles className="h-3.5 w-3.5" />
              Desk note
            </span>
            <span className="h-4 w-px shrink-0 bg-[#1c1e21]/15" />
            <p className="min-w-0 truncate font-sans text-[12px] text-[#363432]/70">Five active clusters to follow across Kenya’s political, public-service, and breaking-news agendas.</p>
          </div>
        </section>

        <section id="watchlist" className="scroll-mt-8 mx-auto max-w-[1440px] px-5 py-16 sm:px-8 md:py-20 lg:px-12">
          <div className="mb-9 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="eyebrow">Editor’s watchlist</p>
              <h2 className="section-title mt-3">Three reports worth your time.</h2>
            </div>
            <p className="max-w-md font-sans text-sm leading-6 text-[#5e5d59]">A balanced first pass: long-form investigation, political context, and a major national breaking-news update.</p>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            {topVideos.map((video, index) => (
              <article key={video.href} className="video-card group relative flex min-h-[328px] flex-col overflow-hidden rounded-[20px] p-6 md:p-7">
                <div className="relative flex items-start justify-between gap-4">
                  <span className="font-sans text-[11px] font-bold tracking-[0.16em] text-[#b37f3e]">0{index + 1}</span>
                  <span className="rounded-full border border-[#1c1e21]/10 bg-white/70 px-2.5 py-1 font-sans text-[9px] font-bold uppercase tracking-[0.14em] text-[#51504c]">{video.category}</span>
                </div>
                <div className="relative mt-auto pt-10">
                  <h3 className="font-display text-[27px] leading-[1.01] tracking-[-0.035em] text-[#1d1f21] md:text-[30px]">{video.title}</h3>
                  <div className="mt-5 flex flex-wrap gap-x-3 gap-y-2 font-sans text-[10px] font-bold uppercase tracking-[0.13em] text-[#64615a]">
                    <span>{video.publisher}</span>
                    <span className="text-[#b37f3e]">{video.runtime}</span>
                    <span>{video.views}</span>
                  </div>
                  <a
                    href={video.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-7 inline-flex items-center gap-2 font-sans text-[11px] font-bold uppercase tracking-[0.16em] text-[#1d1f21] transition-colors hover:text-[#a46c2e]"
                  >
                    Watch on YouTube <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="dashboard" className="scroll-mt-8 border-y border-[#1c1e21]/10 bg-[#e9e2d5] py-16 md:py-20">
          <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
            <div className="mb-10 grid gap-5 md:grid-cols-[1fr_auto] md:items-end">
              <div>
                <p className="eyebrow">Storylines dashboard</p>
                <h2 className="section-title mt-3">The five clusters setting the agenda.</h2>
              </div>
              <div className="flex items-center gap-3 font-sans text-[10px] font-semibold uppercase tracking-[0.15em] text-[#5f5a53]">
                <span className="h-2 w-2 rounded-full bg-[#b37f3e]" /> Developing
                <span className="ml-2 h-2 w-2 rounded-full bg-[#526a6d]" /> Watch
              </div>
            </div>

            <div className="grid auto-rows-[minmax(218px,auto)] gap-4 md:grid-cols-2 xl:grid-cols-12">
              {storylines.map((storyline, index) => (
                <article
                  key={storyline.label}
                  className={`story-card story-card-${storyline.accent} ${index === 0 ? "xl:col-span-5" : index === 1 ? "xl:col-span-4" : index === 2 ? "xl:col-span-3" : index === 3 ? "xl:col-span-7" : "xl:col-span-5"}`}
                >
                  <div className="flex items-start justify-between gap-5">
                    <span className="font-sans text-[11px] font-bold tracking-[0.16em] opacity-60">{storyline.number}</span>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-current/15 px-2.5 py-1 font-sans text-[9px] font-bold uppercase tracking-[0.14em] opacity-75">
                      <span className={`h-1.5 w-1.5 rounded-full ${storyline.status === "live" ? "animate-pulse" : ""} bg-current`} />
                      {storyline.status}
                    </span>
                  </div>
                  <div className="mt-auto">
                    <p className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] opacity-65">{storyline.label}</p>
                    <h3 className="mt-3 max-w-xl font-display text-[26px] leading-[1.02] tracking-[-0.035em] md:text-[31px]">{storyline.headline}</h3>
                    <p className="mt-4 max-w-xl font-sans text-[13px] leading-6 opacity-70">{storyline.detail}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="live-desk" className="scroll-mt-8 bg-[#173235] py-16 text-white md:py-20">
          <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
              <div>
                <div className="flex items-center gap-3 text-[#b8d1c7]">
                  <Radio className="h-4 w-4" />
                  <span className="font-sans text-[10px] font-bold uppercase tracking-[0.21em]">Live broadcasts</span>
                </div>
                <h2 className="mt-4 max-w-sm font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[0.94] tracking-[-0.045em]">Stay with the live desk.</h2>
                <p className="mt-6 max-w-sm font-sans text-sm leading-6 text-white/60">Three live streams for continuous coverage as the day’s political and public-interest stories develop.</p>
              </div>
              <div className="grid gap-3 self-end">
                {liveStreams.map((stream, index) => (
                  <a
                    key={stream.name}
                    href={stream.href}
                    target="_blank"
                    rel="noreferrer"
                    className="live-link group flex items-center gap-4 rounded-2xl border border-white/12 bg-white/[0.045] p-5 transition-colors hover:border-[#b8d1c7]/65 hover:bg-white/[0.09]"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#b8d1c7]/45 text-[#d6eee4]">
                      <Play className="ml-0.5 h-4 w-4 fill-current" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block font-display text-[23px] leading-none tracking-[-0.025em]">{stream.name}</span>
                      <span className="mt-2 block font-sans text-[10px] font-semibold uppercase tracking-[0.15em] text-white/45">{stream.note}</span>
                    </span>
                    <span className="flex items-center gap-2 font-sans text-[10px] font-bold uppercase tracking-[0.15em] text-[#b8d1c7]">
                      Live <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </span>
                    <span className="hidden font-sans text-[10px] text-white/35 sm:block">0{index + 1}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="deep-dive" className="scroll-mt-8 overflow-hidden bg-[#f7f4ee] py-16 md:py-24">
          <div className="mx-auto grid max-w-[1440px] gap-10 px-5 sm:px-8 lg:grid-cols-[0.87fr_1.13fr] lg:gap-16 lg:px-12">
            <div className="relative">
              <div className="absolute -left-10 -top-10 h-48 w-48 rounded-full border border-[#ba8848]/30" aria-hidden="true" />
              <p className="eyebrow relative">2027 politics deep-dive</p>
              <h2 className="relative mt-3 max-w-lg font-display text-[clamp(3rem,5vw,5rem)] leading-[0.92] tracking-[-0.048em]">The Nyoro file.</h2>
              <p className="relative mt-6 max-w-md font-sans text-[15px] leading-7 text-[#5b5a55]">A presidential-bid announcement is only the surface. These extended reports trace the organisational and political questions behind it.</p>
              <div className="relative mt-8 inline-flex items-center gap-2 rounded-full border border-[#1c1e21]/10 bg-white px-4 py-2 font-sans text-[10px] font-bold uppercase tracking-[0.15em] text-[#7f5b31]">
                <ShieldCheck className="h-3.5 w-3.5" /> Context, not prediction
              </div>
            </div>
            <div className="divide-y divide-[#1c1e21]/10 border-y border-[#1c1e21]/10">
              {deepDiveLinks.map((item, index) => (
                <a
                  key={item.title}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex gap-5 py-6 first:pt-6 last:pb-6"
                >
                  <span className="pt-1 font-sans text-[11px] font-bold tracking-[0.15em] text-[#ae7a3d]">0{index + 1}</span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-display text-[24px] leading-[1.05] tracking-[-0.03em] text-[#202124] transition-colors group-hover:text-[#9a672f] md:text-[29px]">{item.title}</span>
                    <span className="mt-3 block font-sans text-[10px] font-bold uppercase tracking-[0.15em] text-[#6a6862]">{item.source}</span>
                  </span>
                  <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-[#a36e33] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-[#121518] text-white">
        <div className="mx-auto grid max-w-[1440px] gap-8 px-5 py-10 sm:px-8 md:grid-cols-[1fr_auto] lg:px-12">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#c99b59]/70 text-[#eac481]"><CircleDot className="h-3.5 w-3.5" /></span>
              <span className="font-display text-[20px] tracking-[-0.03em]">Kenya Pulse</span>
            </div>
            <p className="mt-4 max-w-xl font-sans text-[12px] leading-6 text-white/45">An editorial dashboard built from a reviewed YouTube News snapshot. Headline, view, and live-stream information may change at source. This interface is a guide to reporting, not a replacement for verified news coverage.</p>
          </div>
          <div className="flex items-start gap-2 font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-white/40 md:justify-self-end">
            <Volume2 className="mt-0.5 h-3.5 w-3.5" /> Kenya, in context
          </div>
        </div>
      </footer>
    </div>
  );
}
