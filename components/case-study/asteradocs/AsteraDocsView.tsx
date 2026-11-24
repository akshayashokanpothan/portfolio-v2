"use client";

import Link from "next/link";
import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Eyebrow, SectionHeading } from "@/components/ui/SectionHeading";
import { Pill } from "@/components/ui/Pill";
import { COLORS, fontBody, fontDisplay, fontMono } from "@/lib/tokens";
import { ViewToggle, type CaseStudyView } from "@/components/case-study/shared/ViewToggle";

const sectionStyle = { padding: "80px 0", borderTop: `1px solid ${COLORS.border}` } as const;
const bodyStyle = { fontFamily: fontBody, fontSize: 16, lineHeight: 1.7, color: COLORS.inkSoft, marginTop: 16, maxWidth: 680 } as const;
const labelStyle = { fontFamily: fontMono, fontSize: 11, textTransform: "uppercase", letterSpacing: "0.06em", color: COLORS.muted } as const;

const SUMMARY = "A role-based platform for semiconductor product documentation and support tickets, designed as the sole UX designer, end to end.";

const PROBLEM =
  "Product documents, change logs, versions and support tickets were spread across SharePoint, PowerPoint decks and an Excel sheet. Users could not reliably find the right document, and support ticket volume kept rising.";

const CHALLENGES = [
  {
    title: "Finding the right document fast",
    ideal: "Customers and internal teams reach the right document for their product in a few clicks.",
    tradeoff: "A deeper hierarchy: six to eight product families with roughly 10 to 15 products each, which made the admin model harder to design.",
    solution: "Organised content by product family, then product, then document.",
  },
  {
    title: "Managing access without engineering",
    ideal: "Admins control who sees and edits what, without depending on IT for every change.",
    tradeoff: "A minimal, intuitive access model against the flexibility of the manual process they already had.",
    solution: "Eight fixed access levels for most users. Admins can create a custom role by specifying its resources and permissions.",
  },
  {
    title: "Shipping inside three months",
    ideal: "The highest-priority problem ships on time, with the admin panel built to last.",
    tradeoff: "Scope was cut to one or two versions. Strapi offered no-code control, but the client did not want the added platform cost.",
    solution: "Support tickets shipped first. We evaluated Strapi and kept the hard-coded admin.",
  },
];

const WHO = [
  { role: "Authoring and approval staff", detail: "Content, design, product and technical leads who create and approve documents." },
  { role: "Support and content-approval staff", detail: "Who manage tickets and monitor activity." },
  { role: "External customers", detail: "Who own a product and need its documentation, change logs and versions, and who raise tickets." },
  { role: "Process engineers and line supervisors", detail: "Daily users, many with 15 to 20 years on the same workflow." },
];

const DECISIONS = [
  {
    title: "Eight fixed access levels, with custom roles for admins",
    decision: "Most users work with fixed roles, so I kept that mental model. Admins can create a custom role by specifying its resources and permissions.",
    tradeoff: "A minimal, intuitive access model against the flexibility of the manual process they already had.",
  },
  {
    title: "Product family, then product, then document",
    decision: "Users need the right document in a few clicks, so content follows the product structure.",
    tradeoff: "A deeper hierarchy: six to eight families with roughly 10 to 15 products each, which made the admin model harder to design.",
  },
  {
    title: "Admin panel: evaluated Strapi, shipped hard-coded",
    decision: "We built the admin on the core admin panel and Strapi, with some hard-coded elements, then kept only the hard-coded version.",
    tradeoff: "Strapi offered no-code control, but the client did not want the added platform cost.",
  },
  {
    title: "Support tickets first, under a three-month window",
    decision: "Tickets were high priority and low risk, so they shipped first. We shipped on time within the window.",
    tradeoff: "Scope was cut to one or two versions to hold the date.",
  },
  {
    title: "Recovering the requirements",
    decision: "When the scope was misunderstood, I joined calls with the client directly to gather requirements.",
    tradeoff: "The project moved forward once the right use case was confirmed.",
  },
  {
    title: "Agentic triage for low-risk tickets",
    decision: "For experienced users, the first phase digitised and automated what it could. I then designed the agentic triage experience and owned its design specifications.",
    tradeoff: "Engineering implemented it. The original design files are no longer available, so visuals here are recreations.",
  },
];

