import { MotionSection, MotionItem } from "@/components/MotionSection";
import { CAREER_TEXT, CONTACT } from "@/lib/config";

export function CareerSection() {
  return (
    <section
      id="career"
      className="border-y border-ink/10 bg-paper px-6 py-20 md:px-10 md:py-28"
    >
      <div className="mx-auto max-w-3xl">
        <MotionSection as="div">
          <MotionItem>
            <span className="text-xs font-medium tracking-widest text-muted">
              04 / CAREER
            </span>
            <h2 className="mt-3 font-black text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05] tracking-tight text-ink">
              Careers
            </h2>
          </MotionItem>

          <MotionItem>
            <p className="mt-6 text-lg text-muted">
              {CAREER_TEXT}{" "}
              <a
                href={`mailto:${CONTACT.email}`}
                className="font-semibold text-ink transition-colors hover:text-red"
              >
                {CONTACT.email}
              </a>
              .
            </p>
          </MotionItem>
        </MotionSection>
      </div>
    </section>
  );
}
