import "./globals.css";
import { Lato } from "next/font/google";

const lato = Lato({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lato",
});

export const metadata = {
  title: "Focus | Restaurant Analytics Platform",
  description:
    "Handcrafted loyalty as unique as your restaurants. Understand your guests and build loyalty across concepts with purpose built software that puts you in control.",
  keywords: ["focus", "restaurant", "analytics", "loyalty", "hospitality"],
  authors: [{ name: "Focus Team" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${lato.className} antialiased bg-white`}>
        {children}
      </body>
    </html>
  );
}
