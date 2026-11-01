import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import DarkModeToggle from "./components/darkmode";

import "./globals.css";
import { Navbar } from "./components/nav";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import { ThemeProvider } from "next-themes";

export const metadata: Metadata = {
  metadataBase: new URL("https://rubendewitte.com"),
  title: {
    default: "Ruben Dewitte",
    template: "%s | Ruben Dewitte",
  },
  description: "Software developer in the Netherlands. I build web and mobile apps, and run Holo Apps.",
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: "/images/icons/favicon-dark.svg",
        type: "image/svg+xml",
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: "/images/icons/favicon-light.svg",
        type: "image/svg+xml",
      },
    ],
  },
  openGraph: {
    title: "Ruben Dewitte",
    description: "Software developer in the Netherlands. I build web and mobile apps, and run Holo Apps.",
    url: "https://rubendewitte.com",
    siteName: "Ruben Dewitte",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const cx = (...classes: string[]) => classes.filter(Boolean).join(" ");

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cx(GeistSans.variable, GeistMono.variable)}
    >
      <body className="antialiased bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
        <ThemeProvider attribute="class" enableSystem>
          <div className="mx-auto flex min-h-screen max-w-2xl flex-col px-6 pt-10 sm:pt-16">
            <main className="flex-auto min-w-0">
              <Navbar />
              {children}
            </main>
            <footer className="mt-24 flex items-center justify-between border-t border-neutral-100 py-8 text-sm text-neutral-500 dark:border-neutral-800/70 dark:text-neutral-400">
              <p>© {new Date().getFullYear()} Ruben Dewitte</p>
              <div className="flex items-center gap-4 text-base">
                <a href="mailto:rubendewitte1998@gmail.com" aria-label="Email Ruben" className="hover:text-neutral-900 dark:hover:text-neutral-100">
                  <FaEnvelope />
                </a>
                <a href="https://www.linkedin.com/in/rubendewitte/" target="_blank" rel="noopener noreferrer" aria-label="Ruben on LinkedIn" className="hover:text-neutral-900 dark:hover:text-neutral-100">
                  <FaLinkedin />
                </a>
                <a href="https://github.com/DewitteRuben" target="_blank" rel="noopener noreferrer" aria-label="Ruben on GitHub" className="hover:text-neutral-900 dark:hover:text-neutral-100">
                  <FaGithub />
                </a>
                <DarkModeToggle />
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
