import type { Metadata, Viewport } from 'next';

export const metadata: Metadata = {
  title: 'Next.js on GitHub Pages',
  description: 'Deploy your static Next.js site to GitHub Pages.',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <style dangerouslySetInnerHTML={{
          __html: `
            /* Global CSS Reset for Mobile-First Design */
            * {
              box-sizing: border-box;
              margin: 0;
              padding: 0;
            }

            html {
              font-size: 16px;
              -webkit-text-size-adjust: 100%;
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
            }

            body {
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
                           'Helvetica Neue', Arial, sans-serif;
              line-height: 1.5;
              color: #333;
              background-color: #fff;
              overflow-x: hidden;
            }

            img {
              max-width: 100%;
              height: auto;
              display: block;
            }

            /* Touch-friendly button and link sizing */
            button,
            a {
              min-height: 44px;
              min-width: 44px;
            }

            /* Responsive typography */
            @media (max-width: 480px) {
              html {
                font-size: 14px;
              }
            }

            @media (min-width: 768px) {
              html {
                font-size: 16px;
              }
            }

            @media (min-width: 1024px) {
              html {
                font-size: 18px;
              }
            }
          `
        }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
