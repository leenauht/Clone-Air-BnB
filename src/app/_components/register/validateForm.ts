import { FormField, validateFiled } from './validateFiled';

export type FormData = Record<FormField, string>;
export type FormErrors = Partial<FormData>;

export const validateForm = (form: FormData): FormErrors => {
  const errors: FormErrors = {};
  (Object.keys(form) as FormField[]).forEach((key) => {
    const error = validateFiled(key, form[key]);
    if (error) errors[key] = error;
  });
  return errors;
};
