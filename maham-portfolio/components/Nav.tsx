"use client";
import { useEffect, useState } from "react";
import { navLinks } from "@/lib/data";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState("");

  useEffect(() => {
    const els = navLinks.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setCurrent(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const linkClass = (s: string) =>
    `capitalize transition hover:text-cyan ${current === s ? "text-cyan" : "text-mist"}`;

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-line bg-ink/70 backdrop-blur-md" aria-label="Main">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-display font-semibold text-white">Maham Riaz</a>
        <div className="hidden gap-6 text-sm lg:flex">
          {navLinks.map((s) => <a key={s} href={`#${s}`} className={linkClass(s)}>{s}</a>)}
        </div>
        <button
          type="button"
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg border border-line lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
        >
          <span className={`h-0.5 w-5 bg-white transition ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-0.5 w-5 bg-white transition ${open ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-5 bg-white transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>
      {open && (
        <div id="mobile-menu" className="border-t border-line bg-ink/95 px-6 py-4 lg:hidden">
          <div className="flex flex-col gap-1">
            {navLinks.map((s) => (
              <a key={s} href={`#${s}`} onClick={() => setOpen(false)} className={`${linkClass(s)} rounded-lg px-2 py-3`}>{s}</a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
