import Register from '@/app/_components/register/register';
import SignIn from '@/app/_components/signIn/signIn';
import { ICONS } from '@/components/icons/icon';
import { useAvatarMenu } from '@/hooks/useAvatarMenu';

import Dropdown from '../dropdown/dropdown';

export default function HeaderAvatarMenu() {
  const { Account, Menu } = ICONS;
  const {
    OPTIONS_DROPDOWN,
    openSignIn,
    setOpenSignIn,
    openRegister,
    setOpenRegister,
    signInNow,
    signUpNow,
  } = useAvatarMenu();

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
          const options = OPTIONS_DROPDOWN.find((o) => o.value === val);
          options?.action();
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
