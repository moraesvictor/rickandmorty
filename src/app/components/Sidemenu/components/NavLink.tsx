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
                        className={clsx("flex h-[48px] grow items-center justify-center mr-2 rounded-md p-3 text-sm font-medium hover:bg-[#b3c931] hover:text-blue-950 md:flex-none md:justify-start md:p-2 md:px-3", {
                            'bg-[#42b4ca] text-blue-600': pathname === link.href,
                        },)}
                    >
                        <p className="text-gray-800 font-semibold hidden md:block">{link.name}</p>
                    </Link>
                );
            })}
        </div>
    );
}
