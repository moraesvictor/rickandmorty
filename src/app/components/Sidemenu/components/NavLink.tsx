"use client";

import clsx from 'clsx';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
    { name: 'Characters', href: '/', },
    {
        name: 'Locations',
        href: '/locations',
    },
    { name: 'Teste', href: '/teste' },
];

export default function NavLinks() {

    const pathname = usePathname()
    return (
        <div className='flex items-center'>
            {links.map((link) => {
                return (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={clsx("flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-700 p-3 text-sm font-medium hover:bg-gray-500 hover:text-blue-950 md:flex-none md:justify-start md:p-2 md:px-3", {
                            'bg-sky-100 text-blue-600': pathname === link.href,
                        },)}
                    >
                        <p className="hidden md:block">{link.name}</p>
                    </Link>
                );
            })}
        </div>
    );
}
