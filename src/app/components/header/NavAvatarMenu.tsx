'use client';

import { useRef, useState } from 'react';

import { ICONS } from '@/app/components/icons/icon';
import { useOutsideClick } from '@/app/hooks/useClickOutSide';

import DivItem from '@/components/divItem/divItem';
import DropdownMenu from '@/components/dropdownMenu/dropdownMenu';

const { Account, Login, Menu, Setting, SignCircle } = ICONS;

export default function NavAvatarMenu() {
  const [open, setOpen] = useState(false);
  const dropDownMenu = useRef<HTMLDivElement>(null);

  useOutsideClick(dropDownMenu, () => {
    if (open) setOpen(false);
  });

  return (
    <div className="relative" ref={dropDownMenu}>
      <div
        onClick={() => setOpen(!open)}
        className="flex justify-center items-center gap-2 py-1 px-5 border rounded-full cursor-pointer"
      >
        <Menu />
        <Account width={40} height={40} color="gray" />
      </div>

      {/* Dropdown menu */}
      {open && (
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
      )}
    </div>
  );
}
