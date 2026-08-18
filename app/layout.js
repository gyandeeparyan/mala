import "./globals.css";

export const metadata = {
  title: "Japa Sadhana Counter",
  description: "Minimal japa counter with progressive devotional rewards.",
  manifest: "/manifest.webmanifest"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
