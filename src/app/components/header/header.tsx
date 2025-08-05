'use client';

import Link from 'next/link';

import { Logo } from '../icons/Logo';
// import { usePathname } from 'next/navigation';

import NavAvatarMenu from './NavAvatarMenu';
import NavItems from './NavItems';

export default function Header() {
  // const pathname = usePathname();

  return (
    <nav className="fixed w-full z-[1000] bg-bg-opacity-4 shadow-box-shadow-1">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Logo color="red" width={102} height={32} text={true} />
        </Link>
        <NavItems />
        <NavAvatarMenu />
      </div>
    </nav>
  );
}
