import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import en from '../../locales/en/common.json';
import vi from '../../locales/vi/common.json';

const translations: Record<'en' | 'vi', Record<string, string>> = { en, vi };

export const useTranslation = () => {
  const router = useRouter();
  const pathname = usePathname(); // dùng để xác định locale từ path
  const searchParams = useSearchParams();
  const pathLocale = pathname.split('/')[1] as 'en' | 'vi';
  const locale: 'en' | 'vi' = pathLocale === 'vi' ? 'vi' : 'en';

  const t = (key: string) => translations[locale][key] || key;

  return { t, locale, router, pathname, searchParams };
};
