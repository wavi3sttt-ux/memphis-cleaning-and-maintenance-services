import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";
import { Footer } from "@/components/Footer";
import { CtaBlock } from "@/components/CtaBlock";
import { ServiceListing } from "@/components/ServiceListing";
import { ContactSection } from "@/components/ContactSection";
import { CareerSection } from "@/components/CareerSection";
import { SustainabilitySection } from "@/components/SustainabilitySection";
import { MotionSection, MotionItem } from "@/components/MotionSection";
import { SERVICE_GROUPS, CONTACT, SITE_NAME, SITE_URL } from "@/lib/config";

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE_NAME,
    url: SITE_URL,
    email: CONTACT.email,
    areaServed: "West Midlands, UK",
    serviceType: "Property Cleaning & Maintenance",
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

        <AboutSection />

        <section id="services" className="px-6 py-20 md:px-10 md:py-28">
          <div className="mx-auto max-w-3xl">
            <SectionHeading index="02" label="Services" title="What we cover" />

            <div className="mt-14 flex flex-col gap-16">
              {SERVICE_GROUPS.map((group) => (
                <div key={group.id}>
                  <h3 className="text-sm font-bold uppercase tracking-widest text-red">
                    {group.title}
                  </h3>
                  <MotionSection as="div" className="mt-4">
                    {group.items.map((item) => (
                      <MotionItem key={item.name}>
                        <ServiceListing {...item} />
                      </MotionItem>
                    ))}
                  </MotionSection>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CtaBlock />

        <ContactSection />

        <CareerSection />

        <SustainabilitySection />

        <section id="motto" className="bg-ink py-32 md:py-40" />
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
