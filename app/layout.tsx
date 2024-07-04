import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Jankal",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://api.fontshare.com/v2/css?f[]=boska@200,201,300,301,400,401,500,501,700,701,900,901&f[]=satoshi@300,301,400,401,500,501,700,701,900,901&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap" rel="stylesheet"></link>
      </head>
      <body className="bg-primary">
        {children}
      </body>
    </html>
  );
}
