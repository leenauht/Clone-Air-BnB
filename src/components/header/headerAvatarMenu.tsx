'use client';

import { useRef, useState } from 'react';

import Register from '@/app/register/register';
import DivItem from '@/components/divItem/divItem';
import DropdownMenu from '@/components/dropdownMenu/dropdownMenu';
import { ICONS } from '@/components/icons/icon';
import { useOutsideClick } from '@/hooks/useClickOutSide';

const { Account, Login, Menu, Setting } = ICONS;

export default function HeaderAvatarMenu() {
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
            className="text-sm"
          />
          <Register />
          <DivItem
            icon={<Setting width={20} height={20} />}
            text="Cài đặt"
            className="text-sm"
          />
        </DropdownMenu>
      )}
    </div>
  );
}