function Hero({ view, onChange }: { view: CaseStudyView; onChange: (v: CaseStudyView) => void }) {
  return (
    <section style={{ padding: "160px 0 56px" }}>
      <Container>
        <Link href="/" style={{ fontFamily: fontBody, fontSize: 14, color: COLORS.accent, textDecoration: "none" }}>← Back to all work</Link>
        <div style={{ marginTop: 32 }}>
          <Pill>Enterprise document management</Pill>
        </div>
        <h1 style={{ fontFamily: fontDisplay, fontSize: "clamp(36px, 5vw, 56px)", lineHeight: 1.05, color: COLORS.ink, margin: "20px 0 0", maxWidth: 880, letterSpacing: "-0.02em" }}>
          AsteraDocs
        </h1>
        <p style={{ ...bodyStyle, fontSize: 19, marginTop: 20 }}>{SUMMARY}</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 16, marginTop: 32 }}>
          {[
            ["Role", "Sole UX Designer"],
            ["Company", "Innovatily Inc."],
            ["Timeline", "Dec 2024 – May 2025"],
          ].map(([k, v]) => (
            <div key={k} style={{ borderTop: `1px solid ${COLORS.borderStrong}`, paddingTop: 12 }}>
              <div style={labelStyle}>{k}</div>
              <div style={{ fontFamily: fontBody, fontSize: 15, color: COLORS.ink, marginTop: 6 }}>{v}</div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 40 }}>
          <ViewToggle view={view} onChange={onChange} />
        </div>
      </Container>
    </section>
  );
}

