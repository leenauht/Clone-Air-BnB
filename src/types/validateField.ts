export type FormSignUp =
  | 'name'
  | 'email'
  | 'password'
  | 'phone'
  | 'gender'
  | 'birthday'
  | 'role';

export type FormSignIn = 'email' | 'password';

export const validateField = <T extends string>(
  name: T,
  value: string,
  requieredMsgs: Record<T, string>,
): string => {
  if (!value) return requieredMsgs[name];

  switch (name) {
    case 'email':
      if (!/\S+@\S+\.\S+/.test(value)) return 'Invalid email format';
      break;
    case 'password':
      if (value.length < 6) return 'Password must be at least 6 chars';
      break;
    case 'phone':
      if (!/^\d{10}$/.test(value)) return 'Phone must be 10 digits';
      break;
  }
  return '';
};
