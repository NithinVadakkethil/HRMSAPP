import apiClient from './apiClient';
import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * Stores the authentication token.
 * @param {string} token - The token to store.
 */
export const storeToken = async (token) => {
  try {
    await AsyncStorage.setItem('authToken', token);
  } catch (error) {
    console.error('Error storing token:', error);
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

/**
 * Clears the authentication token.
 */
export const clearToken = async () => {
  try {
    await AsyncStorage.removeItem('authToken');
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
      await storeToken(token);
    }
    return response.data;
  } catch (error) {
    console.error('Error during login:', error);
    throw error;
  }
};

/**
 * Logs out the user by clearing the token.
 */
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
