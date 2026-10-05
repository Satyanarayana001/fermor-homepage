import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fermor — Understand. Act. Grow.",
  description: "A clearer way to understand, act and grow financially.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}