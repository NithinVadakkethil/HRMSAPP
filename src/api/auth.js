import apiClient from './apiClient';

// This is a placeholder for your token storage.
// You should replace this with a call to a secure storage solution
// like AsyncStorage or a keychain library.
let storedToken = null;

/**
 * Stores the authentication token.
 * @param {string} token - The token to store.
 */
export const storeToken = async (token) => {
  // TODO: Implement token storage (e.g., await AsyncStorage.setItem('authToken', token));
  console.log('Storing token:', token);
  storedToken = token;
};

/**
 * Retrieves the authentication token.
 * @returns {Promise<string|null>} The stored token.
 */
export const retrieveToken = async () => {
  // TODO: Implement token retrieval (e.g., await AsyncStorage.getItem('authToken'));
  console.log('Retrieving token:', storedToken);
  return storedToken;
};

/**
 * Clears the authentication token.
 */
export const clearToken = async () => {
  // TODO: Implement token clearing (e.g., await AsyncStorage.removeItem('authToken'));
  console.log('Clearing token');
  storedToken = null;
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
