'use client';

import DivItem from '@components/divItem/divItem';
import DropdownMenu from '@components/dropdownMenu/dropdownMenu';
import { ICONS } from '@components/icons/icon';

export default function NavAvatarMenu() {
  const { Account, Login, Menu, Setting, SignCircle } = ICONS;

  return (
    <div className="relative">
      <div className="flex justify-center items-center gap-2 py-1 px-5 border rounded-full cursor-pointer">
        <Menu />
        <Account width={40} height={40} color="gray" />
      </div>

      {/* Dropdown menu */}

      <DropdownMenu>
        <DivItem
          icon={<Login width={20} height={20} />}
          text="Đăng nhập"
          fontSize={14}
        />
        <DivItem
          icon={<SignCircle width={20} height={20} />}
          text="Đăng ký"
          fontSize={14}
        />
        <DivItem
          icon={<Setting width={20} height={20} />}
          text="Cài đặt"
          fontSize={14}
        />
      </DropdownMenu>
    </div>
  );
}
