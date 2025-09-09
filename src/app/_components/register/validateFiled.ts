export type FormFieldSignUp =
  | 'name'
  | 'email'
  | 'password'
  | 'phone'
  | 'gender'
  | 'birthday'
  | 'role';

export const validateFiledSignUp = (
  name: FormFieldSignUp,
  value: string,
): string => {
  const requiredMsgs: Record<FormFieldSignUp, string> = {
    name: 'Username is required',
    email: 'Email is required',
    password: 'Password is required',
    phone: 'Phone is required',
    gender: 'Gender is required',
    birthday: 'Date of birth is required',
    role: '',
  };

  if (!value) return requiredMsgs[name];

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
