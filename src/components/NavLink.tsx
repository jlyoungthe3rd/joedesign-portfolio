'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
};

export default function NavLink({ href, children }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`text-lg transition-colors hover:text-gray-900 dark:hover:text-gray-300 ${
        isActive
          ? 'text-black dark:text-white font-bold underline underline-offset-4'
          : 'text-gray-500 dark:text-gray-400'
      }`}
    >
      {children}
    </Link>
  );
}
