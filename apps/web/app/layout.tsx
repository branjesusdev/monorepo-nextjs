import type { Metadata } from "next";
import { Lato } from "next/font/google";

import "@repo/theme/standard.css";
import "@/entry-point/themes/globals.css"
import { AppProviders } from "@/entry-point/providers/AppProviders";

const font = Lato({
  weight: ['300', '400', '700'],
  style: ['normal'],
  display: 'swap',
  variable: '--font-family',
})

export const metadata: Metadata = {
  title: "Merchants 2.0 - Tendero",
  description: "Productos y servicios para tenderos como Pago de servicios públicos, recargas, giros, entre otros.",
  icons: {
    icon: "/favicon.ico",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${font.variable} `}>

      <AppProviders>
        {children}
      </AppProviders>
      </body>
    </html>
  );
}
