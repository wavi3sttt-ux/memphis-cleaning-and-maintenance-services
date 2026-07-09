import type { Metadata } from "next";
import { fontVariables } from "@/lib/fonts";
import { SITE_NAME, SITE_URL } from "@/lib/config";
import { MotionProvider } from "@/components/MotionProvider";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Commercial Cleaning, Birmingham`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Commercial cleaning for Birmingham's block managers, student accommodation, and offices — with photographic proof after every visit.",
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
