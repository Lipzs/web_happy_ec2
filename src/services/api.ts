import axios from 'axios';

export default axios.create({
  baseURL: `http://ec2-44-201-210-126.compute-1.amazonaws.com:3001`,
});
