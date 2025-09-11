import { useState } from 'react';

import Button from '@/components/button/button';
import { ICONS } from '@/components/icons/icon';
import Modal from '@/components/modal/modal';
import { toastError, toastSuccess } from '@/helper/toastHelper';
import { useMutationCustom } from '@/hooks/useMutationCustom';
import { useAuthStore } from '@/store/authStore';
import { TypeLoginData } from '@/types/user';

import SignInFormFiled from './signInFormField';
import { FormFieldSignIn } from './validateFieldSignIn';
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
  const login = useAuthStore((state) => state.login);
  const { mutate, isPending } = useMutationCustom<
    TypeLoginData,
    FormSignInData
  >({
    key: 'signin',
  });

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

    mutate(form, {
      onSuccess: (data) => {
        if (data) {
          const { user, token } = data.content;
          login(user, token);
          toastSuccess('Đăng nhập thành công 🎉');
          resetForm();
          onClose();
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
            disabled={isPending}
            type="submit"
            className="w-full flex justify-center !rounded-full py-2 px-4"
          >
            {isPending ? <ICONS.Loading width={24} height={24} /> : 'Sign in'}
          </Button>
        </div>
      </form>
    </Modal>
  );
}
