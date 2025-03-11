import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

export const metadata = {
  title: "Plataforma de leilão online",
  description:
    "Navegue e dê lances em uma variedade de itens no conforto de sua casa.",
  favicon: "/favicon.ico",
};
