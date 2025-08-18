'use client';

import { useState } from 'react';

import DivItem from '@/components/divItem/divItem';
import FormItem from '@/components/form/formItem';
import Modal from '@/components/modal/modal';

import { ICONS } from '@components/icons/icon';

export default function Register() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value.trim());
    console.log('value', e.target.value);
  }

  return (
    <>
      <DivItem
        onClick={() => setOpen(true)}
        icon={<ICONS.SignCircle width={20} height={20} />}
        text="Sign up"
        className="text-sm"
      />
      <Modal isOpen={open} onClose={() => setOpen(false)} title="Sign up">
        <FormItem
          label="Username"
          name="username"
          value={value}
          onChange={handleChange}
          error=""
          placeholder="Input username"
        />
      </Modal>
    </>
  );
}
