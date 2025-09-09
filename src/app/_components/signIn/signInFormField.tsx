import FormItem from '@/components/form/formItem';

import { FormFieldSignIn } from './validateFieldSignIn';

// import { FormFieldSignIn } from './validateFiledSignIn';

type Props = {
  form: Record<FormFieldSignIn, string>;
  errors: Partial<Record<FormFieldSignIn, string>>;
  onChange: (name: FormFieldSignIn, value: string) => void;
};

export default function SignInFormFiled({ form, errors, onChange }: Props) {
  return (
    <>
      <FormItem
        label="Email"
        name="email"
        value={form.email}
        onChange={onChange}
        error={errors.email}
      />
      <FormItem
        label="Password"
        name="password"
        value={form.password}
        onChange={onChange}
        error={errors.password}
      />
    </>
  );
}
