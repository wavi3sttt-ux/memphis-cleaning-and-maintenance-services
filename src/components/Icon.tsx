import {
  type LucideProps,
  Building2,
  Briefcase,
  GraduationCap,
  ClipboardList,
  HeartHandshake,
  KeyRound,
  HardHat,
  Sparkles,
  Layers,
  SprayCan,
  ShieldAlert,
  Droplets,
  Trash2,
  Wrench,
  Flower2,
  Trees,
  PaintRoller,
  Zap,
  LayoutGrid,
} from "lucide-react";

const REGISTRY = {
  Building2,
  Briefcase,
  GraduationCap,
  ClipboardList,
  HeartHandshake,
  KeyRound,
  HardHat,
  Sparkles,
  Layers,
  SprayCan,
  ShieldAlert,
  Droplets,
  Trash2,
  Wrench,
  Flower2,
  Trees,
  PaintRoller,
  Zap,
  LayoutGrid,
} as const;

export function Icon({ name, ...props }: { name: string } & LucideProps) {
  const LucideIcon = REGISTRY[name as keyof typeof REGISTRY];
  if (!LucideIcon) return null;
  return <LucideIcon {...props} />;
}
