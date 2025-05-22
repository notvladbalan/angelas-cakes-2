import type { Metadata } from "next";
import AuthProvider from "./AuthProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Angelas Cakes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthProvider>
      <html lang="en">
        <body className={`antialiased`}>{children}</body>
      </html>
    </AuthProvider>
  );
}
