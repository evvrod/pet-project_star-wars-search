import type { Metadata } from 'next';

import ThemeProvider from '../components/ThemeProvider';
import StoreProvider from '../components/StoreProvider';

import '../globals.css';

export const metadata: Metadata = {
  title: 'Star Wars Search',
  description:
    'This app allows you to search for information about characters in the Star Wars universe',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <StoreProvider>
            <div id="root">{children}</div>
          </StoreProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
