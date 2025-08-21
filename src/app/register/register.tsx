'use client';

import { useState } from 'react';

import Button from '@/components/button/button';
import { API_URL } from '@/components/constants/constants';
import DivItem from '@/components/divItem/divItem';
import Modal from '@/components/modal/modal';
import { toastSuccess } from '@/helper/toastHelper';
import { apiFetch } from '@/services/api';
import { User } from '@/types/user';

import { ICONS } from '@components/icons/icon';

import RegisterFormFiled from './registerFormFiled';
import { FormField } from './validateFiled';
import { FormData, FormErrors, validateForm } from './validateForm';

const INITIAL_FORM: FormData = {
  name: '',
  email: '',
  password: '',
  phone: '',
  gender: '',
  birthday: '',
  role: 'user',
};

export default function Register() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState<FormData>({ ...INITIAL_FORM });
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);

  // --- Handle form field change ---
  const handleChange = (name: FormField, value: string) => {
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({
      ...prev,
      [name]: validateForm({ ...form, [name]: value })[name],
    }));
  };

  // --- Handle submit ---
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validateForm(form);
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    try {
      setLoading(true);
      const result = await apiFetch<User>(`${API_URL}/auth/signup`, {
        method: 'POST',
        body: JSON.stringify(form),
      });
      if (result) {
        toastSuccess('Đăng ký thành công 🎉');
        resetForm();
      }
    } catch (error) {
      console.error('Signup failed:', error);
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setForm({ ...INITIAL_FORM });
    setErrors({});
    setOpen(false);
    setLoading(false);
  };

  return (
    <>
      <DivItem
        onClick={() => setOpen(true)}
        icon={<ICONS.SignCircle width={20} height={20} />}
        text="Sign up"
        className="text-sm"
      />
      <Modal isOpen={open} onClose={resetForm} title="Sign up">
        <form onSubmit={handleSubmit} className="space-y-1 sm:space-y-2">
          <RegisterFormFiled
            form={form}
            errors={errors}
            onChange={handleChange}
          />
          <Button
            disabled={loading}
            type="submit"
            className="w-full mt-4 flex justify-center"
          >
            {loading ? <ICONS.Loading width={24} height={24} /> : 'Continue'}
          </Button>
        </form>
      </Modal>
    </>
  );
}
