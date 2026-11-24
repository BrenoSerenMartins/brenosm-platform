import type { Metadata, Viewport } from "next";
import { siteConfig } from "@/src/config/site";
import { SmoothScrollProvider } from "@/src/components/providers/smooth-scroll-provider";
import { CustomCursor } from "@/src/components/ui/custom-cursor";
import { LoadingScreen } from "@/src/components/ui/loading-screen";
import "./globals.css";

const siteUrl = new URL(siteConfig.url);
const ogImageUrl = new URL(siteConfig.ogImage, siteUrl).toString();
const sameAs = Object.values(siteConfig.socialLinks).filter(Boolean);

export const metadata: Metadata = {
  metadataBase: siteUrl,
  applicationName: siteConfig.name,
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Breno Seren Martins",
    "desenvolvedor Full Stack",
    "portfólio",
    "PHP",
    "Node.js",
    "Next.js",
    "React",
    "Magento",
    "sistemas web",
  ],
  authors: [{ name: "Breno Seren Martins", url: siteConfig.url }],
  creator: "Breno Seren Martins",
  publisher: siteConfig.name,
  category: "technology",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: "/",
    siteName: siteConfig.name,
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: siteConfig.title,
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [ogImageUrl],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icons/bsm-icon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/icons/bsm-apple.svg", type: "image/svg+xml" }],
  },
  appleWebApp: {
    title: siteConfig.name,
    capable: true,
    statusBarStyle: "black-translucent",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#02040a",
  colorScheme: "dark",
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteConfig.url}/#breno-seren-martins`,
      name: "Breno Seren Martins",
      jobTitle: "Desenvolvedor Full Stack",
      url: siteConfig.url,
      email: siteConfig.contactEmail,
      sameAs,
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <SmoothScrollProvider>
          <LoadingScreen />
          <CustomCursor />
          <span className="firstPaintSentinel" aria-hidden="true">
            .
          </span>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
            }}
          />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
