'use client';

import { useState } from 'react';

import Button from '@/components/button/button';
import TextWithIcons from '@/components/divItem/textWithIcons';
import Modal from '@/components/modal/modal';
import { toastError, toastSuccess } from '@/helper/toastHelper';
import { useMutationCustom } from '@/hooks/useMutationCustom';
import { User } from '@/types/user';

import { ICONS } from '@components/icons/icon';

import RegisterFormFiled from './registerFormFiled';
import { FormFieldSignUp } from './validateFiled';
import { FormData, FormErrors, validateFormSignUp } from './validateForm';

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

  const { mutate, isPending } = useMutationCustom<User, FormData>({
    key: 'signup',
  });

  // --- Handle form field change ---
  const handleChange = (name: FormFieldSignUp, value: string) => {
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({
      ...prev,
      [name]: validateFormSignUp({ ...form, [name]: value })[name],
    }));
  };

  // --- Handle submit ---
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validateFormSignUp(form);
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    mutate(form, {
      onSuccess: (data) => {
        if (data) {
          toastSuccess('Đăng ký thành công');
          resetForm();
          signIn();
        }
      },
      onError: (error) => {
        toastError(error.content || error.message);
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
        <TextWithIcons
          prefix={<ICONS.SignCircle width={20} height={20} />}
          text="Sign up"
          className="text-sm"
        />
      ) : null}

      <Modal isOpen={open} onClose={resetForm} title="Sign up">
        <form onSubmit={handleSubmit} className="form-signIn-and-signUp">
          <div className="p-5">
            <div className="space-y-0.5 sm:space-y-2">
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
                disabled={isPending}
                type="submit"
                className="w-full flex justify-center !rounded-full py-2 px-4"
              >
                {isPending ? (
                  <ICONS.Loading width={24} height={24} />
                ) : (
                  'Continue'
                )}
              </Button>
            </div>
          </div>
        </form>
      </Modal>
    </>
  );
}
