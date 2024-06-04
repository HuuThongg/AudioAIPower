import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ConvexClerkProvider from "@/providers/ConvexClerkProvider";
import AudioProvider from "@/providers/AudioProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Podcastr",
  description: "Generate your podcasts using AI",
  icons: {
    icon: '/icons/logo.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AudioProvider>

        <body className={`${geistSans.variable} ${geistMono.variable} overflow-y-hidden`}>
          <ConvexClerkProvider>
            {children}
          </ConvexClerkProvider>
        </body>
      </AudioProvider>
    </html >
  );
}
