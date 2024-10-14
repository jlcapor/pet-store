import Link from 'next/link';
import { Icons } from '../../icons';
import { siteConfig } from '@/config/site';
import { OpenCartButton } from '../../cart/open-cart-button';
import MainNav from './main-nav';
import ProductSearch from './product-search';
import MobileNav from './mobile-nav';
import AuthDropdown from './profile-menu/auth-dropdown';
import { Session } from 'next-auth';

interface NavbarProps {
	session: Session | null,
}

const Navbar = ({ session }: NavbarProps) => {
	return (
		<nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="mx-auto flex max-w-screen-2xl h-16 items-center justify-between gap-1 px-4 py-1.5 sm:w-[95vw] md:flex-row md:gap-5">
				<div className="flex w-full items-center justify-between gap-2 md:gap-5">
					<div className="flex items-center gap-5">
						<div className="flex items-center gap-6">
							<MobileNav />
							<div className="lg:flex hidden">
								<Logo />
							</div>
							<div className="lg:flex hidden items-center gap-4 text-sm font-medium text-muted-foreground">
								<MainNav items={siteConfig.mainNav} />
							</div>
						</div>
					</div>
					<div className="flex items-center space-x-3">
						<ProductSearch />
						<OpenCartButton />
						<AuthDropdown session={session} />
					</div>
				</div>
			</div>
			{/* <div className="w-full border-t">
				<div className="mx-auto flex w-full max-w-screen-2xl items-center justify-between gap-4 overflow-x-auto whitespace-nowrap px-4 py-2 sm:w-[95vw] md:justify-start ">
					hghghjghghj
				</div>
			</div> */}
		</nav>
	);
};

export default Navbar;

export function Logo() {
	return (
		<Link href="/" className="flex items-center space-x-2">
			<Icons.pet className="h-6 w-6 text-muted-foreground fill-current" strokeWidth={3} />
			<h2 className="ml-2 text-xl font-semibold">{siteConfig.name}</h2>
		</Link>
	);
}
