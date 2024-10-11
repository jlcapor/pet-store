import '@/styles/globals.css';

import { GeistSans } from 'geist/font/sans';
import { type Viewport, type Metadata } from 'next';
import { GeistMono } from 'geist/font/mono';
import { fontHeading } from '@/lib/fonts';
import { TRPCReactProvider } from '@/trpc/react';
import { env } from '@/env';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import SessionWrapper from '@/components/session-wrapper';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/sonner';

export const metadata: Metadata = {
	metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	icons: [ { rel: 'icon', url: '/favicon.ico' } ],
};

export const viewport: Viewport = {
	colorScheme: 'dark light',
	themeColor: [
		{ media: '(prefers-color-scheme: light)', color: 'white' },
		{ media: '(prefers-color-scheme: dark)', color: 'black' },
	],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={cn(
					'min-h-screen bg-background font-sans antialiased',
					GeistSans.variable,
					GeistMono.variable,
					fontHeading.variable
				)}
				suppressHydrationWarning
			>
				<SessionWrapper>
					<ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
						<TRPCReactProvider>
							<div className="relative flex min-h-screen flex-col bg-background">
								{children}
							</div>
						</TRPCReactProvider>
						<Toaster />
					</ThemeProvider>
				</SessionWrapper>
			</body>
		</html>
	);
}
