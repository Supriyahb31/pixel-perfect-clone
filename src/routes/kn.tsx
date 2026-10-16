import { createFileRoute } from "@tanstack/react-router";
import { Landing } from "@/components/site/Landing";

export const Route = createFileRoute("/kn")({
  head: () => ({
    meta: [
      { title: "ಅ. ನ. ಕೃಷ್ಣರಾಯ (ಅನಕೃ) — ಕನ್ನಡ ಸಾಹಿತ್ಯ ಪರಂಪರೆ" },
      { name: "description", content: "ಕನ್ನಡ ಕಾದಂಬರಿಕಾರ, ನಾಟಕಕಾರ ಹಾಗೂ ಪ್ರಗತಿಶೀಲ ಚಳವಳಿಯ ಹರಿಕಾರ ಅನಕೃ ಅವರ ಡಿಜಿಟಲ್ ದಾಖಲೆ." },
      { property: "og:title", content: "ಅ. ನ. ಕೃಷ್ಣರಾಯ (ಅನಕೃ) — ಕನ್ನಡ ಸಾಹಿತ್ಯ ಪರಂಪರೆ" },
      { property: "og:description", content: "ಕಾದಂಬರಿ ಸಾರ್ವಭೌಮ ಅನಕೃ ಅವರ ಜೀವನ, ಕೃತಿಗಳು ಮತ್ತು ಪರಂಪರೆ." },
      { property: "og:locale", content: "kn_IN" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "alternate", hrefLang: "en", href: "/" }],
  }),
  component: () => <Landing lang="kn" />,
});
