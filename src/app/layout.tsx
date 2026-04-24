import type { Metadata } from "next";
import Script from "next/script";
import { Sora } from "next/font/google";
import { FloatingWhatsApp } from "@/components/ui/floating-whatsapp";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Abravely",
  description: "Software sob medida & IA aplicada. Sistemas e infraestrutura de alta performance para o seu negócio escalar.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sora.variable} antialiased dark`}
      suppressHydrationWarning
    >
      <head>
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '2104771390019564');
            fbq('track', 'PageView');
          `}
        </Script>
      </head>
      <body className="min-h-screen bg-background text-foreground flex flex-col font-sora">
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=2104771390019564&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
