import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://localhost:3001',
    timeout: 1000
  });