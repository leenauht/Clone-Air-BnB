'use client';

import { useRef, useState } from 'react';

import Register from '@/app/_components/register/register';
import { ICONS } from '@/components/icons/icon';
import { useOutsideClick } from '@/hooks/useClickOutSide';

import Dropdown from '../dropdown/dropdown';

const { Account, Login, Menu, Setting, SignCircle } = ICONS;
const OPTIONS_DROPDOWN = [
  {
    label: 'Sign in',
    value: 'sign in',
    prefix: <Login width={20} height={20} />,
  },
  {
    label: 'Sign up',
    value: 'sign up',
    prefix: <SignCircle width={20} height={20} />,
  },
  {
    label: 'Settings',
    value: 'settings',
    prefix: <Setting width={20} height={20} />,
  },
];

export default function HeaderAvatarMenu() {
  const [open, setOpen] = useState(false);
  const dropDownMenu = useRef<HTMLDivElement>(null);
  const [openRegister, setOpenRegister] = useState(false);

  useOutsideClick(dropDownMenu, () => {
    if (open) setOpen(false);
  });

  return (
    <>
      <Dropdown
        id="headerAvatarMenu"
        className="border hover:border-blue-500 rounded-full py-1 px-5"
        trigger={
          <>
            <Menu />
            <Account width={40} height={40} color="gray" />
          </>
        }
        isChevronDown
        options={OPTIONS_DROPDOWN}
        onChange={(val) => {
          if (val === 'sign up') setOpenRegister(true);
        }}
      />
      {openRegister && (
        <Register open={openRegister} onClose={() => setOpenRegister(false)} />
      )}
    </>
  );
}
