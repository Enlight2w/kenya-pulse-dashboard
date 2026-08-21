export type CountyRisk = {
  id: string;
  county: string;
  shortLabel: string;
  lat: number;
  lng: number;
  level: "high" | "elevated" | "watch";
  storyline: string;
  summary: string;
  signal: string;
};

export const countyRisks: CountyRisk[] = [
  {
    id: "nairobi",
    county: "Nairobi",
    shortLabel: "Nairobi",
    lat: -1.2864,
    lng: 36.8172,
    level: "high",
    storyline: "political violence/ICC",
    summary: "National political messaging, protest risk, and institutional response converge in the capital.",
    signal: "National command centre",
  },
  {
    id: "kiambu",
    county: "Kiambu",
    shortLabel: "Kiambu",
    lat: -1.0314,
    lng: 36.8681,
    level: "elevated",
    storyline: "Ndindi Nyoro",
    summary: "Central Kenya organising and succession messaging make Kiambu a key early indicator.",
    signal: "Alliance formation watch",
  },
  {
    id: "muranga",
    county: "Murang'a",
    shortLabel: "Murang'a",
    lat: -0.7210,
    lng: 37.1526,
    level: "elevated",
    storyline: "Ndindi Nyoro",
    summary: "Nyoro’s political base is central to the conversation around a national organising push.",
    signal: "Succession storyline",
  },
  {
    id: "homa-bay",
    county: "Homa Bay",
    shortLabel: "Homa Bay",
    lat: -0.5273,
    lng: 34.4571,
    level: "high",
    storyline: "political violence/ICC",
    summary: "Reports of violence and debates over policing put Homa Bay in the highest-risk monitoring tier.",
    signal: "Security accountability",
  },
  {
    id: "narok",
    county: "Narok",
    shortLabel: "Narok",
    lat: -1.0783,
    lng: 35.8601,
    level: "watch",
    storyline: "Gachagua/Ng'eno",
    summary: "Emurua Dikirr events connect local mourning, security concerns, and wider opposition activity.",
    signal: "Regional political movement",
  },
  {
    id: "samburu",
    county: "Samburu",
    shortLabel: "Samburu",
    lat: 0.5156,
    lng: 37.2730,
    level: "watch",
    storyline: "Samburu helicopter crash",
    summary: "Recovery, identification, and the crash investigation remain the live regional concern.",
    signal: "Breaking-news response",
  },
  {
    id: "siaya",
    county: "Siaya",
    shortLabel: "Siaya",
    lat: -0.0617,
    lng: 34.2881,
    level: "elevated",
    storyline: "health/public services",
    summary: "Nursing strike coverage keeps public-service delivery and workplace grievances in focus.",
    signal: "Service-delivery pressure",
  },
];

export const riskStyles = {
  high: { color: "#b85f48", label: "High signal" },
  elevated: { color: "#b88645", label: "Elevated" },
  watch: { color: "#496c6d", label: "Watch" },
} as const;
