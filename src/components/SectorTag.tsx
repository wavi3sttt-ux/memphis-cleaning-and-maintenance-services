import { cn } from "@/lib/utils";

export function SectorTag({
  label,
  className,
}: {
  label: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "group flex shrink-0 snap-center items-center border border-ink/15 px-8 py-10 transition-colors hover:border-ink hover:bg-ink",
        className
      )}
    >
      <span className="whitespace-nowrap text-2xl font-bold leading-none tracking-tight text-ink transition-colors group-hover:text-bg md:text-4xl">
        {label.toUpperCase()}
      </span>
    </div>
  );
}
