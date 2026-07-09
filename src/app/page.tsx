import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { CtaBlock } from "@/components/CtaBlock";
import { ServiceCard } from "@/components/ServiceCard";
import { MethodStep } from "@/components/MethodStep";
import { SectorTag } from "@/components/SectorTag";
import { TestimonialCard } from "@/components/TestimonialCard";
import { MotionSection, MotionItem } from "@/components/MotionSection";
import { SERVICES, SECTORS, CONTACT, SITE_NAME, SITE_URL } from "@/lib/config";

const METHOD_STEPS = [
  {
    number: "01",
    title: "Clean",
    description:
      "Uniformed teams, checklisted routines, COSHH-compliant products.",
  },
  {
    number: "02",
    title: "Watch",
    description: "We flag maintenance issues, damage, and hazards on-site.",
  },
  {
    number: "03",
    title: "Report",
    description:
      "Photo-backed digital report delivered after every visit. No guesswork.",
  },
];

// TODO: swap in real client testimonials once collected.
const TESTIMONIALS = [
  {
    quote: "The photo reports changed how we handle owner queries completely.",
    attribution: "Block Manager, Edgbaston",
  },
  {
    quote: "Turnovers used to be our biggest headache. Not anymore.",
    attribution: "Student Accommodation Operator, City Centre",
  },
  {
    quote: "Uniformed, on time, every time. Exactly what we needed.",
    attribution: "Letting Agent, Moseley",
  },
];

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE_NAME,
    url: SITE_URL,
    telephone: CONTACT.phone,
    email: CONTACT.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: CONTACT.addressLine1,
      addressLocality: "Birmingham",
      addressRegion: "West Midlands",
      addressCountry: "GB",
    },
    areaServed: "West Midlands, UK",
    serviceType: "Commercial Cleaning",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Nav />
      <main>
        <Hero />

        <section className="px-6 py-20 md:px-10 md:py-28">
          <div className="mx-auto max-w-[1400px]">
            <SectionHeading index="02" label="Services" title="What we cover" />

            <MotionSection
              as="div"
              className="mt-12 grid grid-cols-1 gap-px overflow-hidden border border-ink/12 bg-ink/12 sm:grid-cols-2 lg:grid-cols-3"
            >
              {SERVICES.map((service) => (
                <MotionItem key={service.slug}>
                  <ServiceCard service={service} className="h-full" />
                </MotionItem>
              ))}
            </MotionSection>
          </div>
        </section>

        <section className="border-y border-ink/10 bg-paper px-6 py-24 md:px-10 md:py-32">
          <div className="mx-auto max-w-[1400px]">
            <SectionHeading index="03" label="Method" title="Clean. Watch. Report." />

            <MotionSection
              as="div"
              className="mt-16 grid grid-cols-1 gap-16 md:grid-cols-3 md:gap-10"
            >
              {METHOD_STEPS.map((step) => (
                <MotionItem key={step.number}>
                  <MethodStep {...step} />
                </MotionItem>
              ))}
            </MotionSection>
          </div>
        </section>

        <section className="px-6 py-20 md:px-10 md:py-28">
          <div className="mx-auto max-w-[1400px]">
            <SectionHeading index="04" label="Sectors" title="Who we work with" />
          </div>

          <div className="no-scrollbar mt-12 flex snap-x gap-4 overflow-x-auto px-6 pb-6 md:px-10">
            {SECTORS.map((sector) => (
              <SectorTag key={sector} label={sector} />
            ))}
          </div>
        </section>

        <section className="border-y border-ink/10 bg-ink px-6 py-24 md:px-10 md:py-32">
          <div className="mx-auto max-w-[1400px]">
            <span className="text-xs font-medium tracking-widest text-bg/40">
              05 / PROOF
            </span>
            <MotionSection
              as="div"
              className="mt-10 grid grid-cols-1 gap-16 md:grid-cols-3 md:gap-10"
            >
              {TESTIMONIALS.map((t) => (
                <MotionItem key={t.attribution}>
                  <TestimonialCard
                    quote={t.quote}
                    attribution={t.attribution}
                    className="[&_p]:text-bg [&_cite]:text-bg/50"
                  />
                </MotionItem>
              ))}
            </MotionSection>
          </div>
        </section>

        <CtaBlock />
      </main>
      <Footer />
    </>
  );
}

function SectionHeading({
  index,
  label,
  title,
}: {
  index: string;
  label: string;
  title: string;
}) {
  return (
    <div>
      <span className="text-xs font-medium tracking-widest text-muted">
        {index} / {label.toUpperCase()}
      </span>
      <h2 className="mt-3 font-black text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05] tracking-tight text-ink">
        {title}
      </h2>
    </div>
  );
}
