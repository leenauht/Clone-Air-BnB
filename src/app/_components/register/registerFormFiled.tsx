import FormDatePicker from '@/components/form/formDatePicker';
import FormItem from '@/components/form/formItem';
import FormSelect from '@/components/form/formSelect';

import { FormField } from './validateFiled';

type Props = {
  form: Record<FormField, string>;
  errors: Partial<Record<FormField, string>>;
  onChange: (name: FormField, value: string) => void;
};

export default function RegisterFormFiled({ form, errors, onChange }: Props) {
  return (
    <>
      <FormItem
        // horizontal={true}
        label="Username"
        name="name"
        value={form.name}
        onChange={onChange}
        error={errors.name}
      />
      <FormItem
        // horizontal={true}
        label="Email"
        name="email"
        value={form.email}
        onChange={onChange}
        error={errors.email}
      />
      <FormItem
        horizontal={true}
        label="Password"
        name="password"
        value={form.password}
        onChange={onChange}
        error={errors.password}
      />

      <FormItem
        horizontal={true}
        type="number"
        label="Phone"
        name="phone"
        value={form.phone}
        onChange={onChange}
        error={errors.phone}
      />
      <FormSelect
        horizontal={true}
        label="Gender"
        name="gender"
        error={errors.gender}
      />

      <FormDatePicker
        horizontal={true}
        label="Birthday"
        name="birthday"
        value={form.birthday}
        onChange={onChange}
        error={errors.birthday}
      />
    </>
  );
}
