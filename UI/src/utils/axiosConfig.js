import axios from 'axios';
import { getAccessToken, getRefreshToken, setTokens, clearTokens } from './tokenUtils';
import { __userapiurl } from '../reqUrl';

// Request interceptor to add token
axios.interceptors.request.use((config) => {
  const token = getAccessToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Response interceptor to handle token refresh
axios.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      const refreshToken = getRefreshToken();
      if (refreshToken) {
        try {
          const response = await axios.post(__userapiurl + 'refreshToken', { refreshToken });
          const { accessToken } = response.data;
          setTokens(accessToken, refreshToken);
          error.config.headers.Authorization = `Bearer ${accessToken}`;
          return axios.request(error.config);
        } catch {
          clearTokens();
          window.location.href = '/login';
        }
      }
    }
    return Promise.reject(error);
  }
);

export default axios;