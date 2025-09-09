import FormDatePicker from '@/components/form/formDatePicker';
import FormItem from '@/components/form/formItem';
import FormSelect from '@/components/form/formSelect';

import { FormFieldSignUp } from './validateFiled';

type Props = {
  form: Record<FormFieldSignUp, string>;
  errors: Partial<Record<FormFieldSignUp, string>>;
  onChange: (name: FormFieldSignUp, value: string) => void;
};

export default function RegisterFormFiled({ form, errors, onChange }: Props) {
  return (
    <>
      <FormItem
        // horizontal
        label="Username"
        name="name"
        value={form.name}
        onChange={onChange}
        error={errors.name}
      />
      <FormItem
        // horizontal
        label="Email"
        name="email"
        value={form.email}
        onChange={onChange}
        error={errors.email}
      />
      <FormItem
        horizontal
        label="Password"
        name="password"
        value={form.password}
        onChange={onChange}
        error={errors.password}
      />
      <FormItem
        horizontal
        type="number"
        label="Phone"
        name="phone"
        value={form.phone}
        onChange={onChange}
        error={errors.phone}
      />
      <FormSelect
        horizontal
        label="Gender"
        name="gender"
        value={form.gender}
        onChange={onChange}
        error={errors.gender}
      />
      <FormDatePicker
        horizontal
        label="Birthday"
        name="birthday"
        value={form.birthday}
        onChange={onChange}
        error={errors.birthday}
      />
    </>
  );
}
