import './globals.css';

export const metadata = {
  title: 'E-CR - Digital Classroom Management',
  description: 'Smart Digital Classroom Management System',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-50 antialiased">{children}</body>
    </html>
  );
}