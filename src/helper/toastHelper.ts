import { toast } from 'sonner';

export const toastSuccess = (mes: string, dur?: number) => {
  toast.success(mes, {
    duration: dur ?? 2000,
  });
};

export const toastError = (mes: string, dur?: number) => {
  toast.error(mes, {
    duration: dur ?? 2000,
  });
};

export const toastInfo = (mes: string, dur?: number) => {
  toast.info(mes, {
    duration: dur ?? 2000,
  });
};
