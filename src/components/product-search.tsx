'use client';
import { useEffect, useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from './ui/dialog';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';


export default function ProductSearch() {
	// const [ searchedInput, setSearchedInput ] = useState('');
	const [ isOpen, setIsOpen ] = useState(false);
	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.ctrlKey && event.key === 'k') {
				event.preventDefault();
				setIsOpen(true);
			}
		};
		window.addEventListener('keydown', handleKeyDown);
		return () => {
			window.removeEventListener('keydown', handleKeyDown);
		};
	}, []);

	return (
		<>
			<Button
				variant="outline"
				className="relative size-10 h-9 p-0 xl:h-9 xl:w-60 xl:justify-start xl:px-3 xl:py-2"
				onClick={() => setIsOpen((prev) => !prev)}
			>
				<MagnifyingGlassIcon className="size-6 xl:mr-2" aria-hidden="true" />
				<span className="hidden xl:inline-flex">Search products...</span>
				<span className="sr-only">Search products</span>
				<kbd className="pointer-events-none absolute right-1.5 top-1/2 transform -translate-y-1/2 gap-1 rounded border px-1.5 hidden xl:block">
					<span className="text-xs">⌘</span>K
				</kbd>
			</Button>

			<Dialog
				open={isOpen}
				onOpenChange={(isOpen) => {
					// if (!isOpen) setSearchedInput('');
					setIsOpen(isOpen);
				}}
			>
				<DialogContent>
					<DialogHeader>
						<DialogTitle>Buscar un producto</DialogTitle>
						<DialogDescription>Busque en todo nuestro catálogo de productos</DialogDescription>
					</DialogHeader>
					<Input placeholder="Search..." />
				</DialogContent>
			</Dialog>
		</>
	);
}
