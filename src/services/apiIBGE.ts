import axios from 'axios';

const apiIBGE = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_IBGE,
});

export default apiIBGE;
