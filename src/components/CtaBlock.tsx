export function CtaBlock() {
  return (
    <section className="bg-ink px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="font-black text-[clamp(2.25rem,6vw,4.5rem)] leading-[1.05] tracking-tight text-bg">
          Contact now and get a quote in 12 hours.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-bg/70">
          Tell us about your site and we&apos;ll come back with a scoped
          plan and a straight-up price.
        </p>
        <a
          href="#contact"
          className="mt-10 inline-block bg-red px-8 py-4 text-lg font-semibold text-bg transition-colors hover:bg-bg hover:text-ink"
        >
          Request a Quote
        </a>
      </div>
    </section>
  );
}
