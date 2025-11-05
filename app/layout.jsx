import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header/Header";

const inter = Inter({
  subsets: ["latin"],
});


export const metadata = {
  title: "Corporate Boss Solutions | Empowering Africa’s Future Leaders",
  description:
    "Corporate Boss Solutions (CBS) is Africa’s leading ecosystem empowering youth, startups, and organizations through mentorship, corporate training, digital transformation, and innovation programs.",
  keywords:
    "Corporate Boss Solutions, CBS Africa, youth empowerment, business consulting, mentorship, training, startups, Ghana, digital transformation, professional development",
  openGraph: {
    title: "Corporate Boss Solutions | Empowering Africa’s Future Leaders",
    description:
      "Empowering youth, startups, and organizations across Africa with mentorship, corporate training, and digital innovation.",
    url: "https://corporateboss-solutions.com",
    siteName: "Corporate Boss Solutions",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Corporate Boss Solutions - Empowering Africa",
      },
    ],
    locale: "en_GH",
    type: "website",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className}`}
      >
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
