'use client';
import { Button } from '../ui/button';
import Link from 'next/link';
import { LogIn } from 'lucide-react';
import { DropdownMenu } from '../ui/dropdown-menu';

export default function ProfileDropdown() {
	// const [ isDropdownOpen, setIsDropdownOpen ] = useState(false);
	if (true) {
		return (
			<Button size="sm" asChild>
				<Link href="/auth/login">
					<LogIn className="h-5 w-5 mr-1" />
					Entrar
					<span className="sr-only">Entrar</span>
				</Link>
			</Button>
		);
	}
	return (
    <DropdownMenu>

    </DropdownMenu>
  )
}
