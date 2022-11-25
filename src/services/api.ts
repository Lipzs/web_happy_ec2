import axios from 'axios';

const api = axios.create({
  baseURL: 'https://04vxmzj1ja.execute-api.us-east-1.amazonaws.com/dev'
});

export default api;
