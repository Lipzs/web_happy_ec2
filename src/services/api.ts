import axios from 'axios';

const api = axios.create({
  baseURL: 'http://34.201.200.134:3333'
});

export default api;
