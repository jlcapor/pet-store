import Link from 'next/link';
import { buttonVariants } from '../../ui/button';
import { Shell } from '../../Shell';
import { Logo } from '../navbar/navbar';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import { Icons } from '../../icons';
import { ModeToggle } from './mode-toggle';

const Footer = () => {
	return (
		<footer className="w-full border-t bg-background">
			<Shell>
				<section className="flex flex-col gap-10 lg:flex-row lg:gap-20">
					<section>
						<Logo />
					</section>
					<section className="grid flex-1 grid-cols-1 gap-10 xxs:grid-cols-2 sm:grid-cols-4">yy</section>

					<section className="space-y-3">yy</section>

					<section className="flex items-center space-x-4">
						<div className="flex-1 text-left text-sm leading-loose text-muted-foreground">yy</div>
						<div className="flex items-center space-x-1">
							<Link
								href={siteConfig.links.github}
								target="_blank"
								rel="noreferrer"
								className={cn(
									buttonVariants({
										size: 'icon',
										variant: 'ghost',
									})
								)}
							>
								<Icons.gitHub className="size-4" aria-hidden="true" />
								<span className="sr-only">GitHub</span>
							</Link>
							<ModeToggle />
						</div>
					</section>
				</section>
			</Shell>
		</footer>
	);
}

export default Footer

