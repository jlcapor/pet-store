'use client';

import { Icons } from '@/components/icons';
import { PasswordInput } from '@/components/password-input';
import { SubmitButton } from '@/components/submit-button';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';

export default function Login() {
	return (
		<Card className="w-full max-w-md">
			<CardHeader className="text-center">
				<Link href="/">
					<Icons.pet className="mx-auto h-10 w-10" />
				</Link>
				<div className="flex flex-col gap-1">
					<CardTitle className="text-2xl font-bold">Iniciar Sesión</CardTitle>
					<CardDescription>Inicia sesión para gestionar tus pedidos</CardDescription>
				</div>
			</CardHeader>
			<CardContent>
				<Button variant="outline" className="w-full" asChild>
					<Link href="/login" prefetch={false}>
						<Icons.google className="mr-2 h-5 w-5" />
						Iniciar sesión con Google
					</Link>
				</Button>
				<div className="my-2 flex items-center">
					<div className="flex-grow border-t border-muted" />
					<div className="mx-2 text-muted-foreground">or</div>
					<div className="flex-grow border-t border-muted" />
				</div>
				<form className="grid gap-4">
					<div className="space-y-2">
						<Label htmlFor="email">Email</Label>
						<Input
							required
							id="email"
							placeholder="email@example.com"
							autoComplete="email"
							name="email"
							type="email"
						/>
					</div>
					<div className="space-y-2">
						<Label htmlFor="password">Password</Label>
						<PasswordInput
							id="password"
							name="password"
							required
							autoComplete="current-password"
							placeholder="********"
						/>
					</div>
					<div className="flex flex-wrap justify-between">
						<Button variant={"link"} size={"sm"} className="p-0" asChild>
							<Link href={"/auth/register"} className=''>¿No tienes cuenta? Crear Una</Link>
						</Button>
						<Button variant={"link"} size={"sm"} className="p-0" asChild>
							<Link href={"/auth/reset-password"}>¿Olvidaste tu contraseña?</Link>
						</Button>
					</div>
					<SubmitButton className="w-full uppercase" aria-label="submit-btn">
						Iniciar Sesión
					</SubmitButton>
					<Button variant="outline" className="w-full text-sm font-bold uppercase" asChild>
						<Link href="/">Cancelar</Link>
					</Button>
				</form>
			</CardContent>
		</Card>
	);
}
