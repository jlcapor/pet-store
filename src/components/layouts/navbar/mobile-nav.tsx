'use client';
import * as React from 'react';
import { useMediaQuery } from '@/hooks/use-media-query';
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from '../../ui/sheet';
import { Button } from '../../ui/button';
import { AlignLeftIcon } from 'lucide-react';
import { DialogTitle } from '../../ui/dialog';
import MobileAuthLinks from './mobile-auth-links';
import { Logo } from './navbar';
import Link from 'next/link';

export default function MobileNav() {
	const isDesktop = useMediaQuery('(min-width: 1024px)');
	const [ open, setOpen ] = React.useState(false);
	if (isDesktop) return null;

	return (
		<Sheet open={open} onOpenChange={setOpen}>
			<SheetTrigger asChild>
				<Button variant="ghost" size="icon" className="lg:hidden flex">
					<AlignLeftIcon />
					<span className="sr-only">Toggle Menu</span>
				</Button>
			</SheetTrigger>
			<SheetContent className="flex flex-col gap-4 px-5" side="left">
				<DialogTitle className="sr-only">Menu</DialogTitle>
				<SheetHeader>
					<div className="px-5">
						<Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
							<Logo />
						</Link>
					</div>
				</SheetHeader>
				<div className="flex flex-col gap-4 overflow-y-auto">
					<div className="flex flex-col gap-2.5 mt-3 mx-2 px-5">
						yutyuty
						
					</div>
					<div className="mx-2 px-5">
						
						fdfgdf
					</div>

					<div className="p-6 pb-4 flex gap-2.5">
						<MobileAuthLinks onClose={() => setOpen(false)} />
					</div>
				</div>
			</SheetContent>
		</Sheet>
	);
}
