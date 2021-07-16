import axios from 'axios';
import { parseCookies } from 'nookies';

const cookies = parseCookies();

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    Authorization: `Bearer ${cookies['fazumbem.token']}`,
  },
});

export default api;
