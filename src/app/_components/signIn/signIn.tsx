import { useState } from 'react';

import Button from '@/components/button/button';
import { API_URL } from '@/components/constants/constants';
import { ICONS } from '@/components/icons/icon';
import Modal from '@/components/modal/modal';
import { toastError, toastSuccess } from '@/helper/toastHelper';
import { ApiError, apiFetch } from '@/services/api';

import SignInFormFiled from './signInFormFiled';
import { FormFieldSignIn } from './validateFiledSignIn';
import {
  FormSignInData,
  FormSignInErrors,
  validateFormSignIn,
} from './validateFormSignIn';

const INITIAL_FORM: FormSignInData = {
  email: '',
  password: '',
};
interface SignInProps {
  open: boolean;
  onClose: () => void;
  signUp: () => void;
}

export default function SignIn({ open, onClose, signUp }: SignInProps) {
  const [form, setForm] = useState<FormSignInData>({ ...INITIAL_FORM });
  const [errors, setErrors] = useState<FormSignInErrors>({});
  const [loading, setLoading] = useState(false);

  const handleChange = (name: FormFieldSignIn, value: string) => {
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({
      ...prev,
      [name]: validateFormSignIn({ ...form, [name]: value })[name],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validateFormSignIn(form);
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;
    try {
      setLoading(true);
      const result = await apiFetch(`${API_URL}/auth/signin`, {
        method: 'POST',
        body: JSON.stringify(form),
      });

      if (result) {
        toastSuccess('Đăng nhập thành công 🎉');
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
    <Modal isOpen={open} onClose={onClose} title="Sign in">
      <form onSubmit={handleSubmit}>
        <div className="max-h-[90vh] sm:max-h-[60vh] overflow-y-auto p-5 space-y-0.5 sm:space-y-2">
          <SignInFormFiled
            form={form}
            errors={errors}
            onChange={handleChange}
          />
          <p className="text-right">
            <Button variant="link" onClick={signUp} className="text-sm">
              Bạn chưa có tài khoản? Đăng ký ngay.
            </Button>
          </p>
        </div>
        <div className="py-5 px-8">
          <Button
            disabled={loading}
            type="submit"
            className="w-full flex justify-center !rounded-full py-2 px-4"
          >
            {loading ? <ICONS.Loading width={24} height={24} /> : 'Sign in'}
          </Button>
        </div>
      </form>
    </Modal>
  );
}
