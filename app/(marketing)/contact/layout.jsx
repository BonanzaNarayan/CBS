import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});


export const metadata = {
  title: "Contact Us | Corporate Boss Solutions (CBS)",
  description:
    "Get in touch with Corporate Boss Solutions. Contact us for training, partnerships, consulting, or media inquiries. Let’s build Africa’s future together.",
  keywords:
    "contact Corporate Boss Solutions, CBS contact Ghana, partnership inquiries, consulting, youth training, corporate communication",
  openGraph: {
    title: "Contact Us | Corporate Boss Solutions (CBS)",
    description:
      "Reach out to Corporate Boss Solutions for collaborations, training programs, and business inquiries.",
    url: "https://corporateboss-solutions.com/contact",
    siteName: "Corporate Boss Solutions",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Contact Corporate Boss Solutions",
      },
    ],
    type: "website",
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