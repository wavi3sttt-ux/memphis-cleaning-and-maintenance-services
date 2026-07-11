import type { Metadata } from "next";
import { fontVariables } from "@/lib/fonts";
import { SITE_NAME, SITE_URL } from "@/lib/config";
import { MotionProvider } from "@/components/MotionProvider";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Cleaning & Maintenance, Birmingham`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Cleaning and maintenance for Birmingham's residential blocks, student accommodation, and offices — with a trained eye for hazards on every visit.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fontVariables} h-full`}>
      <body className="min-h-full flex flex-col bg-bg text-ink antialiased">
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
