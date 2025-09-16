export const ROUTES = {
  HOME: '/',
  ROOM_DETAIL: '/room',
};
export const API_URL_DEFAULT = process.env.NEXT_PUBLIC_API_URL;

export const API_URL = {
  'phong-thue': { method: 'GET', url: `${API_URL_DEFAULT}/phong-thue` },
  'vi-tri': { method: 'GET', url: `${API_URL_DEFAULT}/vi-tri` },
  signin: { method: 'POST', url: `${API_URL_DEFAULT}/auth/signin` },
  signup: { method: 'POST', url: `${API_URL_DEFAULT}/auth/signup` },
};

export const API_TOKEN = {
  TOKEN_CYBERSOFT:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJOT0RFSlMgNTAiLCJIZXRIYW5TdHJpbmciOiIxMC8xMC8yMDI1IiwiSGV0SGFuVGltZSI6IjE3NjAwNTQ0MDAwMDAiLCJuYmYiOjE3NDA4NzM2MDAsImV4cCI6MTc2MDIyNzIwMH0.mMbbQrfpocDbm-PEesfDTdZug1iAejOCCrKEFpq4pr8',
};
