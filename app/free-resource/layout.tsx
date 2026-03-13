import { Metadata } from 'next';
import { Suspense } from 'react';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Your Free Resource — Clear Choice Payment Solutions',
  robots: {
    index: false,
    follow: false,
  },
};

export default function FreeResourceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Google Analytics */}
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-H7Z8FNTNRS" strategy="afterInteractive" />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-H7Z8FNTNRS', { send_page_view: true });
        `}
      </Script>
      
      <Suspense fallback={<div style={{ padding: '40px', textAlign: 'center' }}>Loading...</div>}>
        {children}
      </Suspense>
    </>
  );
}
