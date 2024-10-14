import Link from 'next/link';
import React from 'react';
import { buttonVariants } from '../../ui/button';
import { ClipboardPen, LogIn } from 'lucide-react';
interface MobileAuthLinksProps {
	onClose: () => void,
}
export default function MobileAuthLinks({ onClose }: MobileAuthLinksProps) {
	return (
		<>
			<Link href="/login" className={buttonVariants({ size: 'sm'})} onClick={onClose}>
				<LogIn className="h-5 w-5 mr-2" />
				Acceder
			</Link>
			<Link href="/signup" className={buttonVariants({ variant: 'outline', size: 'sm' })} onClick={onClose}>
				<ClipboardPen className="h-5 w-5 mr-2" />
				Regístrate
			</Link>
		</>
	);
}
