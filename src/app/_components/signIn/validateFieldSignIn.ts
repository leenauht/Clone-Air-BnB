export type FormFieldSignIn = 'email' | 'password';

export const validateFiledSignIn = (
  name: FormFieldSignIn,
  value: string,
): string => {
  const requiredMsgs: Record<FormFieldSignIn, string> = {
    email: 'Email is required',
    password: 'Password is required',
  };

  if (!value) return requiredMsgs[name];
  switch (name) {
    case 'email':
      if (!/\S+@\S+\.\S+/.test(value)) return 'Invalid email format';
      break;
    case 'password':
      if (value.length < 6) return 'Password must be at least 6 chars';
      break;
  }
  return '';
};
