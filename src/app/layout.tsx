import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kinetic Logistics | Precision Engineered",
  description: "Architecting the future of movement across Sub-Saharan Africa. Precision. Speed. Integrity.",
  openGraph: {
    title: "Kinetic Logistics | Precision Engineered",
    description: "Architecting the future of movement across Sub-Saharan Africa. Precision. Speed. Integrity.",
    images: [{
      url: "https://lh3.googleusercontent.com/aida-public/AB6AXuAQvS5A-FSNcBT-QBj-GOuPb96v6LqPAvi2C7Arl0CCNp-PQXZz-jpx5tuB0eAtH8diogKQ-yoToqLOGq4pmg98Qn2PLPRyL-SOkjjdcpN7XQKPaOqYTzglvYbjCA3cGukh3BCahv-fkLIQubhX1MwOvetZFL68AZW55fils_5Ub_xNsEVFbbSke0br7a0G9EwFedSxyQeSZOm6aR0rMpjwC3zZbXWN4FRbyFPpVPb1DaAWUcLei-dIV3hQTYR3yE3i6nEBFA61PTo",
      width: 1200,
      height: 630,
      alt: "Kinetic Logistics Cover",
    }],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kinetic Logistics | Precision Engineered",
    description: "Architecting the future of movement across Sub-Saharan Africa. Precision. Speed. Integrity.",
    images: ["https://lh3.googleusercontent.com/aida-public/AB6AXuAQvS5A-FSNcBT-QBj-GOuPb96v6LqPAvi2C7Arl0CCNp-PQXZz-jpx5tuB0eAtH8diogKQ-yoToqLOGq4pmg98Qn2PLPRyL-SOkjjdcpN7XQKPaOqYTzglvYbjCA3cGukh3BCahv-fkLIQubhX1MwOvetZFL68AZW55fils_5Ub_xNsEVFbbSke0br7a0G9EwFedSxyQeSZOm6aR0rMpjwC3zZbXWN4FRbyFPpVPb1DaAWUcLei-dIV3hQTYR3yE3i6nEBFA61PTo"],
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
      className={`${inter.variable} h-full antialiased dark`}
    >
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet"/>
      </head>
      <body className="font-body min-h-full flex flex-col bg-background text-on-background selection:bg-primary-container selection:text-white">
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
