import { Cart } from '@/components/cart/cart';
import Footer from '@/components/layouts/footer/footer';
import Navbar from '@/components/layouts/navbar/navbar';
import { getSession } from '@/lib/session';


export default async function PetAdoptionLayout({ children }: { children: React.ReactNode }) {
	const session = await getSession();
	return (
		<>
			<Navbar session={session}/>
			<div className="flex-1">{children}</div>
			<Cart />
			<Footer />
		</>
	);
}
