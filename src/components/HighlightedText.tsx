import { cn } from "@/lib/utils";

export function HighlightedText({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span className={cn("text-red", className)}>{children}</span>
  );
}
