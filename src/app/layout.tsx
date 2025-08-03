import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Rate My Study Spots',
  description: 'Find and rate the best study spots in your area',
  keywords: 'study spots, libraries, cafes, study spaces, ratings',
  authors: [{ name: 'Rate My Study Spots' }],
  viewport: 'width=device-width, initial-scale=1',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50">
        {/* You can add Header/Navigation here later */}
        <main className="container mx-auto px-4 py-8">{children}</main>
        {/* You can add Footer here later */}
      </body>
    </html>
  );
}
