import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});


export const metadata = {
  title: "About Corporate Boss Solutions | Building Africa’s Future Together",
  description:
    "Corporate Boss Solutions (CBS) is an African ecosystem dedicated to empowering youth, businesses, and communities through innovation, mentorship, and digital transformation.",
  keywords:
    "about Corporate Boss Solutions, CBS Ghana, African startups, youth empowerment, leadership training, company profile, CBS Africa",
  openGraph: {
    title: "About Corporate Boss Solutions | Building Africa’s Future Together",
    description:
      "Learn about our mission, vision, and the impact CBS is making across Africa through training, mentorship, and digital innovation.",
    url: "https://corporateboss-solutions.com/about",
    siteName: "Corporate Boss Solutions",
    images: [
      {
        url: "/images/og-about.jpg",
        width: 1200,
        height: 630,
        alt: "About Corporate Boss Solutions",
      },
    ],
    type: "profile",
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