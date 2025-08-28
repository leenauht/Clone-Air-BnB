import { API_TOKEN } from '@/components/constants/constants';

export interface ApiError {
  statusCode: number;
  message: string;
  [key: string]: unknown; // merge thêm data
}
export async function apiFetch<T>(
  url: string,
  options: RequestInit = {},
): Promise<T> {
  const res = await fetch(url, {
    method: 'GET', // default
    headers: {
      'Content-Type': 'application/json',
      tokenCybersoft: API_TOKEN.TOKEN_CYBERSOFT,
      ...(options.headers || {}),
    },
    ...options,
  });

  const data = await res.json().catch(() => null); // case: no body

  if (!res.ok) {
    const error: ApiError = {
      statusCode: res.status,
      message: res.statusText,
      ...(data ?? {}),
    };
    throw error;
  }

  return data as T;
}
