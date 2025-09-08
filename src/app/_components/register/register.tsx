'use client';

import { useState } from 'react';

import Button from '@/components/button/button';
import DivItem from '@/components/divItem/divItem';
import Modal from '@/components/modal/modal';
import { toastError, toastSuccess } from '@/helper/toastHelper';
import { DataRegister } from '@/services/apiRegister';

import { ICONS } from '@components/icons/icon';
import { useMutation } from '@tanstack/react-query';

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
}

export default function Register({ open, onClose }: RegisterProps) {
  const [form, setForm] = useState<FormData>({ ...INITIAL_FORM });
  const [errors, setErrors] = useState<FormErrors>({});
  const mutation = useMutation(DataRegister());
  const { mutate, isPending } = mutation;

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

    mutate(form, {
      onSuccess: (data) => {
        if (data) {
          toastSuccess('Đăng ký thành công 🎉');
          resetForm();
        }
      },
      onError: (error) => {
        toastError(`❌ ${error.content || error.message}`);
      },
    });
  };

  const resetForm = () => {
    setForm({ ...INITIAL_FORM });
    setErrors({});
    onClose();
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
        <form onSubmit={handleSubmit} className="">
          <div className="max-h-[90vh] sm:max-h-[60vh] overflow-y-auto p-5 space-y-0.5 sm:space-y-2 border-b border-gray-200">
            <RegisterFormFiled
              form={form}
              errors={errors}
              onChange={handleChange}
            />
          </div>
          <div className="py-5 px-8">
            <Button
              disabled={isPending}
              type="submit"
              className="w-full flex justify-center !rounded-full"
            >
              {isPending ? (
                <ICONS.Loading width={24} height={24} />
              ) : (
                'Continue'
              )}
            </Button>
          </div>
        </form>
      </Modal>
    </>
  );
}
