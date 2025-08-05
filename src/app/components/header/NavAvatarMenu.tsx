'use client';

import { Account, Menu } from '../icons/icon';

export default function NavAvatarMenu() {
  return (
    <div className="">
      <div className="flex justify-center items-center gap-2 py-1 px-5 border rounded-full cursor-pointer">
        <Menu />
        <Account width={40} height={40} color="gray" />
      </div>

      {/* Dropdown menu */}
    </div>
  );
}
