import Link from "next/link";
import { Wordmark } from "@/components/Wordmark";
import { CONTACT, SERVICES, SITE_NAME } from "@/lib/config";

const COMPANY_LINKS = [
  { href: "/about", label: "About" },
  { href: "/how-it-works", label: "Method" },
  { href: "/sectors", label: "Sectors" },
];

const LEGAL_LINKS = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
];

export function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-bg">
      <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <Link href="/">
              <Wordmark variant="default" className="text-3xl md:text-4xl" />
            </Link>
            <p className="mt-6 max-w-xs text-sm text-muted">
              Commercial cleaning for Birmingham&apos;s block managers,
              student accommodation, and offices — with photographic proof
              after every visit.
            </p>
          </div>

          <FooterColumn title="Company">
            {COMPANY_LINKS.map((link) => (
              <FooterLink key={link.href} href={link.href}>
                {link.label}
              </FooterLink>
            ))}
          </FooterColumn>

          <FooterColumn title="Services">
            {SERVICES.map((service) => (
              <FooterLink key={service.slug} href={`/services/${service.slug}`}>
                {service.name}
              </FooterLink>
            ))}
          </FooterColumn>

          <div className="flex flex-col gap-8">
            <FooterColumn title="Contact">
              <p className="text-sm text-muted">{CONTACT.email}</p>
              <p className="text-sm text-muted">{CONTACT.phone}</p>
              <p className="text-sm text-muted">
                {CONTACT.addressLine1}
                <br />
                {CONTACT.addressLine2}
              </p>
            </FooterColumn>

            <FooterColumn title="Legal">
              {LEGAL_LINKS.map((link) => (
                <FooterLink key={link.href} href={link.href}>
                  {link.label}
                </FooterLink>
              ))}
              <p className="text-xs text-muted/70">
                {CONTACT.companyRegPlaceholder}
              </p>
            </FooterColumn>
          </div>
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
    <Link
      href={href}
      className="text-sm text-muted transition-colors hover:text-red"
    >
      {children}
    </Link>
  );
}
