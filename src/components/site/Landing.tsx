import { ArrowDown, ArrowRight, ChevronLeft, ChevronRight, Archive } from "lucide-react";
import { useEffect, useRef } from "react";
import hero from "@/assets/hero-still.jpg";
import { facts, nav, t, timeline, works, type Lang } from "@/content/site";
import { Header, LangSwitch } from "./Header";

function useReveal() {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("js-reveal");
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); } }),
      { threshold: 0.15 },
    );
    document.querySelectorAll("[data-reveal],[data-mask]").forEach((el) => io.observe(el));
    return () => { io.disconnect(); root.classList.remove("js-reveal"); };
  }, []);
}

const Btn = ({ href, children, variant = "gold" }: { href: string; children: React.ReactNode; variant?: "gold" | "ghost" | "navy" }) => {
  const v = {
    gold: "bg-gold text-navy hover:bg-ivory",
    ghost: "border border-ivory/40 text-ivory hover:border-gold hover:text-gold",
    navy: "bg-navy text-ivory hover:bg-forest",
  }[variant];
  return (
    <a href={href} className={`group inline-flex items-center gap-2 rounded-sm px-6 py-3.5 text-sm font-medium transition-all duration-300 ${v}`}>
      {children}<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
    </a>
  );
};

function SectionHead({ num, title, kn, lang, light }: { num: string; title: string; kn: string; lang: Lang; light?: boolean }) {
  const primary = lang === "kn" ? kn : title;
  const secondary = lang === "kn" ? title : kn;
  return (
    <div data-reveal>
      <p className="eyebrow flex items-center gap-4 text-gold"><span>{num}</span><span className="h-px w-12 bg-gold" /></p>
      <h2 lang={lang} className={`mt-5 text-4xl leading-tight md:text-5xl ${lang === "kn" ? "font-kn font-semibold" : "font-serif"} ${light ? "text-ivory" : "text-navy"}`}>{primary}</h2>
      <p lang={lang === "kn" ? "en" : "kn"} className={`mt-2 text-lg ${lang === "kn" ? "font-serif italic" : "font-kn"} ${light ? "text-ivory/60" : "text-muted-foreground"}`}>{secondary}</p>
    </div>
  );
}

