import type { Metadata } from "next";
import { Poppins } from 'next/font/google'
import "./globals.css";

import {NextIntlClientProvider} from 'next-intl'
import {getMessages} from 'next-intl/server'

const poppins = Poppins({
  weight: '400',
  subsets: ['latin']})


export const metadata: Metadata = {
  title: {template: "%s | TrXBlog", default: "Home | TrXBlog"},

};

export default async function RootLayout({
  children,
  params: {locale}
  
}: Readonly<{
  children: React.ReactNode;
  params: {locale: string}
}>) {
	const messages = await getMessages()
  return (
    <html lang={locale}>
      <body
        className={`${poppins} antialiased`}>
			<NextIntlClientProvider messages={messages}>
        		{children}
			</NextIntlClientProvider>
		
      </body>
    </html>
  );
}
