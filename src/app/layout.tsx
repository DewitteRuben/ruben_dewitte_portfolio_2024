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
  description: "Developer, architect, and creator.",
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
    description: "Developer, architect, and creator.",
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
      <body className="antialiased max-w-2xl mb-40 flex flex-col mx-4 mt-4 lg:mx-auto">
        <ThemeProvider attribute="class" enableSystem>
          <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
            <Navbar />
            {children}
          </main>
          <footer className="px-4 mt-6 md:px-0 border-t border-neutral-100 dark:border-neutral-800 py-8 text-neutral-600 dark:text-neutral-400 text-sm tracking-tight flex justify-between">
            <p>© Ruben Dewitte</p>
            <div className="flex text-lg">
              <DarkModeToggle />

              <a
                href="mailto:rubendewitte1998@gmail.com"
                target="_blank"
                aria-label="Link to Ruben's Email Address"
                className="mr-4"
                rel="noopener noreferrer"
              >
                <FaEnvelope className="hover:opacity-60" />
              </a>
              <a
                href="https://www.linkedin.com/in/rubendewitte/"
                target="_blank"
                className="mr-4"
                aria-label="Link to Ruben's LinkedIn"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="hover:opacity-60" />
              </a>
              <a
                href="https://github.com/DewitteRuben"
                target="_blank"
                aria-label="Link to Ruben's GitHub account"
                className="mr-4"
                rel="noopener noreferrer"
              >
                <FaGithub className="hover:opacity-60" />
              </a>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
