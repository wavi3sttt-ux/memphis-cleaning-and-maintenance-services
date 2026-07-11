"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { HighlightedText } from "@/components/HighlightedText";
import { HERO_HEADLINE, POSITIONING, CALL_OUT } from "@/lib/config";

export function Hero() {
  return (
    <section className="relative px-6 pb-20 pt-16 md:px-10 md:pb-28 md:pt-24">
      <div className="mx-auto max-w-5xl">
        <h1 className="font-sans font-black leading-[0.95] tracking-tighter text-ink text-[clamp(2.75rem,8vw,6.5rem)]">
          {HERO_HEADLINE.map((line, i) => (
            <motion.span
              key={line.highlight}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 + i * 0.1 }}
              className="block"
            >
              {line.before}
              <HighlightedText>{line.highlight}</HighlightedText>
              {line.after}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 max-w-xl text-lg text-muted md:text-xl"
        >
          {POSITIONING}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a
            href="#contact"
            className="inline-block bg-red px-8 py-4 text-lg font-semibold text-bg transition-colors hover:bg-ink"
          >
            Request a Quote
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-14"
        >
          <div className="inline-flex items-center gap-3 border border-ink/15 px-5 py-3">
            <Phone className="h-4 w-4 text-red" aria-hidden="true" />
            <span className="text-sm font-semibold uppercase tracking-widest text-ink">
              {CALL_OUT.label}
            </span>
            <span className="text-sm font-semibold text-muted">
              {CALL_OUT.phone}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
