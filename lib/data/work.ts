export interface WorkItem {
  slug: string;
  href: string | null; // null = case study not yet published
  tag: string;
  title: string;
  role: string;
  timeline: string;
  summary: string;
  impact: string;
  thumbnail?: string;
  thumbnailAlt?: string;
  featured?: boolean; // true = shown in "Selected work"
  external?: boolean; // true = external link, opens in a new tab
  ctaLabel?: string;
}

export const WORK_ITEMS: WorkItem[] = [
  {
    slug: "asteradocs",
    href: "/work/asteradocs",
    tag: "Enterprise document management",
    title: "AsteraDocs",
    role: "Sole UX Designer · Innovatily Inc.",
    timeline: "Dec 2024 – May 2025",
    summary:
      "A role-based platform that organises semiconductor product documentation and support tickets, so customers and internal teams find the right document for the right product.",
    impact: "[Ticket reduction figure, confirmed from the ticket log]",
    featured: true,
  },
  {
    slug: "factweavers",
    href: "/work/factweavers",
    tag: "AI decision intelligence",
    title: "FactWeavers AI",
    role: "Product Designer 2 · Dbiz AI",
    timeline: "Aug 2025 – Mar 2026",
    summary:
      "Designed the core workspace for an AI-powered analytics platform that turns raw enterprise data into decision-ready narratives for data and business teams.",
    impact: "[Confirm outcome figure before publishing]",
    thumbnail: "/projects/factweavers/factweavers-thumbnail.png",
    thumbnailAlt: "FactWeavers Discover / Insights Hub showing metric cards with AI summaries and trend charts.",
    featured: true,
  },
  {
    slug: "universal-ai",
    href: null,
    tag: "AI · Business intelligence",
    title: "Universal AI: Data into Actionable Insights",
    role: "Product Designer · FactWeavers",
    timeline: "2025-26",
    summary:
      "A conversational AI experience for FactWeavers that lets users interact with business data in natural language, discover insights, and move from AI-generated responses toward reusable metrics and dashboards.",
    impact: "Transformed complex BI workflows into a conversational AI experience for faster insight discovery and dashboard creation.",
    thumbnail: "/projects/thumbnails/universai-ai-thumbnail.png",
    thumbnailAlt: "FactWeavers Universal AI conversational analytics view generating a chart from a natural-language question.",
  },
  {
    slug: "quickbot",
    href: null,
    tag: "Conversational commerce · AI",
    title: "Quickbot: Easy & Quick E-Commerce Chat Experiences",
    role: "Product Designer · Innovatily",
    timeline: "2024-25",
    summary:
      "A conversational commerce POC exploring how customers could discover, compare, and evaluate products through an AI-powered chatbot instead of navigating a traditional e-commerce site.",
    impact: "A conceptual POC; not an official partnership or deployment.",
    thumbnail: "/projects/thumbnails/quickbot-thumbnail.png",
    thumbnailAlt: "Quickbot conversational e-commerce chatbot experience POC.",
  },
  {
    slug: "sbi-yono-login",
    href: null,
    tag: "Fintech · UX case study",
    title: "Revamping the SBI YONO Login Experience",
    role: "Independent UX Case Study",
    timeline: "2024",
    summary:
      "A UX exploration focused on rethinking the SBI YONO login experience to make authentication clearer, more intuitive, and easier to navigate.",
    impact: "An independent case study not commissioned or published by SBI.",
    thumbnail: "/projects/thumbnails/sbiyono-thumbnail.png",
    thumbnailAlt: "SBI YONO login experience redesign case study.",
  },
  {
    slug: "behance",
    href: "https://www.behance.net/akshayashokan1",
    tag: "Visual design · Explorations",
    title: "Explore More on Behance; Mockups, UI Explorations, etc.",
    role: "",
    timeline: "",
    summary: "A collection of additional UI explorations, visual concepts, and design mockups.",
    impact: "Discover more visual design work and UI explorations on Behance.",
    thumbnail: "/projects/thumbnails/behance-thumbnail.png",
    thumbnailAlt: "Visual design mockups and UI explorations available on Behance.",
    external: true,
    ctaLabel: "Explore Behance",
  },
];
