import { Icons } from '../icons';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '../ui/sheet';
import { LoadingDots } from '../loading-dots/loading-dots';

interface CartSheetProps {
	onCartClose: () => void,
	onCartOpen: () => void
	isOpen: boolean,
	isPending: boolean
}
export function CartSheet({ isOpen, onCartClose, isPending }: CartSheetProps) {

  	const hasAnyItems = 0
	return (
		<Sheet open={isOpen} onOpenChange={() => onCartClose()}>
			<SheetContent className="size-full sm:max-w-lg min-h-svh p-0">
				<SheetHeader className="mb-4 flex w-full flex-row items-center justify-between border-b">
					<SheetTitle className="flex items-center p-4 text-[20px] font-normal">
						Revisa tu carrito
						{isPending ? <LoadingDots className="ml-4" /> : null}
					</SheetTitle>
				</SheetHeader>
				{!hasAnyItems && <CartEmptyState />}
			</SheetContent>
		</Sheet>
	);
}

function CartEmptyState() {
	return (
		<div className="flex size-full flex-col items-center justify-center gap-2 text-[21px] font-normal">
			<Icons.cart className='w-20 h-w-20'/>
			<p>Tu carrito esta vacío</p>
		</div>
	);
}
