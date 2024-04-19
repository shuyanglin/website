import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shu Yang Lin || Personal Website",
  description: "NextJS + MUI + Sanity",
};

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
