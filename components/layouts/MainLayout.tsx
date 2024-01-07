import Head from 'next/head';
import Script from 'next/script';
import React, { useEffect } from 'react';

interface Props {
	children: React.ReactNode;
}

export const MainLayout = ({ children }: Props): any => {
 

	return (
		<>
			<Head>
				<title>Jonatan Claros</title>
				<meta name="description" content="portfolio" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				{/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-DBKMDQSZWE"></script>
				<script>
				window.dataLayer = window.dataLayer || [];
				function gtag(){dataLayer.push(arguments);}
				gtag('js', new Date());

				gtag('config', 'G-DBKMDQSZWE');
				</script> */}
				<Script src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />
					<Script id="google-analytics">
						{`
						window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag('js', new Date());
				
						gtag('config',  '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
							page_path: window.location.pathname,
						});
					`}
				</Script>
			</Head>
			<main>{children}</main>
		</>
	);
};