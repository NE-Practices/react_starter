const API_BASE_URL = import.meta.env.VITE_BACKEND_URL;

export const API_ENDPOINTS = {
  auth: {
    login: `${API_BASE_URL}/auth/login`,
    register: `${API_BASE_URL}/user/create`,
    verifyAccountInitiate: `${API_BASE_URL}/auth/initiate-email-verification`,
    verifyAccountConfirm: (code: string) =>
      `${API_BASE_URL}/auth/verify-email/${code}`,
    resetPasswordInitiate: `${API_BASE_URL}/auth/initiate-reset-password`,
    resetPasswordConfirm: `${API_BASE_URL}/auth/reset-password`,
  },
  user: {
    me: `${API_BASE_URL}/user/me`,
    all: `${API_BASE_URL}/user/all`,
  },
};

export default API_ENDPOINTS;
