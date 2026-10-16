import { createFileRoute } from "@tanstack/react-router";
import { Landing } from "@/components/site/Landing";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "A. N. Krishna Rao (Anakru) — Kannada Literary Heritage" },
      { name: "description", content: "A bilingual digital archive of Anakru, Kannada novelist, playwright and founder of the progressive Pragatishila movement." },
      { property: "og:title", content: "A. N. Krishna Rao (Anakru) — Kannada Literary Heritage" },
      { property: "og:description", content: "Life, works and legacy of Anakru, the 'Kadambari Sarvabhouma' of Kannada literature." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "alternate", hrefLang: "kn", href: "/kn" }],
  }),
  component: () => <Landing lang="en" />,
});
