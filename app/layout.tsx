export const metadata = {
  title: "SignatureMoments",
  description: "Handmade crafts made with love",
};

import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
