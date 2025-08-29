import apiClient from './apiClient';

/**
 * Creates a new contact made record.
 * @param {object} contactData - The data for the contact.
 * @param {string} contactData.clientname - The name of the client.
 * @param {string} contactData.mobilenumber - The mobile number of the client.
 * @param {string} contactData.email - The email of the client.
 * @param {string} contactData.response - The response from the client.
 * @param {string} contactData.status - The status of the contact.
 * @returns {Promise<object>} The response data from the server.
 */
export const createContact = async (contactData) => {
  try {
    const response = await apiClient.post('/hrms/create/contactmade/', contactData);
    return response.data;
  } catch (error) {
    // Re-throw with more context
    if (error.response) {
      throw new Error(`Server Error ${error.response.status}: ${JSON.stringify(error.response.data)}`);
    } else if (error.request) {
      throw new Error('Network Error: No response from server');
    } else {
      throw new Error(`Request Error: ${error.message}`);
    }
  }
};

/**
 * Fetches the list of contacts made.
 * @returns {Promise<Array<object>>} A list of contacts.
 */
export const getContacts = async () => {
  try {
    const response = await apiClient.get('/hrms/create/contactmade/');
    // The list of contacts is in the 'data' array.
    return response.data.results.data;
  } catch (error) {
    console.error('Error fetching contacts:', error);
    throw error;
  }
};

/**
 * Fetches the list of offboarding items.
 * @returns {Promise<Array<object>>} A list of contacts.
 */
export const getOffboardingList = async () => {
  try {
    const response = await apiClient.get('/hrms/offboarding/list/');
    // The list of contacts is in the 'data' array.
    return response.data.results.data;
  } catch (error) {
    console.error('Error fetching contacts:', error);
    throw error;
  }
};

/**
 * Fetches the dashboard data for the employee.
 * This includes leave stats and public holidays.
 * @returns {Promise<object>} The dashboard data.
 */
export const getDashboardData = async () => {
  try {
    const response = await apiClient.get('/hrms/dashboard/employee/');
    // The actual data is nested in the response.
    return response.data.results.data;
  } catch (error) {
    // Log the error for debugging purposes.
    console.error('Error fetching dashboard data:', error);
    // Re-throw the error to be handled by the calling component.
    throw error;
  }
};

/**
 * Fetches the dashboard data for the employee.
 * This includes leave stats and public holidays.
 * @returns {Promise<object>} The dashboard data.
 */
export const getLeaveRequests = async () => {
  try {
    const response = await apiClient.get('/hrms/leave/request/');
    // The actual data is nested in the response.
    return response.data.results.data;
  } catch (error) {
    // Log the error for debugging purposes.
    console.error('Error fetching dashboard data:', error);
    // Re-throw the error to be handled by the calling component.
    throw error;
  }
};

/**
 * Creates a new leave request.
 * @param {object} leaveData - The data for the leave request.
 * @param {string} leaveData.from_date - The start date of the leave (YYYY-MM-DD).
 * @param {string} leaveData.to_date - The end date of the leave (YYYY-MM-DD).
 * @param {string} leaveData.reason - The reason for the leave.
 * @param {string} leaveData.type_of_leave - The ID for the type of leave.
 * @param {string} leaveData.leave_day_type - The type of leave day (e.g., 'full Day', 'half Day').
 * @param {string} leaveData.day_session - The session if it's a half day (e.g., 'Afternoon').
 * @returns {Promise<object>} The response data from the server.
 */
export const createLeaveRequest = async (leaveData) => {
  try {
    const response = await apiClient.post('/hrms/leave/request/', leaveData);
    return response;
  } catch (error) {
    console.error('Error creating leave request:', error);
    throw error;
  }
};

/**
 * Fetches the user's profile data.
 * @returns {Promise<object>} The user's profile data.
 */
export const getUserProfile = async () => {
  try {
    const response = await apiClient.get('/hrms/user/profile/');
    // The profile data is the first element in the 'data' array.
    return response.data.results.data[0];
  } catch (error) {
    console.error('Error fetching user profile:', error);
    throw error;
  }
};

/**
 * Creates a new resignation request.
 * Note: The original example used a GET request, which is unconventional for creating data.
 * This has been implemented as a POST request to follow RESTful best practices.
 * @param {object} resignationData - The data for the resignation request.
 * @param {string} resignationData.resignation_date - The date of resignation (YYYY-MM-DD).
 * @param {string} resignationData.last_working_date - The last working day (YYYY-MM-DD).
 * @param {string} resignationData.reason - The reason for resignation.
 * @returns {Promise<object>} The response data from the server.
 */
export const createResignation = async (resignationData) => {
  console.log("resignationData-->", resignationData)
  try {
    const response = await apiClient.post('/hrms/resignation/post/', resignationData);
    return response.data;
  } catch (error) {
    console.error('Error creating resignation request:', error);
    throw error;
  }
};

// Add these functions to your apiService.js file

export const updateLeaveRequest = async (leaveId, leaveData) => {
  try {
    const response = await apiClient.patch(`/hrms/update/leave/request/${leaveId}/`, leaveData);
    return response.data;
  } catch (error) {
    console.error('Error updating leave request:', error);
    throw error;
  }
};

export const deleteLeaveRequest = async (leaveId) => {
  try {
    const response = await apiClient.delete(`/hrms/delete/leave/request/${leaveId}/`);
    return response.data;
  } catch (error) {
    console.error('Error deleting leave request:', error);
    throw error;
  }
};

/** Updates an existing contact made record.
 * @param {number} contactId - The ID of the contact to update.
 * @param {object} contactData - The updated data for the contact.
 * @param {string} contactData.clientname - The name of the client.
 * @param {string} contactData.mobilenumber - The mobile number of the client.
 * @param {string} contactData.email - The email of the client.
 * @param {string} contactData.response - The response from the client.
 * @param {string} contactData.status - The status of the contact.
 * @returns {Promise<object>} The response data from the server.
 */
export const updateContact = async (contactId, contactData) => {
  try {
    const response = await apiClient.patch(`/hrms/update/${contactId}/contactmade/`, contactData);
    return response.data;
  } catch (error) {
    // Re-throw with more context
    if (error.response) {
      throw new Error(`Server Error ${error.response.status}: ${JSON.stringify(error.response.data)}`);
    } else if (error.request) {
      throw new Error('Network Error: No response from server');
    } else {
      throw new Error(`Request Error: ${error.message}`);
    }
  }
};

/**
 * Deletes a contact made record.
 * @param {number} contactId - The ID of the contact to delete.
 * @returns {Promise<object>} The response data from the server.
 */
export const deleteContact = async (contactId) => {
  try {
    const response = await apiClient.delete(`/hrms/delete/${contactId}/contactmade/`);    
    return response.data;
  } catch (error) {
    // Re-throw with more context
    if (error.response) {
      throw new Error(`Server Error ${error.response.status}: ${JSON.stringify(error.response.data)}`);
    } else if (error.request) {
      throw new Error('Network Error: No response from server');
    } else {
      throw new Error(`Request Error: ${error.message}`);
    }
  }
};