import './globals.css';

export const metadata = {
  title: 'InsightStream AI',
  description: 'Churn Analytics for Subscription Brands',
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
