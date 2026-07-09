import { cn } from "@/lib/utils";

export function TestimonialCard({
  quote,
  attribution,
  className,
}: {
  quote: string;
  attribution: string;
  className?: string;
}) {
  return (
    <blockquote
      className={cn("flex flex-col gap-6 border-l-2 border-red pl-6", className)}
    >
      <p className="text-2xl font-medium leading-snug tracking-tight text-ink md:text-3xl">
        &ldquo;{quote}&rdquo;
      </p>
      <cite className="text-xs font-medium not-italic tracking-widest text-muted">
        {attribution.toUpperCase()}
      </cite>
    </blockquote>
  );
}
