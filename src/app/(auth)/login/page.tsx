import { getCurrentUser } from '@/lib/session';
import LoginForm  from './_components/login-form';
import { redirect } from 'next/navigation';

export const metadata = {
	title: 'Login',
	description: 'Login Page',
};

export default async function LoginPage() {
	const user = await getCurrentUser();

	if (user) {
		if (user.role === 'ADMIN') redirect('/');
		redirect('/profile');
	}
	return <LoginForm  />;
}
