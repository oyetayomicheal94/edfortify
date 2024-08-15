import "../styles/globals.css";
import "../asset/bootstrap-icons/bootstrap-icons.css";
import "../asset/bootstrap-icons/bootstrap-icons.json";

export const metadata = {
  title: "Edfortify",
  description: "Edfortify empowering software for school",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full bg-gray-100">
      <body className="h-full">{children}</body>
    </html>
  );
}
