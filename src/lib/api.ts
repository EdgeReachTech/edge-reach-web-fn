// lib/api.ts
// api/axios.ts
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000', 
  withCredentials: false // If using cookies
});

export default api;