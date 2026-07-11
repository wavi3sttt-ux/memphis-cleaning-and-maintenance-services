"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Wordmark } from "@/components/Wordmark";
import { NAV_LINKS } from "@/lib/config";
import { cn } from "@/lib/utils";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeHref, setActiveHref] = useState<string>(NAV_LINKS[0].href);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const sections = NAV_LINKS.map((link) =>
      document.getElementById(link.href.slice(1))
    ).filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveHref(`#${entry.target.id}`);
          }
        }
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-colors duration-300",
        open
          ? "border-ink/10 bg-bg"
          : scrolled
            ? "border-ink/10 bg-bg/90 backdrop-blur"
            : "border-transparent bg-transparent"
      )}
    >
      <div
        className={cn(
          "mx-auto flex max-w-[1400px] items-center justify-between px-6 transition-[padding] duration-300 md:px-10",
          scrolled ? "py-3" : "py-5"
        )}
      >
        <a href="#" className="relative z-10" onClick={() => setOpen(false)}>
          <Wordmark
            variant="default"
            className={cn(
              "transition-[font-size] duration-300",
              scrolled ? "text-xl md:text-2xl" : "text-2xl md:text-3xl"
            )}
          />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-ink",
                activeHref === link.href ? "text-ink" : "text-ink/60"
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="#contact"
            className="inline-block bg-red px-5 py-2.5 text-sm font-semibold text-bg transition-colors hover:bg-ink"
          >
            Request a Quote
          </a>
        </div>

        <button
          type="button"
          className="relative z-10 flex h-10 w-10 items-center justify-center text-ink md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <motion.div
        initial={false}
        animate={{
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
        }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 top-[65px] z-40 flex flex-col justify-between bg-bg px-6 py-10 md:hidden"
        aria-hidden={!open}
      >
        <nav className="flex flex-col gap-6">
          {NAV_LINKS.map(
            (link, i) => (
              <motion.div
                key={link.href}
                initial={false}
                animate={{
                  opacity: open ? 1 : 0,
                  y: open ? 0 : 16,
                }}
                transition={{ delay: open ? i * 0.06 : 0 }}
              >
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-sans text-3xl font-bold leading-none tracking-tight text-ink"
                >
                  {link.label}
                </a>
              </motion.div>
            )
          )}
        </nav>
        <a
          href="#contact"
          onClick={() => setOpen(false)}
          className="inline-block bg-red px-6 py-4 text-center text-lg font-semibold text-bg"
        >
          Request a Quote
        </a>
      </motion.div>
    </header>
  );
}
