export type VideoItem = {
  title: string;
  publisher: string;
  runtime: string;
  views: string;
  href: string;
  category: string;
};

export type Storyline = {
  number: string;
  label: string;
  headline: string;
  detail: string;
  status: "developing" | "watch" | "live";
  accent: "gold" | "terracotta" | "blue" | "sage" | "ink";
};

export const topVideos: VideoItem[] = [
  {
    title: "Who killed Kenyatta University student last seen at 3AM? | Murder Tapes SN3 EP 11",
    publisher: "NTV Kenya",
    runtime: "57:01",
    views: "39.9K views",
    href: "https://www.youtube.com/watch?v=XqPo_UKyra0",
    category: "INVESTIGATIONS",
  },
  {
    title: "ICC Calls Loom as Kenya’s Political Violence Revives Memories of Past Election Crisis",
    publisher: "KTN News Kenya",
    runtime: "4:55",
    views: "5.46K views",
    href: "https://www.youtube.com/watch?v=7THu_oqn7AY",
    category: "POLITICS",
  },
  {
    title: "Seven bodies recovered from Mount Ololokwe helicopter crash to undergo DNA analysis",
    publisher: "NTV Kenya",
    runtime: "4:41",
    views: "8.12K views",
    href: "https://www.youtube.com/watch?v=jmh8buF7adU",
    category: "BREAKING NEWS",
  },
];

export const storylines: Storyline[] = [
  {
    number: "01",
    label: "Ndindi Nyoro",
    headline: "A presidential bid reshapes the succession conversation.",
    detail:
      "A new political direction and nationwide organising are keeping Nyoro at the centre of the 2027 watchlist.",
    status: "developing",
    accent: "gold",
  },
  {
    number: "02",
    label: "political violence/ICC",
    headline: "Accountability questions are moving to the foreground.",
    detail:
      "Homa Bay violence, security responses, and renewed ICC discussion are defining the election-risk narrative.",
    status: "watch",
    accent: "terracotta",
  },
  {
    number: "03",
    label: "Samburu helicopter crash",
    headline: "Recovery and investigation remain the immediate priorities.",
    detail:
      "Authorities are focused on identification and on the circumstances behind the Mount Ololokwe crash.",
    status: "developing",
    accent: "blue",
  },
  {
    number: "04",
    label: "health/public services",
    headline: "Pressure on care and reform delivery is rising.",
    detail:
      "Hospital disruption, strike action, and questions around health-system reforms remain an everyday political test.",
    status: "watch",
    accent: "sage",
  },
  {
    number: "05",
    label: "Gachagua/Ng'eno",
    headline: "Local mourning intersects with national opposition politics.",
    detail:
      "Emurua Dikirr events and security concerns continue to draw senior opposition figures into the story.",
    status: "live",
    accent: "ink",
  },
];

export const liveStreams = [
  {
    name: "K24TV Live",
    href: "https://www.youtube.com/watch?v=qi_bW6aH8z4",
    note: "Rolling Kenyan news coverage",
  },
  {
    name: "NTV Kenya Live",
    href: "https://www.youtube.com/watch?v=6Qj6kqBhflc",
    note: "National news and analysis",
  },
  {
    name: "KTN News Kenya Live",
    href: "https://www.youtube.com/watch?v=8BcE7PfUx-w",
    note: "Live newsroom coverage",
  },
];

export const deepDiveLinks = [
  {
    title: "Ndindi Nyoro declares 2027 presidential bid",
    source: "K24TV · 2:02",
    href: "https://www.youtube.com/watch?v=4UR6pspnjRM",
  },
  {
    title: "FULL Address: MP Ndindi Nyoro unveils new party and direction ahead of 2027",
    source: "NTV Kenya · 1:34:20",
    href: "https://www.youtube.com/results?search_query=FULL+Address+MP+Ndindi+Nyoro+unveils+new+party+and+direction+ahead+of+2027",
  },
  {
    title: "NDINDI NYORO's POLITICAL PLAN: The Man Behind the Politics, Promises and Plans for Kenya",
    source: "KTN News Kenya · 46:41",
    href: "https://www.youtube.com/results?search_query=NDINDI+NYORO%27s+POLITICAL+PLAN+The+Man+Behind+the+Politics+Promises+and+Plans+for+Kenya",
  },
];
