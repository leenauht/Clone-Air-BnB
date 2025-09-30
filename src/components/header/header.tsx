import Image from 'next/image';
import Link from 'next/link';

import HeaderAvatarMenu from './headerAvatarMenu';
import NavItems from './headerItems';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 h-20 w-full shadow-shadow3 bg-white">
      <div className="mx-auto p-3 sm:px-10 md:max-w-[90%] md:px-0 2xl:max-w-screen-xl flex flex-wrap items-center justify-between">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Image
            src="https://www.trustifytechnology.com/wp-content/uploads/2023/06/mainlogo.png"
            alt="Trustify technology"
            width={150}
            height={60}
            style={{ height: 'auto' }}
          />
        </Link>
        <NavItems />
        <HeaderAvatarMenu />
      </div>
    </header>
  );
}
