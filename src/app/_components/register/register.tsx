'use client';

import { useState } from 'react';

import Button from '@/components/button/button';
import { API_URL } from '@/components/constants/constants';
import DivItem from '@/components/divItem/divItem';
import Modal from '@/components/modal/modal';
import { toastError, toastSuccess } from '@/helper/toastHelper';
import { ApiError, apiFetch } from '@/services/api';
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

interface RegisterProps {
  open: boolean;
  onClose: () => void;
  signIn: () => void;
}

export default function Register({ open, onClose, signIn }: RegisterProps) {
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
    } catch (error: unknown) {
      if (isApiError(error)) {
        toastError(`❌ ${error.content}`);
      } else {
        toastError('❌ Unknown error');
      }
    } finally {
      setLoading(false);
    }
  };

  function isApiError(error: unknown): error is ApiError {
    return (
      typeof error === 'object' &&
      error !== null &&
      'statusCode' in error &&
      'message' in error
    );
  }

  const resetForm = () => {
    setForm({ ...INITIAL_FORM });
    setErrors({});
    onClose();
    setLoading(false);
  };

  return (
    <>
      {!open ? (
        <DivItem
          prefix={<ICONS.SignCircle width={20} height={20} />}
          text="Sign up"
          className="text-sm"
        />
      ) : null}

      <Modal isOpen={open} onClose={resetForm} title="Sign up">
        <form onSubmit={handleSubmit}>
          <div className="max-h-[90vh] sm:max-h-[60vh] overflow-y-auto p-5 space-y-0.5 sm:space-y-2 border-b border-gray-200">
            <RegisterFormFiled
              form={form}
              errors={errors}
              onChange={handleChange}
            />
            <p className="text-right">
              <Button variant="link" onClick={signIn} className="text-sm">
                Sign in now.
              </Button>
            </p>
          </div>
          <div className="py-5 px-8">
            <Button
              disabled={loading}
              type="submit"
              className="w-full flex justify-center !rounded-full py-2 px-4"
            >
              {loading ? <ICONS.Loading width={24} height={24} /> : 'Continue'}
            </Button>
          </div>
        </form>
      </Modal>
    </>
  );
}
