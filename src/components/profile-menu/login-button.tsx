'use client';

import { Button } from '@/components/ui/button';
import { LogIn } from 'lucide-react';
import Link from 'next/link';

export default function LoginButton() {
	return (
		<Button size="sm" asChild>
			<Link href="/login">
				<LogIn className="h-5 w-5 mr-2" />
				Entrar
				<span className="sr-only">Entrar</span>
			</Link>
		</Button>
	);
}
