import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});


export const metadata = {
  title: "Internships & Careers | Corporate Boss Solutions (CBS)",
  description:
    "Explore internship and career opportunities with CBS. Connect with employers, gain hands-on experience, and launch your career with Africa’s leading talent ecosystem.",
  keywords:
    "internships Ghana, job placement Africa, career development, youth employment, talent matching, CBS internships, work opportunities",
  openGraph: {
    title: "Internships & Careers | Corporate Boss Solutions (CBS)",
    description:
      "Empowering Africa’s youth through career development and internship placement programs.",
    url: "https://corporateboss-solutions.com/internships-and-careers",
    siteName: "Corporate Boss Solutions",
    images: [
      {
        url: "https://corporateboss-solutions.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "CBS Internships and Careers",
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