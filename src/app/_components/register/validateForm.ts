import { FormFieldSignUp, validateFiledSignUp } from './validateFiled';

export type FormData = Record<FormFieldSignUp, string>;
export type FormErrors = Partial<FormData>;

export const validateFormSignUp = (form: FormData): FormErrors => {
  const errors: FormErrors = {};
  (Object.keys(form) as FormFieldSignUp[]).forEach((key) => {
    const error = validateFiledSignUp(key, form[key]);
    if (error) errors[key] = error;
  });
  return errors;
};
