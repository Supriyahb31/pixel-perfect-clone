import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { nav, t, type Lang } from "@/content/site";

export function Header({ lang }: { lang: Lang }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const toggleRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    nav.forEach((n) => { const el = document.getElementById(n.id); if (el) io.observe(el); });
    return () => { window.removeEventListener("scroll", onScroll); io.disconnect(); };
  }, []);

  useEffect(() => {
    if (!open) return;
    menuRef.current?.querySelector("a")?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") { setOpen(false); toggleRef.current?.focus(); }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const solid = scrolled || open;
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${solid ? "bg-navy/95 shadow-archival backdrop-blur" : "bg-transparent"} text-ivory`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 md:px-10">
        <a href="#home" className="flex items-center gap-3">
          <span className="font-kn grid h-11 w-11 place-items-center rounded-full border border-gold text-sm text-gold">ಆ.ನ.ಕೃ.</span>
          <span className="hidden leading-tight sm:block">
            <span className="block font-serif text-base">{t.name.en}</span>
            <span className="font-kn block text-xs text-ivory/70">{t.name.kn}</span>
          </span>
        </a>
        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex gap-7">
            {nav.map((n) => (
              <li key={n.id}>
                <a href={`#${n.id}`} lang={lang} className={`relative py-2 text-sm transition-colors ${active === n.id ? "text-gold" : "text-ivory/80 hover:text-ivory"}`}>
                  {n[lang]}
                  <span className={`absolute inset-x-0 -bottom-0.5 h-px origin-left bg-gold transition-transform duration-500 ${active === n.id ? "scale-x-100" : "scale-x-0"}`} />
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-3">
          <LangSwitch lang={lang} />
          <button ref={toggleRef} className="lg:hidden" aria-expanded={open} aria-controls="mobile-nav" aria-label="Menu" onClick={() => setOpen((o) => !o)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {open && (
        <div id="mobile-nav" ref={menuRef} className="border-t border-gold/30 px-5 pb-6 lg:hidden">
          {nav.map((n) => (
            <a key={n.id} href={`#${n.id}`} lang={lang} onClick={() => setOpen(false)} className="block border-b border-ivory/10 py-4 font-serif text-xl">
              {n[lang]}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

export function LangSwitch({ lang }: { lang: Lang }) {
  const base = "px-3 py-1.5 text-xs transition-colors";
  return (
    <div role="group" aria-label="Language" className="flex overflow-hidden rounded-full border border-gold/60">
      <Link to="/kn" hrefLang="kn" aria-current={lang === "kn" ? "page" : undefined} className={`${base} font-kn ${lang === "kn" ? "bg-gold text-navy" : "hover:text-gold"}`}>ಕನ್ನಡ</Link>
      <Link to="/" hrefLang="en" aria-current={lang === "en" ? "page" : undefined} className={`${base} ${lang === "en" ? "bg-gold text-navy" : "hover:text-gold"}`}>EN</Link>
    </div>
  );
}
