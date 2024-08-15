export const metadata = {
  title: "Edfortify",
  description: "Edfortify empowering software for schools",
};

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
