import axios from 'axios';

const defaultAxiosConfig = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_API_URL,
  responseType: 'json',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

export default defaultAxiosConfig;
