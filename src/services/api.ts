import axios from 'axios';

const api = axios.create({
  baseURL: 'http://ec2-44-206-254-244.compute-1.amazonaws.com:3333'
});

export default api;
