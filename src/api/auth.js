import apiClient from './apiClient';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Store user data along with token
/**
 * Stores the authentication token.
 * @param {string} token - The token to store.
 * @param {object}  userData- The userData to store.
 */
export const storeAuthData = async (token, userData) => {
  try {
    await AsyncStorage.setItem('authToken', token);
    await AsyncStorage.setItem('userData', JSON.stringify(userData));
  } catch (error) {
    console.error('Error storing auth data:', error);
  }
};

/**
 * Retrieves the authentication token.
 * @returns {Promise<string|null>} The stored token.
 */

export const retrieveToken = async () => {
  try {
    return await AsyncStorage.getItem('authToken');
  } catch (error) {
    console.error('Error retrieving token:', error);
    return null;
  }
};

export const retrieveUserData = async () => {
  try {
    const userData = await AsyncStorage.getItem('userData');
    return userData ? JSON.parse(userData) : null;
  } catch (error) {
    console.error('Error retrieving user data:', error);
    return null;
  }
};

export const clearToken = async () => {
  try {
    await AsyncStorage.removeItem('authToken');
    await AsyncStorage.removeItem('userData');
  } catch (error) {
    console.error('Error clearing token:', error);
  }
};

/**
 * Logs in the user, stores the token, and returns the session data.
 * @param {string} username - The user's username.
 * @param {string} password - The user's password.
 * @returns {Promise<object>} The response data from the server.
 */

export const login = async (username, password) => {
  try {
    const response = await apiClient.post('/hrms/login/', { username, password });
    const token = response.data.results.token;
    if (token) {
      // Store both token and user data from the response.data.results.data
      await storeAuthData(token, response.data.results.data);
    }
    return response.data;
  } catch (error) {
    console.error('Error during login:', error);
    throw error;
  }
};

export const logout = async () => {
  await clearToken();
};

/**
 * Gets the authentication token for the API client interceptor.
 * @returns {Promise<string|null>} The stored token.
 */

export const getAuthToken = async () => {
  return await retrieveToken();
};