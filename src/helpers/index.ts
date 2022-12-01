// Create axios instance
import axios from 'axios';

export const dummydata = axios.create({
  // this could be held on a const file or env variable
  baseURL: 'https://dummyjson.com/',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});
