import Link from 'next/link';

import { Logo } from '../icons/logo';
import NavAvatarMenu from './navAvatarMenu';
import NavItems from './navItems';

export default function Header() {
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
