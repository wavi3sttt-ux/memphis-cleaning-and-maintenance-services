"use client";

import { motion } from "framer-motion";
import { Icon } from "@/components/Icon";
import type { ServiceItem } from "@/lib/config";

export function ServiceListing({ icon, name, description }: ServiceItem) {
  return (
    <motion.div
      whileHover="hover"
      className="group flex items-start gap-5 border-b border-ink/10 py-6 transition-colors first:pt-0 last:border-b-0 hover:bg-paper"
    >
      <motion.div
        variants={{ hover: { scale: 1.1, rotate: -6 } }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
        className="flex h-11 w-11 shrink-0 items-center justify-center border border-ink/15 text-ink transition-colors group-hover:border-red group-hover:text-red"
      >
        <Icon name={icon} className="h-5 w-5" aria-hidden="true" />
      </motion.div>
      <div>
        <h4 className="text-lg font-bold tracking-tight text-ink">{name}</h4>
        <p className="mt-1 text-muted">{description}</p>
      </div>
    </motion.div>
  );
}
