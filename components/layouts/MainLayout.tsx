import Head from 'next/head';
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
				{/* <link rel="icon" href="/favicon.ico" /> */}
			</Head>
			<main>{children}</main>
		</>
	);
};