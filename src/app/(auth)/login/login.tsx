'use client';

import { useForm } from 'react-hook-form';
import { PasswordInput } from '@/components/password-input';
import { SubmitButton } from '@/components/submit-button';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { type LoginInput } from '@/lib/validations/auth';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Icons } from '@/components/icons';
import { signIn } from 'next-auth/react';

export default function Login() {
	const initialValues: LoginInput = {
		email: '',
		password: '',
	};

	const router = useRouter();
	const [isLoading, setIsLoading] = useState(false);
	const [isGoogleLoading, setIsGoogleLoading] = useState<boolean>(false);
	const { register, handleSubmit, formState: { errors }, setError } = useForm({ defaultValues: initialValues });
	
	const handleLogin = async (formData: LoginInput) => {
		setIsLoading(true);
		const callback = await signIn('credentials', {
			email: formData.email.toLowerCase(),
			password: formData.password,
			redirect: false,
		});

		setIsLoading(false);

		if (callback?.ok) {
			router.push('/');
			router.refresh();
		}
		if (callback?.error) {
			setError("root", { message: callback.error });
		}
	};
	return (
		<Card className="w-full max-w-md">
			<CardHeader className="text-center space-y-1">
				<Link href="/">
					<Icons.pet className="mx-auto h-10 w-10" />
				</Link>
				<div className="flex flex-col gap-1">
					<CardTitle className="text-2xl font-bold">Iniciar Sesión</CardTitle>
					<CardDescription>Inicia sesión para gestionar tus pedidos</CardDescription>
				</div>
			</CardHeader>
			<CardContent className="grid gap-4">
				<div className="grid grid-cols-2 gap-6">
					<Button variant="outline">
						<Icons.gitHub className="mr-2 h-5 w-5" />
						Github
					</Button>
					<Button 
						variant="outline" 
						className="w-full"
						onClick={() => {
							setIsGoogleLoading(true);
							signIn("google");
						}}
						disabled={isLoading || isGoogleLoading}
					>
						{isGoogleLoading ? (
							<Icons.spinner className="mr-2 size-4 animate-spin" />
						) : (
							<Icons.google className="mr-2 size-4" />
						)}{" "}
						Google
					</Button>
				</div>
				<div className="relative">
					<div className="absolute inset-0 flex items-center">
						<span className="w-full border-t" />
					</div>
					<div className="relative flex justify-center text-xs uppercase">
						<span className="bg-background px-2 text-muted-foreground">O continuar con</span>
					</div>
				</div>
				<form onSubmit={handleSubmit(handleLogin)} className="grid gap-4">
					<div className="space-y-2">
						<Label htmlFor="email">Email</Label>
						<Input
							id="email"
							type="email"
							placeholder="email@example.com"
							{...register('email', {
								required: 'El Email es obligatorio',
								pattern: {
									value: /\S+@\S+\.\S+/,
									message: 'E-mail no válido',
								},
							})}
						/>
						{errors.email && (
							<p className="text-sm text-red-500 dark:text-red-500">{errors.email.message}</p>
						)}
					</div>
					<div className="space-y-2">
						<Label htmlFor="password">Password</Label>
						<PasswordInput
							id="password"
							placeholder="********"
							{...register('password', {
								required: 'El Password es obligatorio',
							})}
						/>
						{errors.password && (
							<p className="text-sm text-red-500 dark:text-red-500">{errors.password.message}</p>
						)}
					</div>
					<div className="flex flex-wrap justify-between">
						<Button variant={'link'} size={'sm'} className="p-0" asChild>
							<Link href={'/auth/register'} className="">
								¿No tienes cuenta? Crear Una
							</Link>
						</Button>
						<Button variant={'link'} size={'sm'} className="p-0" asChild>
							<Link href={'/auth/reset-password'}>¿Olvidaste tu contraseña?</Link>
						</Button>
					</div>
					{errors.root?.message && <p className="list-disc space-y-1 rounded-lg border bg-destructive/10 p-2 text-[0.8rem] font-medium text-destructive">{errors.root?.message}</p>}
					<Button type="submit" className="w-full text-xs font-bold uppercase" disabled={isLoading}>
						{isLoading && <Icons.spinner className="mr-2 size-4 animate-spin" aria-hidden="true" />}
						Iniciar Sesión
						<span className="sr-only">Iniciar Sesión</span>
					</Button>
					<Button variant="outline" className="w-full text-xs font-bold uppercase" asChild>
						<Link href="/">Cancelar</Link>
					</Button>
				</form>
			</CardContent>
		</Card>
	);
}
