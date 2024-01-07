import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import type { AppProps } from "next/app";
import Script from 'next/script';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
       <Script
         
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />
        <Script id="google-analytics">
          {`
							window.dataLayer = window.dataLayer || [];
							function gtag(){dataLayer.push(arguments);}
							gtag('js', new Date());
					
							gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
			`}
        </Script>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
