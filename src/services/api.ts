import axios from 'axios';

export default axios.create({
  baseURL: `http://ec2-3-93-10-3.compute-1.amazonaws.com:3001`,
});
