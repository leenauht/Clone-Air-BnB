import Link from 'next/link';

import { ICONS } from '@components/icons/icon';

import NavAvatarMenu from './navAvatarMenu';
import NavItems from './navItems';

export default function Header() {
  return (
    <header className="sticky top-0 shadow-shadow3 bg-white z-10">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <ICONS.Logo color="red" width={102} height={32} text={true} />
        </Link>
        <NavItems />
        <NavAvatarMenu />
      </div>
    </header>
  );
}
