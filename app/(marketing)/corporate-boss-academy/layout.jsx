import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});


export const metadata = {
  title: "Corporate Boss Academy | Learn, Grow & Lead with CBS",
  description:
    "Join the Corporate Boss Academy — the education and mentorship hub of CBS empowering professionals, students, and entrepreneurs with digital and leadership skills.",
  keywords:
    "Corporate Boss Academy, CBS Academy, mentorship Africa, professional training, leadership courses, online learning Ghana, youth skills, entrepreneurship education",
  openGraph: {
    title: "Corporate Boss Academy | Learn, Grow & Lead with CBS",
    description:
      "Empowering Africa’s next generation of leaders through mentorship and skill development programs.",
    url: "https://corporateboss-solutions.com/corporate-boss-academy",
    siteName: "Corporate Boss Solutions",
    images: [
      {
        url: "https://corporateboss-solutions.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Corporate Boss Academy",
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