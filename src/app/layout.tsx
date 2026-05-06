import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { LayoutShell } from "@/components/LayoutShell";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Maa Bhawani Construction & Contractor",
  description:
    "Premium construction services, renovations, flooring, and finishing in Madhya Pradesh & Rajasthan. Real site, real progress.",
  keywords: [
    "construction",
    "contractor",
    "renovation",
    "kota stone polishing",
    "marble polishing",
    "tile installation",
    "residential construction",
    "commercial construction",
    "Madhya Pradesh",
  ],
  openGraph: {
    title: "Maa Bhawani Construction & Contractor",
    description:
      "Building dreams with quality materials and expert craftsmanship. 15+ years of trusted construction services.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} scroll-smooth antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-screen flex flex-col bg-white font-inter" suppressHydrationWarning>
        <LayoutShell>{children}</LayoutShell>
      </body>
    </html>
  );
}

