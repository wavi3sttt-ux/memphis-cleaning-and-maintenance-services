import { cn } from "@/lib/utils";

type WordmarkProps = {
  variant?: "default" | "inverse";
  className?: string;
};

export function Wordmark({ variant = "default", className }: WordmarkProps) {
  return (
    <span
      className={cn(
        "font-sans font-black tracking-tighter leading-none",
        variant === "inverse" ? "text-bg" : "text-ink",
        className
      )}
    >
      MEMPHIS<span className="text-red">.</span>
    </span>
  );
}
