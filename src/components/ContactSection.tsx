import { MotionSection, MotionItem } from "@/components/MotionSection";
import { QuoteForm } from "@/components/QuoteForm";
import { ContactForm } from "@/components/ContactForm";

export function ContactSection() {
  return (
    <section id="contact" className="px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-[1400px]">
        <span className="text-xs font-medium tracking-widest text-muted">
          03 / CONTACT
        </span>
        <h2 className="mt-3 font-black text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05] tracking-tight text-ink">
          Contact Us
        </h2>

        <MotionSection
          as="div"
          className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-2"
        >
          <MotionItem>
            <div className="flex h-full flex-col border border-ink/12 p-8">
              <h3 className="text-2xl font-bold tracking-tight text-ink">
                Get a Quote
              </h3>
              <p className="mt-3 text-muted">
                Tell us about the property and what you need — we&apos;ll
                come back with a scoped plan and a straight-up price.
              </p>
              <div className="mt-8">
                <QuoteForm />
              </div>
            </div>
          </MotionItem>

          <MotionItem>
            <div className="flex h-full flex-col border border-ink/12 p-8">
              <h3 className="text-2xl font-bold tracking-tight text-ink">
                Contact Us
              </h3>
              <p className="mt-3 text-muted">
                Got a general question? Send us a message and we&apos;ll get
                back to you.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </MotionItem>
        </MotionSection>
      </div>
    </section>
  );
}
