import axios from 'axios';
import { getAuthToken } from './auth'; // Assuming you have a function to get the token

// NOTE: The base URL should point to your production API.
// For local development, you might use 'http://127.0.0.1:8000'.
const apiClient = axios.create({
  baseURL: 'https://swahrmanagerapi.zinfog.in',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor to include the auth token in every request.
apiClient.interceptors.request.use(
  async (config) => {
    // TODO: Implement the getAuthToken function to retrieve the token from storage (e.g., AsyncStorage).
    const token = await getAuthToken();
    if (token) {
      config.headers.Authorization = `token ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default apiClient;
