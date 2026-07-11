import { Inter, Playfair_Display } from "next/font/google";

export const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const playfairDisplay = Playfair_Display({
  variable: "--font-motto",
  style: ["italic"],
  weight: ["600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const fontVariables = `${inter.variable} ${playfairDisplay.variable}`;
