import React from 'react';
import ProfileDropdown from './profile-dropdown';
import LoginButton from './login-button';

export default function ProfileMenu() {
	return (
		<>
			{false ? (
				<ProfileDropdown />
			) : (
				<div className="flex items-center space-x-6">
					<LoginButton />
				</div>
			)}
		</>
	);
}