export function Landing({ lang }: { lang: Lang }) {
  useReveal();
  const shelf = useRef<HTMLDivElement>(null);
  const L = <T extends { en: string; kn: string }>(o: T) => o[lang];
  const scrollShelf = (d: number) => shelf.current?.scrollBy({ left: d * 340, behavior: "smooth" });

  return (
    <div lang={lang} className={lang === "kn" ? "font-kn" : ""}>
      <a href="#biography" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-gold focus:p-3 focus:text-navy">Skip to content</a>
      <Header lang={lang} />
      <main>
        {/* HERO */}
        <section id="home" className="grain relative min-h-screen overflow-hidden bg-navy text-ivory">
          <div className="mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-5 pb-20 pt-32 md:px-10 lg:grid-cols-[1.15fr_1fr]">
            <div>
              <p className="eyebrow animate-rise text-gold" style={{ animationDelay: ".1s" }}>{L(t.eyebrow)}</p>
              <div className="gold-rule mt-6 w-24" />
              <h1 className="mt-8">
                <span lang="kn" className="font-kn animate-rise block text-4xl font-semibold leading-[1.25] md:text-6xl" style={{ animationDelay: ".25s" }}>{t.heroKn}</span>
                <span lang="en" className="animate-rise mt-4 block font-serif text-2xl italic text-ivory/80 md:text-4xl" style={{ animationDelay: ".45s" }}>{t.heroEn}</span>
              </h1>
              <p className="animate-rise mt-8 max-w-xl text-base leading-relaxed text-ivory/75 md:text-lg" style={{ animationDelay: ".65s" }}>{L(t.heroIntro)}</p>
              <div className="animate-rise mt-10 flex flex-wrap gap-4" style={{ animationDelay: ".85s" }}>
                <Btn href="#biography">{L(t.ctaLife)}</Btn>
                <Btn href="#works" variant="ghost">{L(t.ctaWorks)}</Btn>
              </div>
            </div>
            <figure className="relative mx-auto w-full max-w-md lg:max-w-none">
              <div className="absolute -left-4 -top-4 h-full w-full border border-gold/50" aria-hidden />
              <div className="animate-portrait relative aspect-[4/5] overflow-hidden shadow-archival">
                <img src={hero} alt="Fountain pen resting on aged paper beside old books, lit by candlelight" width={1280} height={1600} className="animate-drift h-full w-full object-cover" />
              </div>
              <figcaption className="mt-4 text-xs text-ivory/50">{L(t.imgCaption)}</figcaption>
            </figure>
          </div>
          <a href="#biography" className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-ivory/60 md:flex">
            <span className="eyebrow text-[0.6rem]">{L(t.scroll)}</span><ArrowDown className="animate-scrollcue h-4 w-4" />
          </a>
        </section>

        {/* BIOGRAPHY */}
        <section id="biography" className="grain bg-ivory py-24 md:py-36">
          <div className="mx-auto grid max-w-7xl gap-16 px-5 md:px-10 lg:grid-cols-[1.1fr_1fr]">
            <div>
              <SectionHead num="01" title={t.bioTitle.en} kn={t.bioTitle.kn} lang={lang} />
              <div className="mt-10 space-y-6 text-lg leading-relaxed text-ink/85">
                {t.bio[lang].map((p, i) => <p key={i} data-reveal style={{ transitionDelay: `${i * 0.12}s` }}>{p}</p>)}
              </div>
              <a data-reveal href="https://en.wikipedia.org/wiki/A._N._Krishna_Rao" target="_blank" rel="noreferrer" className="link-underline mt-10 inline-flex items-center gap-2 font-medium text-navy">{L(t.readBio)} <ArrowRight className="h-4 w-4" /></a>
            </div>
            <div className="relative self-center">
              <div data-mask className="bg-navy p-10 text-ivory shadow-archival md:p-14">
                <p className="font-kn text-7xl text-gold md:text-8xl">ಅನಕೃ</p>
                <div className="my-8 h-px bg-gold/50" />
                <p className="font-serif text-2xl italic">Kadambari Sarvabhouma</p>
                <p className="mt-2 text-sm text-ivory/70 font-kn">ಕಾದಂಬರಿ ಸಾರ್ವಭೌಮ</p>
                <p className="mt-6 text-sm leading-relaxed text-ivory/70">{lang === "en" ? "“Universal monarch of novels” — the title by which he came to be popularly known." : "‘ಕಾದಂಬರಿಗಳ ಸಾರ್ವಭೌಮ’ — ಜನಪ್ರಿಯವಾಗಿ ಅವರಿಗೆ ದೊರೆತ ಬಿರುದು."}</p>
              </div>
              <div className="absolute -bottom-6 -right-6 -z-0 h-32 w-32 border border-gold" aria-hidden />
            </div>
          </div>
        </section>

        {/* FACTS */}
        <section aria-label="Facts" className="border-y border-gold/40 bg-parchment">
          <dl className="mx-auto grid max-w-7xl grid-cols-2 px-5 md:grid-cols-4 md:px-10">
            {facts.map((f, i) => (
              <div key={i} data-reveal style={{ transitionDelay: `${i * 0.1}s` }} className="border-gold/40 px-4 py-10 text-center [&:not(:last-child)]:md:border-r">
                <dt className="sr-only">{L(f)}</dt>
                <dd className={`text-4xl text-navy md:text-5xl ${/[a-z0-9]/i.test(f.value) ? "font-serif" : "font-kn"}`}>{f.value}</dd>
                <dd className="eyebrow mt-3 text-muted-foreground">{L(f)}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* TIMELINE */}
        <section id="timeline" className="bg-ivory py-24 md:py-36">
          <div className="mx-auto max-w-5xl px-5 md:px-10">
            <SectionHead num="02" title={t.timelineTitle.en} kn={t.timelineTitle.kn} lang={lang} />
            <ol className="relative mt-16 border-l border-gold/60 pl-8 md:ml-40">
              {timeline.map((e, i) => (
                <li key={i} data-reveal className="relative pb-14 last:pb-0">
                  <span className="absolute -left-[2.4rem] top-1.5 h-3.5 w-3.5 rotate-45 border border-gold bg-ivory" aria-hidden />
                  <p className="font-serif text-xl text-gold md:absolute md:-left-48 md:w-36 md:text-right">{e.year}</p>
                  <h3 className={`mt-1 text-2xl text-navy md:mt-0 ${lang === "kn" ? "font-kn font-semibold" : "font-serif"}`}>{lang === "en" ? e.en : e.kn}</h3>
                  <p className="mt-1 text-sm text-muted-foreground" lang={lang === "en" ? "kn" : "en"}>{lang === "en" ? e.kn : e.en}</p>
                  <p className="mt-3 max-w-xl leading-relaxed text-ink/80">{lang === "en" ? e.dEn : e.dKn}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* WORKS */}
        <section id="works" className="grain bg-parchment py-24 md:py-36">
          <div className="mx-auto max-w-7xl px-5 md:px-10">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <SectionHead num="03" title={t.worksTitle.en} kn={t.worksTitle.kn} lang={lang} />
              <div className="flex gap-2">
                <button aria-label="Previous" onClick={() => scrollShelf(-1)} className="grid h-11 w-11 place-items-center rounded-full border border-navy/30 text-navy hover:bg-navy hover:text-ivory"><ChevronLeft className="h-5 w-5" /></button>
                <button aria-label="Next" onClick={() => scrollShelf(1)} className="grid h-11 w-11 place-items-center rounded-full border border-navy/30 text-navy hover:bg-navy hover:text-ivory"><ChevronRight className="h-5 w-5" /></button>
              </div>
            </div>
            <p className="mt-6 text-xs text-muted-foreground">{L(t.worksNote)}</p>
            <div ref={shelf} role="region" aria-label={L(t.worksTitle)} tabIndex={0} className="mt-10 flex snap-x snap-mandatory gap-8 overflow-x-auto pb-6 [scrollbar-width:thin]">
              {works.map((w, i) => (
                <article key={i} data-reveal style={{ transitionDelay: `${i * 0.08}s` }} className="group w-72 shrink-0 snap-start">
                  <div className={`relative flex aspect-[2/3] flex-col justify-between overflow-hidden p-7 shadow-archival transition-transform duration-500 group-hover:-translate-y-2 ${i % 2 ? "bg-forest" : "bg-navy"} text-ivory`}>
                    <div className="absolute inset-y-0 left-3 w-px bg-gold/40" aria-hidden />
                    <p className="eyebrow text-gold/80">{L(w.cat)}</p>
                    <div>
                      <p lang="kn" className="font-kn text-3xl font-semibold leading-snug">{w.kn}</p>
                      <div className="my-4 h-px w-10 bg-gold transition-all duration-500 group-hover:w-20" />
                      <p className="font-serif italic text-ivory/80">{w.en}</p>
                    </div>
                    <p className="font-kn text-xs text-ivory/60">ಅ. ನ. ಕೃಷ್ಣರಾಯ</p>
                  </div>
                  <div className="mt-5">
                    <h3 className="font-serif text-xl text-navy">{w.en}{w.year && <span className="ml-2 text-sm text-gold">{w.year}</span>}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink/75">{lang === "en" ? w.dEn : w.dKn}</p>
                    <a href="#works" className="link-underline mt-3 inline-block text-sm font-medium text-navy">{L(t.explore)} →</a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* MOVEMENT */}
        <section id="legacy" className="grain relative overflow-hidden bg-navy py-24 text-ivory md:py-36">
          <img src={hero} alt="" aria-hidden loading="lazy" className="absolute inset-y-0 right-0 hidden h-full w-1/3 object-cover opacity-20 lg:block" />
          <div className="relative mx-auto max-w-7xl px-5 md:px-10">
            <SectionHead num="04" title={t.movementTitle.en} kn={t.movementTitle.kn} lang={lang} light />
            <p data-reveal className="font-kn mt-14 text-6xl text-gold md:text-8xl">ಪ್ರಗತಿಶೀಲ</p>
            <p data-reveal className="mt-2 font-serif text-xl italic text-ivory/60">Pragatishila — the progressive movement</p>
            <div className="mt-12 grid max-w-4xl gap-8 border-t border-gold/30 pt-10 md:grid-cols-2">
              {t.movement[lang].map((p, i) => <p key={i} data-reveal className="leading-relaxed text-ivory/80">{p}</p>)}
            </div>
          </div>
        </section>

        {/* ARCHIVE */}
        <section id="archive" className="bg-ivory py-24 md:py-36">
          <div className="mx-auto max-w-7xl px-5 md:px-10">
            <SectionHead num="05" title={t.archiveTitle.en} kn={t.archiveTitle.kn} lang={lang} />
            <div data-reveal className="mt-14 grid place-items-center border border-dashed border-gold/60 bg-parchment/50 px-6 py-20 text-center">
              <Archive className="h-8 w-8 text-gold" aria-hidden />
              <p className="mt-5 max-w-lg leading-relaxed text-muted-foreground">{L(t.archiveEmpty)}</p>
            </div>
          </div>
        </section>

        {/* CLOSING */}
        <section className="grain border-t border-gold/40 bg-parchment py-28 text-center md:py-40">
          <div className="mx-auto max-w-4xl px-5">
            <div data-reveal className="mx-auto h-px w-24 bg-gold" />
            <h2 data-reveal lang="kn" className="font-kn mt-10 text-4xl font-semibold leading-snug text-navy md:text-6xl">{t.closingKn}</h2>
            <p data-reveal lang="en" className="mt-6 font-serif text-xl italic text-ink/70 md:text-2xl">{t.closingEn}</p>
            <div data-reveal className="mt-12 flex flex-wrap justify-center gap-4">
              <Btn href="#archive" variant="navy">{L(t.ctaArchive)}</Btn>
              <Btn href="#biography" variant="navy">{L(t.ctaBio)}</Btn>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer id="contact" className="bg-navy text-ivory">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-3 md:px-10">
          <div>
            <p className="font-kn text-3xl text-gold">ಆ. ನ. ಕೃ.</p>
            <p className="mt-3 font-serif text-lg">{t.name.en}</p>
            <p className="mt-2 text-sm text-ivory/60">{L(t.rights)}</p>
            <div className="mt-6"><LangSwitch lang={lang} /></div>
          </div>
          <nav aria-label="Footer">
            <ul className="grid grid-cols-2 gap-3 text-sm">
              {nav.map((n) => <li key={n.id}><a href={`#${n.id}`} className="link-underline text-ivory/80">{n[lang]}</a></li>)}
            </ul>
          </nav>
          <div className="text-sm text-ivory/70">
            <h2 className="eyebrow text-gold">{L(t.contactTitle)}</h2>
            <p className="mt-3">{L(t.contactNote)}</p>
            <h2 className="eyebrow mt-8 text-gold">{L(t.sources)}</h2>
            <p className="mt-3"><a className="link-underline" href="https://en.wikipedia.org/wiki/A._N._Krishna_Rao" target="_blank" rel="noreferrer">Wikipedia — A. N. Krishna Rao</a>; Deccan Herald, “Remembering A na kru” (2008).</p>
          </div>
        </div>
        <div className="border-t border-ivory/10 py-6 text-center text-xs text-ivory/50">© {new Date().getFullYear()} · {L(t.rights)}</div>
      </footer>
    </div>
  );
}
