import { API_TOKEN } from '@/components/constants/constants';

export interface ApiError {
  statusCode: number;
  message: string;
  content?: string;
  dateTime?: string;
}
export async function apiFetch<T>(
  url: string,
  options: RequestInit = {},
): Promise<T> {
  const res = await fetch(url, {
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
      message: data?.message || res.statusText,
      content: data?.content,
      dateTime: data?.dateTime,
    };
    throw error;
  }

  return data as T;
}
