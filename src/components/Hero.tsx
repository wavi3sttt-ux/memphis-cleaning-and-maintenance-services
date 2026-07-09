"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { HighlightedText } from "@/components/HighlightedText";
import { HERO_TAGLINE, POSITIONING, TRUST_SIGNALS } from "@/lib/config";

export function Hero() {
  return (
    <section className="relative px-6 pb-20 pt-16 md:px-10 md:pb-28 md:pt-24">
      <div className="mx-auto max-w-5xl">
        <h1 className="font-sans font-black leading-[0.95] tracking-tighter text-ink text-[clamp(2.75rem,8vw,6.5rem)]">
          {HERO_TAGLINE.map((line, i) => (
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
          {POSITIONING.replace(
            "Commercial cleaning for Birmingham",
            "Commercial cleaning for Birmingham's block managers, student accommodation, and offices"
          )}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <Link
            href="/contact"
            className="inline-block bg-red px-8 py-4 text-lg font-semibold text-bg transition-colors hover:bg-ink"
          >
            Request a Quote
          </Link>
          <Link
            href="/how-it-works"
            className="inline-block border border-ink/20 px-8 py-4 text-lg font-semibold text-ink transition-colors hover:border-ink"
          >
            See Our Method
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-14 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-medium uppercase tracking-widest text-muted"
        >
          {TRUST_SIGNALS.map((signal, i) => (
            <span key={signal} className="flex items-center gap-6">
              {signal}
              {i < TRUST_SIGNALS.length - 1 && (
                <span aria-hidden="true" className="text-ink/20">
                  ·
                </span>
              )}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
