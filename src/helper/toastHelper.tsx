import { CheckCircle, Info, XCircle } from 'lucide-react';
import { toast } from 'sonner';

export const toastSuccess = (mes: string, dur?: number) => {
  toast.success(`${mes} 🎉`, {
    duration: dur ?? 2000,
    className: '!text-gray-700',
    icon: <CheckCircle className="w-5 h-5 text-green-500" />,
  });
};

export const toastError = (mes: string, dur?: number) => {
  toast.error(`${mes} ❌`, {
    duration: dur ?? 2000,
    className: '!text-red-500',
    icon: <XCircle className="w-5 h-5 text-red-500" />,
  });
};

export const toastInfo = (mes: string, dur?: number) => {
  toast.info(mes, {
    duration: dur ?? 2000,
    className: '!text-gray-700',
    icon: <Info className="w-5 h-5 text-blue-500" />,
  });
};
