import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { COLORS, fontBody, fontDisplay } from "@/lib/tokens";

export const metadata: Metadata = {
  title: "FactWeavers AI | Akshay P",
  description: "FactWeavers AI case study, being rebuilt for portfolio v2.",
};

export default function Page() {
  return (
    <main style={{ padding: "160px 0 120px", background: COLORS.bg, minHeight: "70vh" }}>
      <Container>
        <h1 style={{ fontFamily: fontDisplay, fontSize: 40, color: COLORS.ink, margin: 0 }}>FactWeavers AI</h1>
        <p style={{ fontFamily: fontBody, fontSize: 16, color: COLORS.inkSoft, marginTop: 16, maxWidth: 560 }}>
          This case study is being rebuilt for the new portfolio. The current version stays live until the rebuild is approved.
        </p>
        <Link href="/" style={{ fontFamily: fontBody, color: COLORS.accent, marginTop: 24, display: "inline-block" }}>
          Back to home
        </Link>
      </Container>
    </main>
  );
}
