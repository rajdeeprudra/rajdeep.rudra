import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Sora as FontSans } from "next/font/google";
import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),

  title: {
    default: "Rajdeep Rudra – Full Stack Developer | React, Node.js, TypeScript",
    template: `%s | Rajdeep Rudra`,
  },

  description:
    "Rajdeep Rudra is a full stack developer building real-time applications using React, Next.js, Node.js and PostgreSQL.",

  keywords: [
    "Rajdeep Rudra",
    "Rajdeep Rudra developer",
    "Full Stack Developer",
    "Full stack developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Real-time systems",
  ],

  authors: [{ name: "Rajdeep", url: "https://shasha.ink" }],

  alternates: {
    canonical: "https://shasha.ink",
  },

  icons: {
    icon: "/Profile.jpeg",
    shortcut: "/Profile.jpeg",
    apple: "/Profile.jpeg",
  },

  openGraph: {
    title: "Rajdeep Rudra – Full Stack Developer",
    description:
      "Portfolio of Rajdeep Rudra, a full stack developer building scalable real-time systems.",
    url: DATA.url,
    siteName: "Rajdeep Rudra",

    images: [
      {
        url: "/Profile.jpeg",
        width: 1200,
        height: 630,
        alt: "Rajdeep Rudra Full Stack Developer",
      },
    ],

    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Rajdeep Rudra – Full Stack Developer",
    images: ["/Profile.jpeg"],
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

  verification: {
    google: "Jus8_A2xvu_BBPr4A3t422FclD96lF480WajOzJhDEo",
  },//....................................................
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="overflow-x-hidden">
      <head>
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-PSJJ84TVRK"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-PSJJ84TVRK');
          `
        }} />

        {/* Structured Data for SEO */}
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",

              name: "Rajdeep Rudra",
              //url: "https://shasha.ink",

              //image: "https://shasha.ink/icons/shashank-poola-portrait.jpeg",

              jobTitle: "Full Stack Developer",

              description:
                "Full stack developer specializing in React, Next.js, Node.js and real-time systems.",

                sameAs: [
                  "https://github.com/rajdeeprudra",
                  "https://www.linkedin.com/in/rajdeep-rudra-a88085192",
                  "https://x.com/rajdeep_rudra03",
                  "https://instagram.com/rajdeep_pvtx"
                ],

              knowsAbout: [
                "React",
                "Next.js",
                "Node.js",
                "TypeScript",
                "WebSockets",
                "PostgreSQL",
                "Real-time systems"
              ]
            }),
            }}
            />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased w-full overflow-x-hidden",
          fontSans.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          <TooltipProvider delayDuration={0}>
            {children}
            <Navbar />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
