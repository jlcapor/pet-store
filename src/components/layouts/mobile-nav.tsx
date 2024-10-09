'use client';
import * as React from 'react';
import { useMediaQuery } from '@/hooks/use-media-query';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import { Button } from '../ui/button';
import { AlignLeftIcon } from 'lucide-react';

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
            <SheetContent className="flex flex-col h-auto w-[18.75rem] gap-4 px-0" side="left">

            </SheetContent>
		</Sheet>
	);
}
