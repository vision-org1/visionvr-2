import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Vision | Immersive Entertainment",
  description: "Experience the future of entertainment with Vision.",
  openGraph: {
    title: "Vision | Immersive Entertainment",
    description: "Experience the future of entertainment with Vision.",
    images: [
      {
        url: "/logo.png",
        width: 2752,
        height: 1536,
        alt: "Vision - Realtà Virtuale. Emozioni Reali.",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", spaceGrotesk.variable, "font-sans", geist.variable)}
      style={{ colorScheme: "dark" }}
    >
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-full flex flex-col selection:bg-primary/30">
        {children}
      </body>
    </html>
  );
}
