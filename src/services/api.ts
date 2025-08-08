const BASE_URL = 'https://airbnbnew.cybersoft.edu.vn/api';

const TOKEN_CYBERSOFT =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJOT0RFSlMgNTAiLCJIZXRIYW5TdHJpbmciOiIxMC8xMC8yMDI1IiwiSGV0SGFuVGltZSI6IjE3NjAwNTQ0MDAwMDAiLCJuYmYiOjE3NDA4NzM2MDAsImV4cCI6MTc2MDIyNzIwMH0.mMbbQrfpocDbm-PEesfDTdZug1iAejOCCrKEFpq4pr8';

export async function callApi(endpoint: string, options: RequestInit = {}) {
  const res = await fetch(`${BASE_URL}${endpoint}`, {
    headers: {
      tokenCybersoft: TOKEN_CYBERSOFT,
    },
    ...options,
  });
  if (!res.ok) {
    throw new Error(`Api error: ${res.status}`);
  }
  return res.json();
}
