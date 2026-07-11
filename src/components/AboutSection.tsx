import { MotionSection, MotionItem } from "@/components/MotionSection";
import { ABOUT_PARAGRAPHS } from "@/lib/config";

export function AboutSection() {
  return (
    <section id="about" className="px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-3xl">
        <MotionSection as="div">
          <MotionItem>
            <span className="text-xs font-medium tracking-widest text-muted">
              01 / ABOUT
            </span>
            <h2 className="mt-3 font-black text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05] tracking-tight text-ink">
              About Us
            </h2>
          </MotionItem>

          <div className="mt-8 flex flex-col gap-5">
            {ABOUT_PARAGRAPHS.map((paragraph) => (
              <MotionItem key={paragraph}>
                <p className="text-lg text-muted">{paragraph}</p>
              </MotionItem>
            ))}
          </div>
        </MotionSection>
      </div>
    </section>
  );
}
