'use client';

import Link from 'next/link';

import { ICONS } from '@components/icons/icon';

import HeaderAvatarMenu from './headerAvatarMenu';
import NavItems from './headerItems';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 h-20 w-full shadow-shadow3 bg-white">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <ICONS.Logo color="red" width={102} height={32} text={true} />
        </Link>
        <NavItems />
        <HeaderAvatarMenu />
      </div>
    </header>
  );
}
