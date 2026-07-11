import { Wordmark } from "@/components/Wordmark";
import { CONTACT, NAV_LINKS, SITE_NAME } from "@/lib/config";

export function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-bg">
      <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <a href="#">
              <Wordmark variant="default" className="text-3xl md:text-4xl" />
            </a>
            <p className="mt-6 max-w-xs text-sm text-muted">
              Cleaning and maintenance for Birmingham&apos;s residential
              blocks, student accommodation, and offices — with a trained eye
              for hazards on every visit.
            </p>
          </div>

          <FooterColumn title="Company">
            {NAV_LINKS.map((link) => (
              <FooterLink key={link.href} href={link.href}>
                {link.label}
              </FooterLink>
            ))}
          </FooterColumn>

          <FooterColumn title="Contact">
            <a
              href={`mailto:${CONTACT.email}`}
              className="text-sm text-muted transition-colors hover:text-red"
            >
              {CONTACT.email}
            </a>
          </FooterColumn>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-ink/10 pt-6 text-xs font-medium tracking-wide text-muted md:flex-row md:items-center md:justify-between">
          <p>FULLY INSURED · COSHH COMPLIANT · BIRMINGHAM, UK</p>
          <p>
            © {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h4 className="text-xs font-semibold tracking-widest text-ink/40">
        {title.toUpperCase()}
      </h4>
      <div className="mt-4 flex flex-col gap-3">{children}</div>
    </div>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="text-sm text-muted transition-colors hover:text-red"
    >
      {children}
    </a>
  );
}
