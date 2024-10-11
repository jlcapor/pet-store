'use client';

import { MainNavItem } from '@/types';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { cn } from '@/lib/utils'; // Asegúrate de tener esta función

interface MainNavProps {
  items?: MainNavItem[];
}

export default function MainNav({ items }: MainNavProps) {
  const pathname = usePathname(); 

  return (
    <div className="hidden lg:flex">
      <nav className="flex items-center gap-4 text-sm lg:gap-6">
        {items?.map((item, index) =>
          item.href && (
            <Link
              key={index}
              href={item.disabled ? '#' : item.href}
              className={cn(
                'transition-colors hover:text-foreground/80',
                pathname === item.href ? 'text-foreground' : 'text-foreground/60',
                item.disabled && 'cursor-not-allowed opacity-80'
              )}
            >
              {item.title}
            </Link>
          )
        )}
      </nav>
    </div>
  );
}
