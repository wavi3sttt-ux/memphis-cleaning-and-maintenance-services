import { cn } from "@/lib/utils";

export function MethodStep({
  number,
  title,
  description,
  className,
}: {
  number: string;
  title: string;
  description: string;
  className?: string;
}) {
  return (
    <div className={cn("relative flex flex-col", className)}>
      <span className="font-black leading-[0.85] tracking-tighter text-red text-[clamp(3.5rem,8vw,6rem)]">
        {number}
      </span>
      <h3 className="mt-2 text-2xl font-bold tracking-tight text-ink md:text-3xl">
        {title}
      </h3>
      <p className="mt-3 max-w-sm text-muted">{description}</p>
    </div>
  );
}
