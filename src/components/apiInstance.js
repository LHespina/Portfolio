import axios from 'axios';
// Create an Axios instance with a base URL
const apiInstance = axios.create({
  baseURL: 'http://localhost:8080', // Set your base URL here
});

export default apiInstance;

  