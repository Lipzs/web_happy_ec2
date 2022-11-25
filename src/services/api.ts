import axios from 'axios';

const api = axios.create({
  baseURL: 'http://ec2-54-158-162-69.compute-1.amazonaws.com:3333'
});

export default api;
