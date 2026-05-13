import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Arise - Premier Agency Landing Page Template",
  description: "Elevate your agency's online presence with Arise, a meticulously crafted Framer template for creative agencies.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>{children}</body>
    </html>
  )
}
