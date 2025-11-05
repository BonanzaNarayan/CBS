import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});


export const metadata = {
  title: "Our Services | Corporate Boss Solutions (CBS)",
  description:
    "Explore CBS services — from corporate training and consulting to mentorship, innovation support, and digital transformation. We help people and businesses grow.",
  keywords:
    "business consulting Ghana, digital transformation Africa, mentorship services, startup incubation, professional training, internship matching, skill development",
  openGraph: {
    title: "Our Services | Corporate Boss Solutions (CBS)",
    description:
      "Comprehensive business, training, and innovation services built to empower Africa’s youth and enterprises.",
    url: "https://corporateboss-solutions.com/services",
    siteName: "Corporate Boss Solutions",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Corporate Boss Solutions Services",
      },
    ],
    type: "article",
  },
};




export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className}`}
      >
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}