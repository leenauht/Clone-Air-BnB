import { useState } from 'react';

import { ICONS } from '@/components/icons/icon';
import { toastSuccess } from '@/helper/toastHelper';
import { useAuthStore } from '@/store/authStore';

export function useAvatarMenu() {
  const { Login, SignCircle, Setting, Logout, Account } = ICONS;
  const [openSignIn, setOpenSignIn] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);
  const { user, logout } = useAuthStore();

  // action modal
  function signInNow() {
    setOpenRegister(false);
    setOpenSignIn(true);
  }

  function signUpNow() {
    setOpenSignIn(false);
    setOpenRegister(true);
  }

  // case chưa đăng nhập
  const AUTH_OPTIONS = [
    {
      label: 'Sign in',
      value: 'signIn',
      prefix: <Login width={20} height={20} />,
      action: () => setOpenSignIn(true),
    },
    {
      label: 'Sign up',
      value: 'signUp',
      prefix: <SignCircle width={20} height={20} />,
      action: () => setOpenRegister(true),
    },
  ] as const;

  // case đã đăng nhập
  const USER_OPTIONS = [
    {
      label: 'Settings',
      value: 'settings',
      prefix: <Setting width={20} height={20} />,
      action: () => console.log('Open settings'),
    },
    {
      label: 'Profile',
      value: 'profile',
      prefix: <Account width={20} height={20} />,
      action: () => console.log('Open profile'),
    },
    {
      label: 'Logout',
      value: 'logout',
      prefix: <Logout width={20} height={20} color="red" />,
      color: 'red',
      action: () => {
        logout();
        toastSuccess('Đăng xuất thành công 🎉');
      },
    },
  ] as const;

  const OPTIONS_DROPDOWN = user ? USER_OPTIONS : AUTH_OPTIONS;

  return {
    OPTIONS_DROPDOWN,
    openSignIn,
    setOpenSignIn,
    openRegister,
    setOpenRegister,
    signInNow,
    signUpNow,
  };
}
