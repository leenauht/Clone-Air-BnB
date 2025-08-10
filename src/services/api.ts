// const BASE_URL = 'https://airbnbnew.cybersoft.edu.vn/api';

const TOKEN_CYBERSOFT =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJOT0RFSlMgNTAiLCJIZXRIYW5TdHJpbmciOiIxMC8xMC8yMDI1IiwiSGV0SGFuVGltZSI6IjE3NjAwNTQ0MDAwMDAiLCJuYmYiOjE3NDA4NzM2MDAsImV4cCI6MTc2MDIyNzIwMH0.mMbbQrfpocDbm-PEesfDTdZug1iAejOCCrKEFpq4pr8';

export async function apiFetch<T>(
  url: string,
  options: RequestInit = {},
): Promise<T> {
  const res = await fetch(url, {
    method: 'GET', // default
    headers: {
      'Content-Type': 'application/json',
      tokenCybersoft: TOKEN_CYBERSOFT,
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
