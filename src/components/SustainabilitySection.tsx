import { MotionSection, MotionItem } from "@/components/MotionSection";
import { SUSTAINABILITY_VISION } from "@/lib/config";

export function SustainabilitySection() {
  return (
    <section id="sustainability" className="px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-3xl">
        <MotionSection as="div">
          <MotionItem>
            <span className="text-xs font-medium tracking-widest text-muted">
              03 / SUSTAINABILITY
            </span>
            <h2 className="mt-3 font-black text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05] tracking-tight text-ink">
              Sustainability
            </h2>
          </MotionItem>

          <MotionItem>
            <p className="mt-6 text-lg text-muted">{SUSTAINABILITY_VISION}</p>
          </MotionItem>
        </MotionSection>
      </div>
    </section>
  );
}
