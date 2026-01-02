import type { Metadata } from "next";
import "./ui/global.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio.miguel-anay.nom.pe"),
  title: "CV Miguel Anay - Desarrollador Web",
  description:
    "Portafolio profesional de Miguel Anay. Desarrollador especializado en FullStack Developer, Engineer IA, DevOps y más.",
  keywords:
    "desarrollador web, portfolio, CV, Miguel Anay, Full Stack Developer, DevOps, Ingeniero IA, React, Next.js, Node.js, Python, AWS, Azure, Docker, Kubernetes",
  authors: [{ name: "Miguel Anay" }],
  openGraph: {
    title: "CV Miguel Anay - Desarrollador Web",
    description:
      "Portafolio profesional de Miguel Anay. Desarrollador especializado en FullStack Developer, Engineer IA, DevOps y más.",
    type: "website",
    url: "https://portfolio.miguel-anay.nom.pe",
    siteName: "CV Miguel Anay",
    locale: "es_PE",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CV Miguel Anay - Desarrollador Web",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CV Miguel Anay - Desarrollador Web",
    description:
      "Portafolio profesional de Miguel Anay. Desarrollador especializado en FullStack Developer, Engineer IA, DevOps y más.",
    images: ["/og-image.jpg"],
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
    google: "IGsrjYKB5vmr-XxoWQQYEW667FqByM-0HWnnIxqtVnc", // Agregar cuando obtengas el código de Google Search Console
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
