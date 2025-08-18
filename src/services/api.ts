import { API_TOKEN } from '@/components/constants/constants';

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

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(errorText || 'Failed to fetch');
  }

  return res.json() as Promise<T>;
}
