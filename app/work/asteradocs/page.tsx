import type { Metadata } from "next";
import { AsteraDocsView } from "@/components/case-study/asteradocs/AsteraDocsView";

export const metadata: Metadata = {
  title: "AsteraDocs: Role-based Document Platform | Akshay P",
  description:
    "Case study: a role-based platform for semiconductor product documentation and support tickets, designed as the sole UX designer at Innovatily.",
};

export default function Page() {
  return <AsteraDocsView />;
}
