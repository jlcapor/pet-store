import HeroSection from '@/components/home-page/hero-section';

export default async function Home() {
	return (
		<div className="flex w-full flex-col">
			<HeroSection />
			<section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
				<div className="container px-4 md:px-6">
					<div className="flex flex-col items-center justify-center space-y-4 text-center">
						<div className="space-y-2">
							<div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
								Comprar por mascota
							</div>
							<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
								Encuentra lo mejor para tu mascota
							</h2>
							<p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
								Ofrecemos una amplia variedad de productos específicos para cada tipo de mascota.
							</p>
						</div>
					</div>
					fdfdf
				</div>
			</section>
			<section className="w-full py-12 md:py-24 lg:py-32">
				<div className="container px-4 md:px-6">
					<div className="flex flex-col items-center justify-center space-y-4 text-center">
						<div className="space-y-2">
							<div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Servicios</div>
							<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
								Cuidamos de tus mascotas
							</h2>
							<p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
								Ofrecemos una amplia gama de servicios para el cuidado y bienestar de tus mascotas.
							</p>
						</div>
					</div>
					<div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
						fdfgdf
					</div>
				</div>
			</section>
		</div>
		// <HydrateClient>
		//   <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
		//     <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
		//       <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
		//         Create <span className="text-[hsl(280,100%,70%)]">T3</span> App
		//       </h1>
		//       <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
		//         <Link
		//           className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 hover:bg-white/20"
		//           href="https://create.t3.gg/en/usage/first-steps"
		//           target="_blank"
		//         >
		//           <h3 className="text-2xl font-bold">First Steps →</h3>
		//           <div className="text-lg">
		//             Just the basics - Everything you need to know to set up your
		//             database and authentication.
		//           </div>
		//         </Link>
		//         <Link
		//           className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 hover:bg-white/20"
		//           href="https://create.t3.gg/en/introduction"
		//           target="_blank"
		//         >
		//           <h3 className="text-2xl font-bold">Documentation →</h3>
		//           <div className="text-lg">
		//             Learn more about Create T3 App, the libraries it uses, and how
		//             to deploy it.
		//           </div>
		//         </Link>
		//       </div>
		//       <div className="flex flex-col items-center gap-2">
		//         <p className="text-2xl text-white">
		//           {hello ? hello.greeting : "Loading tRPC query..."}
		//         </p>

		//         <div className="flex flex-col items-center justify-center gap-4">
		//           <p className="text-center text-2xl text-white">
		//             {session && <span>Logged in as {session.user?.name}</span>}
		//           </p>
		//           <Link
		//             href={session ? "/api/auth/signout" : "/api/auth/signin"}
		//             className="rounded-full bg-white/10 px-10 py-3 font-semibold no-underline transition hover:bg-white/20"
		//           >
		//             {session ? "Sign out" : "Sign in"}
		//           </Link>
		//         </div>
		//       </div>

		//       {session?.user && <LatestPost />}
		//     </div>
		//   </main>
		// </HydrateClient>
	);
}
