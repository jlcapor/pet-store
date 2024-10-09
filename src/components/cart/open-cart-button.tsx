'use client';

import { Button } from '../ui/button';
import { Icons } from '../icons';
import { Badge } from '@/components/ui/badge';
import { useCartStore } from '@/stores/cartStore';

export function OpenCartButton() {
	const openCart = useCartStore((s) => s.openCart);
	// const preloadSheet = useCartStore((s) => s.preloadSheet);
	return (
		<Button aria-label="Open cart" variant="outline" size="icon" className="relative h-9 xl:h-9" onClick={() => openCart()}>
			<Badge variant="secondary" className="absolute -right-2 -top-2 size-6 justify-center rounded-full p-2.5">
				8
			</Badge>
			<Icons.cart className="size-4" aria-hidden="true" />
		</Button>
	);
}
