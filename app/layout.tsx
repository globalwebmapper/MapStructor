import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "MapStructor",
  description: "Mapping app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
        name="description"
        content="New Amsterdam - Early New York Interactive Map with History Timeline"
        />
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <meta name="robots" content="all" />

        <meta
          property="og:title"
          content="Mapping Early New York - New Amsterdam History"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://nahc-mapping.org/mappingNY/icons/FortAmsterdam.jpg"
        />
        <meta property="og:url" content="https://nahc-mapping.org/mappingNY/" />
        <meta name="twitter:card" content="new_amsterdam_icon" />

        <meta
          property="og:description"
          content="New Amsterdam - Early New York Interactive Map with History Timeline"
        />
        <meta property="og:site_name" content="New Amsterdam History" />
        <meta name="twitter:image:alt" content="New Amsterdam Icon" />

        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="theme-color" content="#00A2E5" />
        <meta
          name="apple-mobile-web-app-title"
          content="Mapping Early New York | New Amsterdam History"
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
      </head>
      <body
        id='app-body'
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
