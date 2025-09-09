import { FormFieldSignIn, validateFiledSignIn } from './validateFieldSignIn';

export type FormSignInData = Record<FormFieldSignIn, string>;
export type FormSignInErrors = Partial<FormSignInData>;

export const validateFormSignIn = (form: FormSignInData): FormSignInErrors => {
  const errors: FormSignInErrors = {};
  (Object.keys(form) as FormFieldSignIn[]).forEach((key) => {
    const error = validateFiledSignIn(key, form[key]);
    if (error) errors[key] = error;
  });
  return errors;
};
