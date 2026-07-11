import { MotionSection, MotionItem } from "@/components/MotionSection";
import { SUSTAINABILITY_VISION, SUSTAINABILITY_COMMITMENTS } from "@/lib/config";

export function SustainabilitySection() {
  return (
    <section id="sustainability" className="px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-3xl">
        <MotionSection as="div">
          <MotionItem>
            <span className="text-xs font-medium tracking-widest text-muted">
              05 / SUSTAINABILITY
            </span>
            <h2 className="mt-3 font-black text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05] tracking-tight text-ink">
              Sustainability
            </h2>
          </MotionItem>

          <MotionItem>
            <p className="mt-6 text-lg text-muted">{SUSTAINABILITY_VISION}</p>
          </MotionItem>

          <MotionItem>
            <ul className="mt-8 flex flex-col gap-3">
              {SUSTAINABILITY_COMMITMENTS.map((commitment) => (
                <li
                  key={commitment}
                  className="border-l-2 border-red pl-4 text-muted"
                >
                  {commitment}
                </li>
              ))}
            </ul>
          </MotionItem>
        </MotionSection>
      </div>
    </section>
  );
}
