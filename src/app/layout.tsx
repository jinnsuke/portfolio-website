import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sugimoto Shoujin - Product Manager | AI & Data Specialist",
  description: "Product Manager leveraging AI and data to build impactful, user-centric products. Fresh graduate from NUS with expertise in product management, data science, and AI engineering.",
  keywords: "Product Manager, AI Product Manager, Data Science, Singapore, NUS, Business Analytics, Machine Learning, Product Development",
  authors: [{ name: "Sugimoto Shoujin" }],
  openGraph: {
    title: "Sugimoto Shoujin - Product Manager | AI & Data Specialist",
    description: "Product Manager leveraging AI and data to build impactful, user-centric products.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sugimoto Shoujin - Product Manager | AI & Data Specialist",
    description: "Product Manager leveraging AI and data to build impactful, user-centric products.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
