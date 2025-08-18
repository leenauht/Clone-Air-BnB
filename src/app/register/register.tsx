'use client';

import { useState } from 'react';

import DivItem from '@/components/divItem/divItem';
import FormDatePicker from '@/components/form/formDatePicker';
import FormItem from '@/components/form/formItem';
import FormRadio from '@/components/form/formRadio';
import Modal from '@/components/modal/modal';

import { ICONS } from '@components/icons/icon';

import { validateFiled } from './validateFiled';

export default function Register() {
  const [open, setOpen] = useState(false);
  const [formInput, setFormInput] = useState({
    username: '',
    email: '',
    password: '',
    phone: '',
    gender: '',
    dob: '',
  });
  const [gender, setGender] = useState('');
  const [dob, setDob] = useState('');
  const [errors, setErrors] = useState<Partial<typeof formInput>>({});

  const handleChange = (name: string, value: string) => {
    setFormInput((prev) => ({ ...prev, [name]: value }));

    const errorMgs = validateFiled(name, value);
    setErrors((prev) => ({ ...prev, [name]: errorMgs }));
  };

  return (
    <>
      <DivItem
        onClick={() => setOpen(true)}
        icon={<ICONS.SignCircle width={20} height={20} />}
        text="Sign up"
        className="text-sm"
      />
      <Modal isOpen={open} onClose={() => setOpen(false)} title="Sign up">
        <form className="space-y-3">
          <FormItem
            // horizontal={true}
            label="Username"
            name="username"
            value={formInput.username}
            onChange={handleChange}
            error={errors.username}
            placeholder="Input username"
          />
          <FormItem
            horizontal={true}
            label="Email"
            name="email"
            value={formInput.email}
            onChange={handleChange}
            error={errors.email}
            placeholder="Input email"
          />
          <FormItem
            horizontal={true}
            label="Password"
            name="password"
            value={formInput.password}
            onChange={handleChange}
            error={errors.password}
            placeholder="Input password"
          />

          <FormItem
            horizontal={true}
            type="number"
            label="Phone"
            name="phone"
            value={formInput.phone}
            onChange={handleChange}
            error={errors.phone}
            placeholder="Input phone"
          />
          <FormRadio
            label="Gender"
            name="gender"
            value={gender}
            options={[
              { label: 'Male', value: 'male' },
              { label: 'Female', value: 'female' },
              { label: 'Other', value: 'other' },
            ]}
            onChange={setGender}
            error={errors.gender}
          />

          <FormDatePicker
            label="Birthday"
            name="dob"
            value={dob}
            onChange={setDob}
            error={errors.dob}
          />
        </form>
      </Modal>
    </>
  );
}
