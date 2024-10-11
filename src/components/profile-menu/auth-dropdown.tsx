'use client';
import React from 'react';
import Link from 'next/link';
import { Button, ButtonProps } from '../ui/button';
import { 
	DropdownMenu, 
	DropdownMenuContent, 
	DropdownMenuGroup, 
	DropdownMenuItem, 
	DropdownMenuLabel, 
	DropdownMenuSeparator, 
	DropdownMenuTrigger 
} from '../ui/dropdown-menu';
import { LogIn } from 'lucide-react';
import { type Session } from 'next-auth';
import { cn } from '@/lib/utils';
import { Avatar } from '@radix-ui/react-avatar';
import { AvatarFallback, AvatarImage } from '../ui/avatar';
import { DashboardIcon, ExitIcon } from '@radix-ui/react-icons';
import { Icons } from '../icons';
interface AuthDropdownProps extends React.ComponentPropsWithRef<typeof DropdownMenuTrigger>, ButtonProps {
	session: Session | null,
}

const SignoutConfirmation = React.lazy(() => import('./signout-confirmation'));

export default function AuthDropdown({ session, className, ...props }: AuthDropdownProps) {
	
	const user = session?.user;
	if (!user) {
		return (
			<Button size="sm" className={cn(className)} {...props} asChild>
				<Link href="/login">
					<LogIn className="h-5 w-5 mr-2" />
					Acceder
					<span className="sr-only">Acceder</span>
				</Link>
			</Button>
		);
	}
	const initials = `${session?.user.name?.charAt(0) ?? ""}`
	
	return (
		<DropdownMenu>
			<DropdownMenuTrigger  
				className={className}
				asChild
			>
				<Button 
					variant="secondary" 
					className={cn('size-8 rounded-full', className)} {...props}
				>
					<Avatar className="size-8">
						<AvatarImage src={user.image ?? ""} alt={user.name ?? ""} />
						<AvatarFallback>{initials}</AvatarFallback>
					</Avatar>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end" forceMount>
				<DropdownMenuLabel className="font-normal">
					<div className="flex items-center justify-start gap-2 p-2">
						<div className="flex flex-col space-y-1 leading-none">
							{user.name && <p className="font-medium">{user.name}</p>}
							{user.email && (
								<p className="w-[200px] truncate text-sm text-muted-foreground">
									{user.email}
								</p>
							)}
						</div>
					</div>
				</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuGroup>
					{user.role === "ADMIN" ? (
						<DropdownMenuItem asChild>
							<Link href="/admin/orders" className="flex items-center space-x-2.5">
								<DashboardIcon className="size-5"  />
								<p className="text-sm">Dashboard</p>
							</Link>
						</DropdownMenuItem>
					) : null}
					<DropdownMenuItem asChild>
						<Link href="/profile" className="flex items-center space-x-2.5">
							<Icons.user className="size-5" />
							<p className="text-sm">Perfil</p>
						</Link>
					</DropdownMenuItem>
					<DropdownMenuItem asChild>
						<Link href="/favorites" className="flex items-center space-x-2.5">
							<Icons.heart className="size-5" />
							<p className="text-sm">Favoritos</p>
						</Link>
					</DropdownMenuItem>
				</DropdownMenuGroup>
				<DropdownMenuSeparator />
				<DropdownMenuLabel className="flex items-center">
					<ExitIcon className="mr-2 size-5" aria-hidden="true" />
					<SignoutConfirmation />
				</DropdownMenuLabel>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
