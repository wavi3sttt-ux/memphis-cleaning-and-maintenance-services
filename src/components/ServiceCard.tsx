import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Service } from "@/lib/config";

export function ServiceCard({
  service,
  className,
}: {
  service: Service;
  className?: string;
}) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className={cn(
        "group relative flex flex-col justify-between border border-ink/12 bg-bg p-8 transition-colors hover:border-ink",
        className
      )}
    >
      <div className="flex items-start justify-between">
        <span className="text-xs font-medium tracking-widest text-muted">
          {service.index} / SERVICE
        </span>
        <ArrowUpRight
          className="h-5 w-5 shrink-0 text-ink/30 transition-colors group-hover:text-red"
          aria-hidden="true"
        />
      </div>

      <div className="mt-10">
        <h3 className="text-2xl font-bold leading-tight tracking-tight text-ink md:text-3xl">
          {service.name}
        </h3>
        <p className="mt-3 text-sm text-muted md:text-base">
          {service.description}
        </p>
      </div>
    </Link>
  );
}
