import "./globals.css";
import { AuthProvider } from "@/contexts/AuthContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AuthProvider>
        <body>{children}</body>
      </AuthProvider>
    </html>
  );
}

export const metadata = {
  title: "Plataforma de leilão online",
  description:
    "Navegue e dê lances em uma variedade de itens no conforto de sua casa.",
  favicon: "/favicon.ico",
};
