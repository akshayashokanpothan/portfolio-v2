import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Eyebrow, SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Pill } from "@/components/ui/Pill";
import { COLORS, fontBody, fontDisplay, fontMono } from "@/lib/tokens";
import { WORK_ITEMS } from "@/lib/data/work";
import { PROFILE, METRICS, EXPERIENCE, PRINCIPLES } from "@/lib/data/content";

const sectionStyle = { padding: "96px 0", borderTop: `1px solid ${COLORS.border}` } as const;

export default function Home() {
  const featured = WORK_ITEMS.filter((w) => w.featured);
  const other = WORK_ITEMS.filter((w) => !w.featured);

  return (
    <main style={{ background: COLORS.bg }}>
      <section style={{ padding: "160px 0 96px" }}>
        <Container>
          <Eyebrow>{PROFILE.title} · {PROFILE.location}</Eyebrow>
          <h1 style={{ fontFamily: fontDisplay, fontSize: "clamp(40px, 6vw, 68px)", lineHeight: 1.05, color: COLORS.ink, margin: 0, maxWidth: 820, letterSpacing: "-0.02em" }}>
            {PROFILE.name}
          </h1>
          <p style={{ fontFamily: fontBody, fontSize: 19, lineHeight: 1.6, color: COLORS.inkSoft, marginTop: 24, maxWidth: 640 }}>
            {PROFILE.headline}
          </p>
          <div style={{ display: "flex", gap: 12, marginTop: 36, flexWrap: "wrap" }}>
            <Button href="#work">View selected work</Button>
            <Button variant="secondary" href="/resume.pdf" newTab>Resume</Button>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 16, marginTop: 72 }}>
            {METRICS.map((m) => (
              <div key={m.label} style={{ borderTop: `1px solid ${COLORS.borderStrong}`, paddingTop: 16 }}>
                <div style={{ fontFamily: fontDisplay, fontSize: 32, color: COLORS.ink }}>{m.value}</div>
                <div style={{ fontFamily: fontBody, fontSize: 14, color: COLORS.inkSoft, marginTop: 6 }}>{m.label}</div>
                <div style={{ fontFamily: fontMono, fontSize: 11, color: COLORS.muted, marginTop: 4 }}>{m.note}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section id="work" style={{ ...sectionStyle, scrollMarginTop: 96 }}>
        <Container>
          <SectionHeading eyebrow="Selected work" title="Case studies" subtitle="Products I designed end to end, with the decisions and trade-offs behind them." />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 24, marginTop: 48 }}>
            {featured.map((w) => (
              <Link key={w.slug} href={w.href ?? "#"} style={{ textDecoration: "none", color: "inherit", background: COLORS.white, border: `1px solid ${COLORS.border}`, borderRadius: 12, padding: 28, display: "block" }}>
                <Pill>{w.tag}</Pill>
                <h3 style={{ fontFamily: fontDisplay, fontSize: 24, color: COLORS.ink, margin: "16px 0 8px" }}>{w.title}</h3>
                <div style={{ fontFamily: fontMono, fontSize: 12, color: COLORS.muted }}>{w.role} · {w.timeline}</div>
                <p style={{ fontFamily: fontBody, fontSize: 15, lineHeight: 1.6, color: COLORS.inkSoft, marginTop: 14 }}>{w.summary}</p>
                <p style={{ fontFamily: fontBody, fontSize: 14, color: COLORS.accent, marginTop: 12 }}>{w.impact}</p>
              </Link>
            ))}
          </div>
          <div style={{ marginTop: 48, display: "grid", gap: 12 }}>
            {other.map((w) => (
              <a key={w.slug} href={w.href ?? "#"} target={w.external ? "_blank" : undefined} rel={w.external ? "noreferrer" : undefined} style={{ fontFamily: fontBody, color: COLORS.ink, textDecoration: "none", borderBottom: `1px solid ${COLORS.border}`, paddingBottom: 12 }}>
                <span style={{ fontWeight: 500 }}>{w.title}</span>
                <span style={{ color: COLORS.muted, fontSize: 14, marginLeft: 12 }}>{w.tag}{w.href === null ? " · Coming soon" : ""}</span>
              </a>
            ))}
          </div>
        </Container>
      </section>

      <section id="process" style={{ ...sectionStyle, scrollMarginTop: 96 }}>
        <Container>
          <SectionHeading eyebrow="Approach" title="How I design" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 24, marginTop: 48 }}>
            {PRINCIPLES.map((p) => (
              <div key={p.title}>
                <h3 style={{ fontFamily: fontDisplay, fontSize: 18, color: COLORS.ink, margin: 0 }}>{p.title}</h3>
                <p style={{ fontFamily: fontBody, fontSize: 15, lineHeight: 1.6, color: COLORS.inkSoft, marginTop: 8 }}>{p.detail}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section id="about" style={{ ...sectionStyle, scrollMarginTop: 96 }}>
        <Container>
          <SectionHeading eyebrow="Experience" title="Where I've worked" />
          <div style={{ marginTop: 48, display: "grid", gap: 32 }}>
            {EXPERIENCE.map((e) => (
              <div key={`${e.company}-${e.role}`} style={{ display: "grid", gridTemplateColumns: "minmax(160px, 220px) 1fr", gap: 24 }}>
                <div>
                  <div style={{ fontFamily: fontMono, fontSize: 12, color: COLORS.muted }}>{e.duration}</div>
                  <div style={{ fontFamily: fontBody, fontSize: 13, color: COLORS.muted, marginTop: 4 }}>{e.location}</div>
                </div>
                <div>
                  <h3 style={{ fontFamily: fontDisplay, fontSize: 20, color: COLORS.ink, margin: 0 }}>{e.role}</h3>
                  <div style={{ fontFamily: fontBody, fontSize: 15, color: COLORS.accent, marginTop: 4 }}>{e.company}</div>
                  <p style={{ fontFamily: fontBody, fontSize: 15, lineHeight: 1.6, color: COLORS.inkSoft, marginTop: 10 }}>{e.impact}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
