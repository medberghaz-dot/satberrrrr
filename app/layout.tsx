import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "مِراس - تسويق رقمي متخصص في القطاع الطبي | Miras",
  description: "شركة مِراس للتسويق الرقمي تقدم حلول التسويق الطبي المتكاملة. نأخذ بيدك من البداية إلى التمكين الرقمي.",
  keywords: "التسويق الطبي، تسويق رقمي، إعلانات، SEO، السوشيال ميديا",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0066CC" />
      </head>
      <body className="bg-white text-dark">{children}</body>
    </html>
  )
}