function Highlights() {
  return (
    <>
      <section style={sectionStyle}>
        <Container>
          <Eyebrow>The problem</Eyebrow>
          <p style={bodyStyle}>{PROBLEM}</p>
        </Container>
      </section>

      <section style={sectionStyle}>
        <Container>
          <SectionHeading eyebrow="Three challenges" title="What I had to solve" maxWidth={620} />
          <div style={{ display: "grid", gap: 40, marginTop: 40 }}>
            {CHALLENGES.map((c, i) => (
              <div key={c.title}>
                <div style={labelStyle}>Challenge {i + 1}</div>
                <h3 style={{ fontFamily: fontDisplay, fontSize: 22, color: COLORS.ink, margin: "8px 0 0" }}>{c.title}</h3>
                <p style={{ ...bodyStyle, marginTop: 12 }}><strong style={{ color: COLORS.ink }}>Ideal:</strong> {c.ideal}</p>
                <p style={{ ...bodyStyle, marginTop: 8 }}><strong style={{ color: COLORS.ink }}>Tradeoff:</strong> {c.tradeoff}</p>
                <p style={{ ...bodyStyle, marginTop: 8 }}><strong style={{ color: COLORS.ink }}>Solution:</strong> {c.solution}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section style={sectionStyle}>
        <Container>
          <Eyebrow>Outcomes</Eyebrow>
          <ul style={{ ...bodyStyle, paddingLeft: 20, display: "grid", gap: 10 }}>
            <li>Shipped on time, with about 25 users onboarded to test the full platform.</li>
            <li>Daily support tickets: [before, from ticket log] to [after, from ticket log].</li>
            <li>Agentic triage: resolution without escalation, version 1 [logged count and percentage]; version 2 [logged count and percentage].</li>
          </ul>
        </Container>
      </section>
    </>
  );
}

function Full() {
  return (
    <>
      <section style={sectionStyle}>
        <Container>
          <Eyebrow>The problem</Eyebrow>
          <p style={bodyStyle}>{PROBLEM}</p>
        </Container>
      </section>

      <section style={sectionStyle}>
        <Container>
          <SectionHeading eyebrow="Who it was for" title="Four groups, one system" maxWidth={620} />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24, marginTop: 40 }}>
            {WHO.map((w) => (
              <div key={w.role}>
                <h3 style={{ fontFamily: fontDisplay, fontSize: 18, color: COLORS.ink, margin: 0 }}>{w.role}</h3>
                <p style={{ ...bodyStyle, marginTop: 8, fontSize: 15 }}>{w.detail}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section style={sectionStyle}>
        <Container>
          <SectionHeading eyebrow="The scenario" title="From draft to product page" maxWidth={620} />
          <p style={bodyStyle}>
            An internal author creates a document, then it goes through approval: Designer, Design lead, Product manager and CTO. Once approved, it appears on the relevant product page. Customers who own the product can view its documentation, change logs and versions, and raise tickets from the same place.
          </p>
        </Container>
      </section>

      <section style={sectionStyle}>
        <Container>
          <SectionHeading eyebrow="Key decisions" title="Decisions and trade-offs" maxWidth={620} />
          <div style={{ display: "grid", gap: 40, marginTop: 40 }}>
            {DECISIONS.map((d, i) => (
              <div key={d.title} style={{ display: "grid", gridTemplateColumns: "56px 1fr", gap: 16 }}>
                <div style={{ fontFamily: fontMono, fontSize: 13, color: COLORS.accent }}>{String(i + 1).padStart(2, "0")}</div>
                <div>
                  <h3 style={{ fontFamily: fontDisplay, fontSize: 20, color: COLORS.ink, margin: 0 }}>{d.title}</h3>
                  <p style={{ ...bodyStyle, marginTop: 8, fontSize: 15 }}>{d.decision}</p>
                  <p style={{ ...bodyStyle, marginTop: 8, fontSize: 15, color: COLORS.muted }}><strong style={{ color: COLORS.inkSoft }}>Trade-off:</strong> {d.tradeoff}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section style={sectionStyle}>
        <Container>
          <SectionHeading eyebrow="Recreations" title="Generic recreations, labelled" maxWidth={620} />
          <p style={bodyStyle}>The original design files are no longer available. The screens below will be generic recreations with placeholder data.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24, marginTop: 32 }}>
            {["Access-level map", "Document approval flow", "Product-family navigation"].map((t) => (
              <div key={t} style={{ aspectRatio: "16 / 10", border: `1px dashed ${COLORS.borderStrong}`, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", background: COLORS.surface }}>
                <span style={{ fontFamily: fontMono, fontSize: 12, color: COLORS.muted, textAlign: "center", padding: 16 }}>{t}<br />[recreation pending]</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section style={sectionStyle}>
        <Container>
          <SectionHeading eyebrow="Outcomes" title="What changed" maxWidth={620} />
          <ul style={{ ...bodyStyle, paddingLeft: 20, display: "grid", gap: 12 }}>
            <li>Shipped on time, with about 25 users onboarded to test the full platform.</li>
            <li>Daily support tickets: [before, from ticket log] to [after, from ticket log].</li>
            <li>Agentic triage: resolution without escalation, version 1 [logged count and percentage]; version 2 [logged count and percentage].</li>
            <li>Measured over a 60-day testing period covering [6,000+] tickets. [Confirm against the ticket log.]</li>
            <li>Users now find documentation and FAQs in one curated place, rather than across spreadsheets and decks.</li>
          </ul>
        </Container>
      </section>

      <section style={sectionStyle}>
        <Container>
          <Eyebrow>Ownership</Eyebrow>
          <p style={bodyStyle}>
            I owned the design end to end and worked directly with the client’s product manager on all aspects. I ran the client relationship and requirement gathering when the product manager was unavailable, and I owned the design specifications for the agentic triage components. [Product manager’s decisions, to fill in.]
          </p>
        </Container>
      </section>

      <section style={{ ...sectionStyle, paddingBottom: 120 }}>
        <Container>
          <Eyebrow>Reflection</Eyebrow>
          <p style={bodyStyle}>[What I would do differently: your answer.]</p>
        </Container>
      </section>
    </>
  );
}

export function AsteraDocsView() {
  const [view, setView] = useState<CaseStudyView>("highlights");
  return (
    <main style={{ background: COLORS.bg }}>
      <Hero view={view} onChange={setView} />
      {view === "highlights" ? <Highlights /> : <Full />}
    </main>
  );
}
