import type { Metadata } from "next";
import { Inter, Newsreader, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-serif",
  style: ["normal", "italic"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Muhammad Sami Abid — Software Engineering & Full-Stack Developer",
  description:
    "Personal portfolio and case studies of Muhammad Sami Abid. Software Engineering undergraduate at Superior University, specializing in Full-Stack Web Development, Data Analysis, and Applied AI.",
  keywords: [
    "Muhammad Sami Abid",
    "Sami Abid",
    "Software Engineer Portfolio",
    "Full-Stack Web Developer",
    "Next.js Developer",
    "Data Analytics",
    "Python",
    "React Developer",
    "Lahore Pakistan",
  ],
  authors: [{ name: "Muhammad Sami Abid", url: "https://github.com/Muhummad-Sami" }],
  creator: "Muhammad Sami Abid",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://muhammadsami.dev",
    title: "Muhammad Sami Abid — Software Engineering & Full-Stack Developer",
    description:
      "Selected works, systems, data analytics projects, and engineering experience of Muhammad Sami Abid.",
    siteName: "Muhammad Sami Abid Portfolio",
    images: [
      {
        url: "https://avatars.githubusercontent.com/u/224607375?v=4",
        width: 600,
        height: 600,
        alt: "Muhammad Sami Abid",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Sami Abid — Software Engineer & Full-Stack Developer",
    description:
      "Engineering portfolio, full-stack web applications, data analytics projects, and technical case studies.",
    images: ["https://avatars.githubusercontent.com/u/224607375?v=4"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${newsreader.variable} ${jetbrainsMono.variable} font-sans antialiased min-h-screen flex flex-col selection:bg-[#1E4E3E] selection:text-[#FAF8F5] dark:selection:bg-[#388065] dark:selection:text-[#0F1114]`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange={false}
        >
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
