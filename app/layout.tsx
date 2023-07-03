import "./globals.css";

export const metadata = {
  title: "App Name",
  description: "Landing page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="duration-500 ease-in" >{children}</body>
    </html>
  );
}
