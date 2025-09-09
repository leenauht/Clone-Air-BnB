'use client';

import { useState } from 'react';

import Register from '@/app/_components/register/register';
import SignIn from '@/app/_components/signIn/signIn';
import { ICONS } from '@/components/icons/icon';

import Dropdown from '../dropdown/dropdown';

const { Account, Login, Menu, Setting, SignCircle, Logout } = ICONS;
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
  {
    label: 'Logout',
    value: 'logout',
    prefix: <Logout width={20} height={20} color="red" />,
    color: 'red',
  },
];

export default function HeaderAvatarMenu() {
  const [openSignIn, setOpenSignIn] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);

  function signInNow() {
    setOpenRegister(false);
    setOpenSignIn(true);
  }
  function signUpNow() {
    setOpenSignIn(false);
    setOpenRegister(true);
  }

  return (
    <>
      <Dropdown
        className="border hover:border-blue-500 rounded-full py-1 px-5"
        activator={
          <>
            <Menu />
            <Account width={40} height={40} color="gray" />
          </>
        }
        isChevronDown
        options={OPTIONS_DROPDOWN}
        onChange={(val) => {
          if (val === 'sign up') setOpenRegister(true);
          if (val === 'sign in') setOpenSignIn(true);
        }}
      />
      {openSignIn && (
        <SignIn
          open={openSignIn}
          onClose={() => setOpenSignIn(false)}
          signUp={signUpNow}
        />
      )}
      {openRegister && (
        <Register
          open={openRegister}
          onClose={() => setOpenRegister(false)}
          signIn={signInNow}
        />
      )}
    </>
  );
}
